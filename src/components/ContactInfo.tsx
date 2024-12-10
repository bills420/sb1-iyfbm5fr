import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex items-center space-x-4">
        <MapPin className="h-6 w-6 text-white" />
        <div>
          <h3 className="font-medium text-white">Address</h3>
          <p className="text-gray-400">4 Roberton Rd. Auckland, New Zealand</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Mail className="h-6 w-6 text-white" />
        <div>
          <h3 className="font-medium text-white">Email</h3>
          <a href="mailto:billsco@beatbybills.com" className="text-white hover:text-gray-300">
            billsco@beatbybills.com
          </a>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Phone className="h-6 w-6 text-white" />
        <div>
          <h3 className="font-medium text-white">Phone</h3>
          <a href="tel:+64220755223" className="text-white hover:text-gray-300">
            +64 220 755 223
          </a>
        </div>
      </div>
    </div>
  );
}