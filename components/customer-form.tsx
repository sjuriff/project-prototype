import { Mail, User } from "lucide-react";

export default function CustomerForm() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <h2 className="font-heading text-tertiary-heading mb-6">Contact Information</h2>
      
      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm text-primary-text font-body mb-2">
              First Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-text" />
              <input
                type="text"
                id="firstName"
                placeholder="John"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent font-body text-primary-text"
              />
            </div>
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm text-primary-text font-body mb-2">
              Last Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-text" />
              <input
                type="text"
                id="lastName"
                placeholder="Doe"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent font-body text-primary-text"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-primary-text font-body mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-text" />
            <input
              type="email"
              id="email"
              placeholder="john.doe@example.com"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent font-body text-primary-text"
            />
          </div>
          <p className="mt-2 text-xs text-secondary-text">
            Your eSIM QR code will be sent to this email
          </p>
        </div>
      </form>
    </div>
  );
}