
import React, { useState } from 'react';

interface MultiStepFormProps {
  onClose: () => void;
}

interface FormData {
  name: string;
  situation: string;
  industry: string;
  whatsapp: string;
  email: string;
}

// Robust error type that allows string indexing
type FormErrors = Record<string, string | undefined>;

const MultiStepForm: React.FC<MultiStepFormProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    situation: '',
    industry: '',
    whatsapp: '',
    email: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: keyof FormData, value: string): string => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        else if (value.trim().length < 2) error = 'Minimum 2 characters required';
        break;
      case 'industry':
        if (!value.trim()) error = 'Industry or Profession is required';
        else if (value.trim().length < 2) error = 'Please be more specific';
        break;
      case 'whatsapp':
        if (!value.trim()) error = 'WhatsApp number is required';
        else if (!/^[6-9]\d{9}$/.test(value.trim())) error = 'Enter a valid 10-digit mobile number';
        break;
      case 'email':
        if (value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          error = 'Enter a valid email address';
        }
        break;
      case 'situation':
        if (!value) error = 'Please select your situation';
        break;
    }
    return error;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: error || undefined }));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors(prev => ({ ...prev, [field]: error || undefined }));
  };

  const isStepValid = () => {
    if (step === 1) return formData.name.trim().length >= 2 && !validateField('name', formData.name);
    if (step === 2) return formData.situation !== '';
    if (step === 3) return formData.industry.trim().length >= 2 && !validateField('industry', formData.industry);
    if (step === 4) return /^[6-9]\d{9}$/.test(formData.whatsapp.trim()) && !validateField('email', formData.email);
    return true;
  };

  const nextStep = () => {
    const fieldsToValidate: (keyof FormData)[] = [];
    if (step === 1) fieldsToValidate.push('name');
    if (step === 3) fieldsToValidate.push('industry');
    
    const newErrors: FormErrors = {};
    let hasErrors = false;

    fieldsToValidate.forEach(field => {
      const err = validateField(field, formData[field]);
      if (err) {
        newErrors[field] = err;
        hasErrors = true;
      }
    });

    if (!hasErrors) {
      setStep(prev => prev + 1);
    } else {
      setErrors(prev => ({ ...prev, ...newErrors }));
      const newTouched = { ...touched };
      fieldsToValidate.forEach(f => newTouched[f] = true);
      setTouched(newTouched);
    }
  };

  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStepValid()) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
    }, 1500);
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
            <>
              <div className="flex items-center gap-2 mb-10">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className={`h-1.5 flex-grow rounded-full transition-all duration-500 ${step >= i ? 'bg-cyan' : 'bg-white/10'}`} />
                ))}
              </div>

              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-2 uppercase tracking-tight">HEY! LET'S START 👋</h2>
                  <p className="text-white/60 mb-8 text-base">First, what should I call you?</p>
                  
                  <div className="space-y-6">
                    <div className="block">
                      <span className="text-xs font-bold text-white/40 uppercase tracking-widest block mb-3">Your First Name</span>
                      <input 
                        type="text" 
                        autoFocus
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        placeholder="Enter your name..."
                        className={`w-full h-[52px] bg-white/5 border rounded-xl px-6 py-4 focus:outline-none transition-all text-base ${errors.name ? 'border-danger' : 'border-white/10 focus:border-cyan'}`}
                      />
                      {errors.name && <p className="text-danger text-[10px] mt-2 font-bold uppercase tracking-wider animate-in fade-in slide-in-from-top-1">{errors.name}</p>}
                    </div>
                    
                    <button 
                      disabled={!isStepValid()}
                      onClick={nextStep}
                      className="w-full h-14 rounded-xl bg-cta-gradient font-bold text-lg shadow-lg shadow-cyan/20 disabled:opacity-50 disabled:grayscale transition-all active:scale-95"
                    >
                      CONTINUE →
                    </button>
                    <p className="text-center text-xs text-white/30">🔒 Your info is 100% safe with me</p>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-2 uppercase tracking-tight">NICE TO MEET YOU, {formData.name.toUpperCase()}! 👋</h2>
                  <p className="text-white/60 mb-8 text-base">What describes your situation best?</p>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      { id: 'new', title: '🆕 I\'M COMPLETELY NEW', desc: "Just exploring options for now" },
                      { id: 'struggling', title: '🔄 I\'VE TRIED BUT NEED HELP', desc: "Already in business, but struggling to grow" },
                      { id: 'serious', title: '🚀 I\'M READY TO GET SERIOUS', desc: "Want to join and start properly right now" }
                    ].map(opt => (
                      <button 
                        key={opt.id}
                        onClick={() => { setFormData({...formData, situation: opt.id}); setStep(3); }}
                        className={`w-full text-left p-6 rounded-2xl border transition-all active:scale-[0.98] ${formData.situation === opt.id ? 'bg-cyan/10 border-cyan shadow-lg shadow-cyan/10' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
                      >
                        <h4 className="font-bold text-sm md:text-base mb-1">{opt.title}</h4>
                        <p className="text-xs text-white/40">{opt.desc}</p>
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button onClick={prevStep} className="text-white/40 font-medium hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">← BACK</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-2 uppercase tracking-tight">TELL ME MORE... 💼</h2>
                  <p className="text-white/60 mb-8 text-base">What is your current company, industry, or profession?</p>
                  
                  <div className="space-y-6">
                    <div className="block">
                      <span className="text-xs font-bold text-white/40 uppercase tracking-widest block mb-3">Company or Industry</span>
                      <input 
                        type="text" 
                        autoFocus
                        value={formData.industry}
                        onChange={(e) => handleInputChange('industry', e.target.value)}
                        onBlur={() => handleBlur('industry')}
                        placeholder="e.g. IT Professional, Student, Retail, etc."
                        className={`w-full h-[52px] bg-white/5 border rounded-xl px-6 py-4 focus:outline-none transition-all text-base ${errors.industry ? 'border-danger' : 'border-white/10 focus:border-cyan'}`}
                      />
                      {errors.industry && <p className="text-danger text-[10px] mt-2 font-bold uppercase tracking-wider animate-in fade-in slide-in-from-top-1">{errors.industry}</p>}
                    </div>
                    
                    <button 
                      disabled={!isStepValid()}
                      onClick={nextStep}
                      className="w-full h-14 rounded-xl bg-cta-gradient font-bold text-lg shadow-lg shadow-cyan/20 disabled:opacity-50 disabled:grayscale transition-all active:scale-95"
                    >
                      CONTINUE →
                    </button>
                    
                    <div className="flex items-center justify-center">
                      <button onClick={prevStep} className="text-white/40 font-medium hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">← BACK</button>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-2 uppercase tracking-tight">ALMOST THERE! 🎯</h2>
                  <p className="text-white/60 mb-8 text-base">Where should I send your free access?</p>
                  
                  <div className="space-y-6 mb-10">
                    <div className="block">
                        <span className="text-xs font-bold text-white/40 uppercase tracking-widest block mb-3">📱 WhatsApp Number</span>
                        <div className="flex gap-2">
                          <div className="h-[52px] bg-white/5 border border-white/10 rounded-xl px-4 flex items-center text-sm font-bold text-white/60">+91</div>
                          <input 
                              type="tel" 
                              maxLength={10}
                              value={formData.whatsapp}
                              onChange={(e) => handleInputChange('whatsapp', e.target.value.replace(/\D/g, ''))}
                              onBlur={() => handleBlur('whatsapp')}
                              placeholder="98765 43210"
                              className={`flex-grow h-[52px] bg-white/5 border rounded-xl px-6 py-4 focus:outline-none transition-all text-base ${errors.whatsapp ? 'border-danger' : 'border-white/10 focus:border-cyan'}`}
                          />
                        </div>
                        {errors.whatsapp && <p className="text-danger text-[10px] mt-2 font-bold uppercase tracking-wider animate-in fade-in slide-in-from-top-1">{errors.whatsapp}</p>}
                    </div>
                    <div className="block">
                        <span className="text-xs font-bold text-white/40 uppercase tracking-widest block mb-3">📧 Email (Optional)</span>
                        <input 
                            type="email" 
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            onBlur={() => handleBlur('email')}
                            placeholder="your@email.com"
                            className={`w-full h-[52px] bg-white/5 border rounded-xl px-6 py-4 focus:outline-none transition-all text-base ${errors.email ? 'border-danger' : 'border-white/10 focus:border-cyan'}`}
                        />
                        {errors.email && <p className="text-danger text-[10px] mt-2 font-bold uppercase tracking-wider animate-in fade-in slide-in-from-top-1">{errors.email}</p>}
                    </div>
                    
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-cyan focus:ring-cyan" />
                      <span className="text-[10px] md:text-xs text-white/40 leading-tight group-hover:text-white/60 transition-colors">Yes, send me personalized guidance, business updates & free training alerts on WhatsApp.</span>
                    </label>
                  </div>

                  <button 
                    disabled={!isStepValid() || isSubmitting}
                    onClick={handleSubmit}
                    className="w-full h-16 rounded-xl bg-cta-gradient font-bold text-lg md:text-xl shadow-xl shadow-cyan/20 disabled:opacity-50 transition-all active:scale-95 flex flex-col items-center justify-center gap-0.5"
                  >
                    {isSubmitting ? (
                        <div className="w-7 h-7 border-2 border-space/20 border-t-space rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>🚀 GET MY FREE ACCESS NOW</span>
                        <span className="text-[10px] md:text-xs font-medium opacity-80 uppercase tracking-tighter">⚡ Instant access after submit</span>
                      </>
                    )}
                  </button>
                  
                  <div className="mt-6 flex flex-col items-center gap-4">
                    <p className="text-[10px] text-white/20 text-center uppercase tracking-widest font-bold">🔒 No spam. Unsubscribe anytime.</p>
                    <button onClick={prevStep} className="text-white/40 font-medium hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">← BACK</button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <svg className="w-10 h-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-3xl font-display font-bold mb-4 uppercase tracking-tighter">YOU'RE IN, {formData.name.split(' ')[0]}! 🎉</h2>
                <p className="text-white/60 mb-10 text-lg leading-relaxed">I'll message you on WhatsApp within the next 24 hours to guide you on the next steps.</p>
                
                <div className="space-y-4">
                    <div className="text-xs font-bold text-white/30 uppercase tracking-widest mb-2 font-display">While you wait:</div>
                    <button onClick={() => { onClose(); document.getElementById('webinar')?.scrollIntoView({behavior: 'smooth'})}} className="w-full py-5 rounded-2xl bg-white text-space font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-white/10 flex items-center justify-center gap-3">
                        📺 SAVE MY WEBINAR SEAT
                    </button>
                    <button onClick={() => window.open('https://wa.me/919876543210', '_blank')} className="w-full py-4 rounded-xl glass border-success/30 text-success font-bold hover:bg-success/10 transition-all flex items-center justify-center gap-2">
                        💬 CHAT ON WHATSAPP NOW
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
