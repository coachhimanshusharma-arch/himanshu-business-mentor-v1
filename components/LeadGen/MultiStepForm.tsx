
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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp is required';
    else if (!/^[6-9]\d{9}$/.test(formData.whatsapp.trim())) newErrors.whatsapp = 'Enter valid 10-digit number';
    if (!formData.age.trim()) newErrors.age = 'Age is required';
    if (!formData.profession.trim()) newErrors.profession = 'Profession is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const success = await submitLead({
      name: formData.name,
      whatsapp: formData.whatsapp,
      age: formData.age,
      profession: formData.profession,
      source: 'single-step-form'
    });

    if (success) {
      setIsSuccess(true);
    }
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-space/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="w-full max-w-lg glass rounded-[2.5rem] overflow-hidden relative shadow-2xl shadow-cyan/20 border-white/10">
        {!isSuccess && (
          <button onClick={onClose} className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-10 p-2">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        <div className="p-8 md:p-12">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2 uppercase tracking-tight">START YOUR JOURNEY 👋</h2>
              <p className="text-white/60 mb-8 text-base text-balance">Fill in your details below to get instant access to the mentorship program.</p>

              <div className="space-y-5">
                {/* Name */}
                <div className="block">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2 px-1">Full Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full h-14 bg-white/5 border rounded-2xl px-6 focus:outline-none transition-all text-base ${errors.name ? 'border-danger/50' : 'border-white/10 focus:border-cyan/50'}`}
                  />
                  {errors.name && <p className="text-danger text-[10px] mt-1.5 px-1 font-bold uppercase tracking-wider">{errors.name}</p>}
                </div>

                {/* WhatsApp */}
                <div className="block">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2 px-1">WhatsApp Number</span>
                  <div className="flex gap-2">
                    <div className="h-14 bg-white/5 border border-white/10 rounded-2xl px-4 flex items-center text-sm font-bold text-white/60">+91</div>
                    <input
                      type="tel"
                      name="whatsapp"
                      maxLength={10}
                      value={formData.whatsapp}
                      onChange={(e) => handleChange({ ...e, target: { ...e.target, name: 'whatsapp', value: e.target.value.replace(/\D/g, '') } } as any)}
                      placeholder="98765 43210"
                      className={`flex-grow h-14 bg-white/5 border rounded-2xl px-6 focus:outline-none transition-all text-base ${errors.whatsapp ? 'border-danger/50' : 'border-white/10 focus:border-cyan/50'}`}
                    />
                  </div>
                  {errors.whatsapp && <p className="text-danger text-[10px] mt-1.5 px-1 font-bold uppercase tracking-wider">{errors.whatsapp}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Age */}
                  <div className="block">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2 px-1">Age</span>
                    <input
                      type="tel"
                      name="age"
                      maxLength={2}
                      value={formData.age}
                      onChange={(e) => handleChange({ ...e, target: { ...e.target, name: 'age', value: e.target.value.replace(/\D/g, '') } } as any)}
                      placeholder="e.g. 24"
                      className={`w-full h-14 bg-white/5 border rounded-2xl px-6 focus:outline-none transition-all text-base ${errors.age ? 'border-danger/50' : 'border-white/10 focus:border-cyan/50'}`}
                    />
                    {errors.age && <p className="text-danger text-[10px] mt-1.5 px-1 font-bold uppercase tracking-wider">{errors.age}</p>}
                  </div>

                  {/* Profession */}
                  <div className="block">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2 px-1">Profession</span>
                    <input
                      type="text"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      placeholder="e.g. Student"
                      className={`w-full h-14 bg-white/5 border rounded-2xl px-6 focus:outline-none transition-all text-base ${errors.profession ? 'border-danger/50' : 'border-white/10 focus:border-cyan/50'}`}
                    />
                    {errors.profession && <p className="text-danger text-[10px] mt-1.5 px-1 font-bold uppercase tracking-wider">{errors.profession}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 rounded-2xl bg-cta-gradient font-bold text-lg md:text-xl shadow-xl shadow-cyan/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3 mt-4"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-space/20 border-t-space rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>GET INSTANT ACCESS</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="text-center text-[10px] text-white/20 uppercase tracking-[0.2em] font-medium mt-4">🔒 Your information is secure</p>
              </div>
            </form>
          ) : (
            <div className="text-center animate-in zoom-in duration-500 py-4">
              <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-display font-bold mb-4 uppercase tracking-tighter text-glow">YOU'RE ALL SET! 🎉</h2>
              <p className="text-white/60 mb-10 text-lg leading-relaxed">Check your WhatsApp. I'll reach out to you within 24 hours with your next steps.</p>

              <div className="space-y-4">
                <button
                  onClick={() => { onClose(); document.getElementById('webinar')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="w-full py-5 rounded-2xl bg-white text-space font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-white/10"
                >
                  📺 JOIN FREE WEBINAR NOW
                </button>
                <button
                  onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                  className="w-full py-4 rounded-xl glass border-success/30 text-success font-bold hover:bg-success/5 transition-all"
                >
                  💬 CHAT ON WHATSAPP
                </button>
              </div>

              <button onClick={onClose} className="mt-8 text-white/20 text-[10px] uppercase tracking-widest font-bold hover:text-white transition-colors">Close Window</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
