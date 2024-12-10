import { useState } from 'react';
import Button from '../ui/Button';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import Typography from '../ui/Typography';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="mt-12 space-y-6">
      <FormInput
        id="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      
      <FormInput
        id="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      
      <FormTextarea
        id="message"
        label="Message"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        required
      />
      
      <Button
        type="submit"
        variant="secondary"
        className="w-full"
      >
        Get a Quote
      </Button>
    </form>
  );
}