
import React, { useState } from 'react';
import { submitLead, WHATSAPP_NUMBER } from '../../utils/submitLead';

interface MultiStepFormProps {
  onClose: () => void;
}

interface FormData {
  name: string;
  whatsapp: string;
  age: string;
  profession: string;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    whatsapp: '',
    age: '',
    profession: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!/^[6-9]\d{9}$/.test(formData.whatsapp.trim())) newErrors.whatsapp = 'Valid WhatsApp number required';
    if (!formData.age || parseInt(formData.age) < 18 || parseInt(formData.age) > 80) newErrors.age = 'Valid age required (18-80)';
    if (!formData.profession) newErrors.profession = 'Select your profession';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await submitLead({
      name: formData.name,
      whatsapp: formData.whatsapp,
      age: formData.age,
      profession: formData.profession,
      source: 'single-step-form',
    });
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const professions = ['Student', 'Housewife', 'Job Person', 'Business Owner', 'Other'];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-space/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="w-full max-w-lg glass rounded-[2.5rem] overflow-hidden relative shadow-2xl shadow-cyan/20 border-white/10">
        <button onClick={onClose} className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-10 p-2">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-12">
          {!isSuccess ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2 uppercase tracking-tight text-center">Start Your Journey 🚀</h2>
              <p className="text-white/60 mb-8 text-center text-sm">Fill this simple form to get instant access.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest block mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className={`w-full h-12 bg-white/5 border rounded-xl px-4 focus:outline-none transition-all ${errors.name ? 'border-danger' : 'border-white/10 focus:border-cyan'}`}
                  />
                  {errors.name && <p className="text-danger text-[10px] mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest block mb-2">WhatsApp Number</label>
                  <div className="flex gap-2">
                    <div className="h-12 bg-white/5 border border-white/10 rounded-xl px-3 flex items-center text-sm font-bold text-white/60">+91</div>
                    <input
                      type="tel"
                      maxLength={10}
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value.replace(/\D/g, '') })}
                      placeholder="98765 43210"
                      className={`flex-grow h-12 bg-white/5 border rounded-xl px-4 focus:outline-none transition-all ${errors.whatsapp ? 'border-danger' : 'border-white/10 focus:border-cyan'}`}
                    />
                  </div>
                  {errors.whatsapp && <p className="text-danger text-[10px] mt-1">{errors.whatsapp}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest block mb-2">Age</label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder="e.g. 24"
                      className={`w-full h-12 bg-white/5 border rounded-xl px-4 focus:outline-none transition-all ${errors.age ? 'border-danger' : 'border-white/10 focus:border-cyan'}`}
                    />
                    {errors.age && <p className="text-danger text-[10px] mt-1">{errors.age}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest block mb-2">Profession</label>
                    <select
                      value={formData.profession}
                      onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                      className={`w-full h-12 bg-white/5 border rounded-xl px-4 focus:outline-none transition-all appearance-none text-white ${errors.profession ? 'border-danger' : 'border-white/10 focus:border-cyan'}`}
                    >
                      <option value="" disabled className="bg-space text-white/40">Select...</option>
                      {professions.map(p => (
                        <option key={p} value={p} className="bg-space text-white">{p}</option>
                      ))}
                    </select>
                    {errors.profession && <p className="text-danger text-[10px] mt-1">{errors.profession}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-xl bg-cta-gradient font-bold text-lg shadow-lg shadow-cyan/20 disabled:opacity-50 transition-all active:scale-95 mt-6"
                >
                  {isSubmitting ? 'Submitting...' : '🚀 APPLY NOW'}
                </button>
                <p className="text-center text-[10px] text-white/30 uppercase tracking-widest">🔒 Your data is safe & private</p>
              </form>
            </div>
          ) : (
            <div className="text-center animate-in zoom-in duration-500 py-10">
              <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <span className="text-4xl">🎉</span>
              </div>
              <h2 className="text-3xl font-display font-bold mb-4 uppercase tracking-tighter">APPLICATION RECEIVED!</h2>
              <p className="text-white/60 mb-8 text-lg leading-relaxed">Thank you, {formData.name.split(' ')[0]}! <br /> I will review your application and contact you shortly.</p>

              <button onClick={onClose} className="px-8 py-3 rounded-xl glass font-bold hover:bg-white/10 transition-all">Close Window</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
