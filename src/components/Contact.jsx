import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { developerInfo } from '../data/projects';
import { Mail, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const { ref, isInView } = useInView();
  const [form, setForm] = useState({ name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    // Open mail client
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(form.message);
    window.open(`mailto:${developerInfo.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-dark-900">
      <div className="max-w-2xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="mb-10 text-center">
          <span className={`reveal ${isInView ? 'visible' : ''} block text-xs font-mono text-indigo-400 uppercase tracking-widest mb-3`}>
            // contact
          </span>
          <h2 className={`reveal reveal-delay-1 ${isInView ? 'visible' : ''} text-3xl sm:text-4xl font-bold text-white`}>
            Let's work together
          </h2>
          <p className={`reveal reveal-delay-2 ${isInView ? 'visible' : ''} mt-3 text-slate-400 text-base`}>
            Have a project in mind? Send me a message. I respond within 24 hours.
          </p>
        </div>

        {/* Email shown clearly */}
        <div className={`reveal reveal-delay-3 ${isInView ? 'visible' : ''} flex items-center justify-center gap-2 mb-8`}>
          <Mail size={15} className="text-indigo-400" />
          <a
            href={`mailto:${developerInfo.email}`}
            id="contact-email-link"
            className="text-indigo-400 hover:text-indigo-300 font-mono text-sm transition-colors"
          >
            {developerInfo.email}
          </a>
        </div>

        {/* Form */}
        <div className={`reveal ${isInView ? 'visible' : ''} glass-card rounded-2xl p-6 sm:p-8`} style={{ transitionDelay: '0.3s' }}>
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-white font-semibold text-lg">Message prepared!</h3>
              <p className="text-slate-400 text-sm max-w-xs">
                Your email client opened with the message ready. I'll reply within 24 hours.
              </p>
              <button
                className="mt-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors touch-target"
                onClick={() => { setSubmitted(false); setForm({ name: '', message: '' }); }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-slate-300 text-sm font-medium">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Sarah Johnson"
                  autoComplete="name"
                  className="w-full px-4 py-3.5 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-slate-300 text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project. What do you need built?"
                  className="w-full px-4 py-3.5 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                id="contact-submit-btn"
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.01] hover:shadow-lg hover:shadow-indigo-500/25 touch-target text-sm"
              >
                <Send size={15} />
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* WhatsApp option */}
        <div className={`reveal ${isInView ? 'visible' : ''} mt-6 text-center`} style={{ transitionDelay: '0.45s' }}>
          <p className="text-slate-500 text-xs mb-3">Or reach me directly on WhatsApp</p>
          <a
            id="contact-whatsapp-btn"
            href={`https://wa.me/${developerInfo.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:scale-105 touch-target"
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
