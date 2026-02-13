
import React, { useState } from 'react';
import { submitLead, WHATSAPP_NUMBER } from '../../utils/submitLead';

interface InstantLeadFormProps {
    onClose: () => void;
}

interface FormData {
    name: string;
    whatsapp: string;
    age: string;
    profession: string;
}

const InstantLeadForm: React.FC<InstantLeadFormProps> = ({ onClose }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        whatsapp: '',
        age: '',
        profession: 'Student' // Default to common option
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Required';
        if (!formData.whatsapp.trim()) newErrors.whatsapp = 'Required';
        else if (!/^[6-9]\d{9}$/.test(formData.whatsapp.trim())) newErrors.whatsapp = 'Invalid Number';
        if (!formData.age.trim()) newErrors.age = 'Required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        // Simulating API delay for better UX
        await new Promise(resolve => setTimeout(resolve, 800));

        const success = await submitLead({
            name: formData.name,
            whatsapp: formData.whatsapp,
            age: formData.age,
            profession: formData.profession,
            source: 'instant-form'
        });

        if (success) {
            setIsSuccess(true);
        }
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="w-full max-w-md glass border-white/10 rounded-3xl overflow-hidden relative shadow-2xl animate-in zoom-in-95 duration-200">

                {/* Close Button */}
                {!isSuccess && (
                    <button onClick={onClose} className="absolute top-4 right-4 p-2 text-white/50 hover:text-white rounded-full hover:bg-white/10 transition-all z-10">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}

                <div className="p-6 md:p-8">
                    {!isSuccess ? (
                        <form onSubmit={handleSubmit}>
                            <div className="text-center mb-6">
                                <span className="inline-block py-1 px-3 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-[10px] font-bold tracking-widest uppercase mb-3">
                                    🚀 Priority Access
                                </span>
                                <h2 className="text-2xl font-display font-bold uppercase tracking-tight">Apply Now</h2>
                                <p className="text-white/50 text-sm mt-1">Limited spots available for this batch.</p>
                            </div>

                            <div className="space-y-4">
                                {/* Name */}
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        className={`w-full h-12 bg-white/5 border rounded-xl px-4 focus:outline-none transition-all placeholder:text-white/30 ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-cyan/50 focus:bg-white/10'}`}
                                    />
                                    {errors.name && <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.name}</p>}
                                </div>

                                {/* WhatsApp */}
                                <div className="flex gap-2">
                                    <div className="h-12 bg-white/5 border border-white/10 rounded-xl px-3 flex items-center text-sm font-bold text-white/50 select-none">
                                        🇮🇳 +91
                                    </div>
                                    <div className="flex-grow">
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            maxLength={10}
                                            value={formData.whatsapp}
                                            onChange={(e) => handleChange({ ...e, target: { ...e.target, name: 'whatsapp', value: e.target.value.replace(/\D/g, '') } } as any)}
                                            placeholder="WhatsApp Number"
                                            className={`w-full h-12 bg-white/5 border rounded-xl px-4 focus:outline-none transition-all placeholder:text-white/30 ${errors.whatsapp ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-cyan/50 focus:bg-white/10'}`}
                                        />
                                        {errors.whatsapp && <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.whatsapp}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    {/* Age */}
                                    <div>
                                        <input
                                            type="tel"
                                            name="age"
                                            maxLength={2}
                                            value={formData.age}
                                            onChange={(e) => handleChange({ ...e, target: { ...e.target, name: 'age', value: e.target.value.replace(/\D/g, '') } } as any)}
                                            placeholder="Age"
                                            className={`w-full h-12 bg-white/5 border rounded-xl px-4 focus:outline-none transition-all placeholder:text-white/30 ${errors.age ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-cyan/50 focus:bg-white/10'}`}
                                        />
                                        {errors.age && <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.age}</p>}
                                    </div>

                                    {/* Profession Dropdown */}
                                    <div className="relative">
                                        <select
                                            name="profession"
                                            value={formData.profession}
                                            onChange={handleChange}
                                            className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 focus:outline-none focus:border-cyan/50 focus:bg-white/10 appearance-none text-white/80"
                                        >
                                            <option value="Student" className="bg-slate-900 text-white">Student</option>
                                            <option value="Employee" className="bg-slate-900 text-white">Employee</option>
                                            <option value="Business" className="bg-slate-900 text-white">Business</option>
                                            <option value="Housewife" className="bg-slate-900 text-white">Housewife</option>
                                            <option value="Other" className="bg-slate-900 text-white">Other</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-14 mt-2 rounded-xl bg-gradient-to-r from-cyan to-blue-600 font-bold text-lg shadow-lg shadow-cyan/25 hover:shadow-cyan/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <span>Submit Application</span>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-[10px] text-white/30 flex items-center justify-center gap-1">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                    100% Secure & Confidential
                                </p>
                            </div>
                        </form>
                    ) : (
                        <div className="text-center py-6 animate-in zoom-in duration-300">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/50">
                                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
                            <p className="text-white/60 text-sm mb-8">We have received your details. Check your WhatsApp for the next steps.</p>

                            <div className="space-y-3">
                                <button
                                    onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                                    className="w-full py-3.5 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.304-5.235c0-5.421 4.409-9.85 9.85-9.85 2.633 0 5.106 1.026 6.967 2.887 1.861 1.862 2.888 4.335 2.888 6.968-.001 5.421-4.41 9.85-9.828 9.85" /></svg>
                                    Chat on WhatsApp
                                </button>
                                <button onClick={onClose} className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors font-medium text-sm">
                                    Close Window
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InstantLeadForm;
