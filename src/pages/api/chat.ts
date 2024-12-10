import type { APIRoute } from 'astro';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY
});

const SYSTEM_PROMPT = `You are an AI assistant for BEATBYBILLS, a professional music production service. You help customers with:
- Beat licensing and pricing
- Music production services
- Studio booking
- Artist collaborations
- Technical questions about music production

Key information:
- Basic license starts at $29.99
- Pro license is $99.99
- Exclusive rights from $499.99
- We offer subscription plans starting at $9.99/month
- We're partnered with LOUD.army
- Contact: billsco@beatbybills.com, +64 220 755 223

Keep responses friendly, professional, and concise. Use emojis occasionally to maintain a modern, engaging tone.`;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message } = await request.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message }
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || "I apologize, but I'm having trouble processing your request at the moment. Please try again or contact our support team directly.";

    return new Response(JSON.stringify({ response }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('OpenAI Error:', error);
    
    // Fallback responses if API fails
    const fallbackResponses = {
      greeting: "Hi there! 👋 How can I help you today?",
      pricing: "Our beat prices start at $29.99 for basic licenses. Would you like to see our full pricing breakdown?",
      contact: "You can reach us at billsco@beatbybills.com or call us at +64 220 755 223. How can we assist you?",
      default: "Thanks for reaching out! I'm here to help with any questions about our beats, services, or licensing."
    };

    const message = (error as Error).message || 'Unknown error';
    const fallbackResponse = message.toLowerCase().includes('api') 
      ? fallbackResponses.default
      : fallbackResponses.greeting;

    return new Response(JSON.stringify({ response: fallbackResponse }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};