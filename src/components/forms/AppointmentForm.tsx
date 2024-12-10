import { useState } from 'react';
import { format } from 'date-fns';
import emailjs from '@emailjs/browser';
import Button from '../ui/Button';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormTextarea from './FormTextarea';
import { toast } from 'react-hot-toast';

const services = [
  { value: 'carpentry', label: 'Carpentry' },
  { value: 'beauty', label: 'Beauty Services' },
  { value: 'design', label: 'Design Services' },
  { value: 'demolition', label: 'Demolition' },
  { value: 'crypto', label: 'Crypto Consulting' },
  { value: 'web', label: 'Web Development' },
  { value: 'beats', label: 'Beat Making' },
  { value: 'music', label: 'Music Production' }
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', 
  '14:00', '15:00', '16:00', '17:00'
];

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const templateParams = {
        to_email: 'billsco@beatbybills.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        appointment_date: format(new Date(formData.date), 'PPP'),
        appointment_time: formData.time,
        notes: formData.notes
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );

      toast.success('Appointment request sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        notes: ''
      });
    } catch (error) {
      toast.error('Failed to send appointment request. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const minDate = format(new Date(), 'yyyy-MM-dd');

  return (
    <form onSubmit={handleSubmit} className="mt-12 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          id="name"
          label="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <FormInput
          id="email"
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          id="phone"
          label="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        
        <FormSelect
          id="service"
          label="Select Service"
          value={formData.service}
          onChange={handleChange}
          required
          options={services}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          id="date"
          label="Preferred Date"
          type="date"
          min={minDate}
          value={formData.date}
          onChange={handleChange}
          required
        />
        
        <FormSelect
          id="time"
          label="Preferred Time"
          value={formData.time}
          onChange={handleChange}
          required
          options={timeSlots.map(time => ({ value: time, label: time }))}
        />
      </div>

      <FormTextarea
        id="notes"
        label="Additional Notes"
        value={formData.notes}
        onChange={handleChange}
        rows={4}
        placeholder="Please provide any additional details about your appointment..."
      />
      
      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Schedule Appointment'}
      </Button>
    </form>
  );
}