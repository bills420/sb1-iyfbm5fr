import ContactInfo from './ContactInfo';
import AppointmentForm from './forms/AppointmentForm';
import Typography from './ui/Typography';
import Section from './ui/Section';
import Container from './ui/Container';

export default function Contact() {
  return (
    <Section id="contact" className="section-gradient">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Typography variant="h2" className="text-white mb-4">
              Schedule an Appointment
            </Typography>
            <Typography variant="p" className="text-zinc-400">
              Book your service appointment today and we'll get back to you within 24 hours
            </Typography>
          </div>
          
          <ContactInfo />
          <AppointmentForm />
        </div>
      </Container>
    </Section>
  );
}