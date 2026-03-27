import { MessageCircle, Phone, FileText, Clipboard, GraduationCap, Shield, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const WHATSAPP_LINK = "https://wa.me/254751772123?text=Hi%20NAIM%20Agency%2C%20I%20want%20to%20automate%20my%20business.";

function AccordionItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-gold bg-white' : 'border-gray-200 bg-white'}`}>
      <button
        onClick={onToggle}
        className="w-full px-8 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className={`font-medium text-lg ${isOpen ? 'text-gold' : 'text-charcoal'}`}>{question}</span>
        <ChevronDown
          size={24}
          className={`text-gold transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-8 py-5 border-t border-gray-100 text-charcoal leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

function LandingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: 'How much does this cost?',
      answer: 'After the free 15-minute call, I give you a clear monthly price based on your business size and what needs automating. Plans start from $397 per month. No setup fee. No long contract. Cancel anytime.'
    },
    {
      question: 'How long does setup take?',
      answer: 'Most businesses are fully live within 7 to 10 days. We handle every technical part. You touch nothing.'
    },
    {
      question: 'Do I need a Computer or Special Software?',
      answer: 'No. If you can send a WhatsApp message, you can use GoAutomatic. Everything works on your phone and runs in the cloud.'
    },
    {
      question: 'What if my staff don\'t know how to use it?',
      answer: 'We train your team in under 30 minutes. After that, the system runs itself and your staff check a simple daily summary.'
    },
    {
      question: 'Is my client data safe?',
      answer: 'Yes. Encrypted tools, access control, Kenya Data Protection Act and GDPR compliant. If your business handles sensitive information, we set it up with an extra layer of security.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${isScrolled ? 'border-b border-gray-100 shadow-sm' : 'border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <img
                src="/image.png"
                alt="NAIM Agency Logo"
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:block font-serif text-3xl">
              <span className="text-charcoal">Go </span>
              <span className="text-gold">Automatic</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#contact" className="text-charcoal hover:text-gold transition-colors">
                Contact
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gold text-gold px-6 py-2 rounded-full hover:bg-gold hover:text-white transition-all duration-300 font-medium"
              >
                Book Appointment
              </a>
            </div>
            <div className="md:hidden">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gold text-gold px-4 py-2 rounded-full hover:bg-gold hover:text-white transition-all duration-300 text-sm"
              >
                Book
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-8 leading-tight">
              From <span className="text-gold">Manual</span> <span className="text-charcoal">→ </span>
              <span className="text-gold">Automatic</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm fade-in">
                <img
                  src="/20260327_0103_Image_Generation_remix_01kmp2r4sffextkztf38j7qden.png"
                  alt="Before - Manual customer work"
                  className="h-48 w-full object-cover rounded-xl mb-6"
                />
                <h3 className="font-serif text-2xl text-charcoal mb-2">Before</h3>
                <p className="text-gold">Manual customer work</p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-gold shadow-sm fade-in">
                <div className="h-48 bg-gray-100 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-gray-400">After Image</span>
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-2">After</h3>
                <p className="text-gold">Automatic replies + content + lead follow-up</p>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-10">
              Same business. Less stress. Everything on your phone.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-gold text-gold px-8 py-4 rounded-full text-lg font-medium hover:bg-gold hover:text-white transition-all duration-300 mb-4"
            >
              Book Appointment
            </a>

            <p className="text-sm text-gray-500">
              No pressure. If you don't want this, we'll tell you exactly why you need it.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-6 text-charcoal">
              Turn your manual business work into <span className="text-gold">clean</span> automation
            </h2>
            <p className="text-center text-charcoal text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
             We help small businesses stop losing time, money, and customers to repetitive daily tasks. We build Automatic systems that reply to customers, post your content, and follow up on every lead — automatically, every single day. without you lifting a finger.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-fit mx-auto border-2 border-gold text-gold px-8 py-4 rounded-full text-lg font-medium hover:bg-gold hover:text-white transition-all duration-300 mb-6"
            >
              Book Appointment
            </a>

            <p className="text-center text-sm text-gray-500">
             No pressure. If you don't want this, we'll tell you exactly why you need it.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-charcoal">
              What <span className="text-gold">You Get</span>
            </h2>

            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
              <div className="space-y-8">
                <div className="flex items-start gap-6 pb-8 border-b border-gray-100 last:pb-0 last:border-0 fade-in">
                  <Phone className="text-gold flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-serif text-2xl text-charcoal mb-2">AI Customer Reply System</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Your business gets an AI trained on your products and FAQs. It replies to every WhatsApp, Instagram DM, and email instantly, 24/7.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 pb-8 border-b border-gray-100 last:pb-0 last:border-0 fade-in">
                  <FileText className="text-gold flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-serif text-2xl text-charcoal mb-2">Daily Content Automation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Content written, designed, and posted to Instagram, TikTok, Twitter (X), Facebook, Snapchat and Youtube every single day. 30+ pieces per month. You do nothing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 pb-8 border-b border-gray-100 last:pb-0 last:border-0 fade-in">
                  <Clipboard className="text-gold flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-serif text-2xl text-charcoal mb-2">Automated Lead Follow-Up</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Every lead gets a message within 3 minutes. Then again after 2 days. Then after 7 days. Automatically. No lead slips through.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 pb-8 border-b border-gray-100 last:pb-0 last:border-0 fade-in">
                  <GraduationCap className="text-gold flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-serif text-2xl text-charcoal mb-2">Short Training so you can run it yourself</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We train your team in under 30 minutes. After that, everything runs itself and your team checks a daily summary.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-gray-500 mt-8">
              Optional Add-Ons: Reminders · Follow-ups · Google Sheets Sync
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-charcoal">
              How It <span className="text-gold">Works</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="text-center fade-in">
                <div className="w-24 h-24 bg-gold-tint rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="text-gold" size={48} />
                </div>
                <h3 className="font-serif text-4xl text-gold mb-4">1</h3>
                <h4 className="font-serif text-2xl text-charcoal mb-3">Book Appointment</h4>
                <p className="text-gray-600 leading-relaxed">
                  Quick consultation to understand your needs
                </p>
              </div>

              <div className="text-center fade-in">
                <div className="w-24 h-24 bg-gold-tint rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="text-gold" size={48} />
                </div>
                <h3 className="font-serif text-4xl text-gold mb-4">2</h3>
                <h4 className="font-serif text-2xl text-charcoal mb-3">We build your system</h4>
                <p className="text-gray-600 leading-relaxed">
                  Custom designed for your business in 7-10 days
                </p>
              </div>

              <div className="text-center fade-in">
                <div className="w-24 h-24 bg-gold-tint rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clipboard className="text-gold" size={48} />
                </div>
                <h3 className="font-serif text-4xl text-gold mb-4">3</h3>
                <h4 className="font-serif text-2xl text-charcoal mb-3">You go automatic</h4>
                <p className="text-gray-600 leading-relaxed">
                  Start using it with confidence
                </p>
              </div>
            </div>

            <div className="bg-gold-tint rounded-3xl p-8 md:p-12 border border-gold fade-in">
              <Shield className="text-gold mx-auto mb-4" size={40} />
              <h3 className="font-serif text-3xl text-charcoal text-center mb-4">Your Data is Protected</h3>
              <p className="text-gray-600 text-center leading-relaxed max-w-3xl mx-auto">
                Encrypted tools, access control, Kenya Data Protection Act and GDPR compliant. Your clients' data stays safe.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-charcoal">
              Common <span className="text-gold">Questions</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === index}
                  onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
              Let's <span className="text-gold">Go Automatic</span>
            </h2>

            <p className="text-lg text-charcoal mb-12">
              Submit your details and forms below, then choose a booking time.
            </p>

            <div className="bg-white rounded-3xl border-2 border-gold p-8 md:p-12 shadow-sm">
              <form className="space-y-6">
                <div>
                  <label className="block text-left text-charcoal font-medium mb-3">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-6 py-3 border-2 border-gold rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 transition-all text-charcoal placeholder-gray-400"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-left text-charcoal font-medium mb-3">
                      Email <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-6 py-3 border-2 border-gold rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 transition-all text-charcoal placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-left text-charcoal font-medium mb-3">
                      Phone <span className="text-gold">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-6 py-3 border-2 border-gold rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 transition-all text-charcoal placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-left text-charcoal font-medium mb-3">
                    Tell us about your project/Task/Business/Company
                  </label>
                  <textarea
                    placeholder="Tell us what tasks you want to run automatically and How can we help your business, 1. Saving business time 2. Reducing Business Cost 3. Increasing business revenue"
                    rows={5}
                    className="w-full px-6 py-3 border-2 border-gold rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 transition-all text-charcoal placeholder-gray-400 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-left text-charcoal font-medium mb-3">
                    Upload all the tasks you want them to run automatic
                  </label>
                  <div className="border-2 border-gold rounded-xl p-4 flex items-center gap-4">
                    <button
                      type="button"
                      className="bg-gold text-white px-6 py-2 rounded-full font-medium hover:bg-gold/90 transition-colors whitespace-nowrap"
                    >
                      Choose Files
                    </button>
                    <span className="text-gray-400">No file chosen</span>
                  </div>
                </div>

                <div>
                  <label className="block text-left text-charcoal font-medium mb-3">
                    Consultation appointment time slot
                  </label>
                  <p className="text-left text-gray-600 text-sm mb-3">
                    Please choose a preferred time slot that suits you. We will then contact you to confirm the closest available date.
                  </p>
                  <select className="w-full px-6 py-3 border-2 border-gold rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 transition-all text-charcoal appearance-none bg-white cursor-pointer">
                    <option value="">Select a time slot</option>
                    <option value="9am">9:00 AM - 10:00 AM</option>
                    <option value="10am">10:00 AM - 11:00 AM</option>
                    <option value="2pm">2:00 PM - 3:00 PM</option>
                    <option value="3pm">3:00 PM - 4:00 PM</option>
                    <option value="4pm">4:00 PM - 5:00 PM</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="bg-gold text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gold/90 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
            <div className="flex-shrink-0">
              <img
                src="/image.png"
                alt="NAIM Agency Logo"
                className="h-24 w-24"
              />
            </div>

            <div className="flex flex-col gap-4 text-center md:text-left">
              <p className="text-charcoal text-lg">
                <span className="font-medium text-gold">WhatsApp:</span> <span className="text-gold">+254751772123</span>
              </p>
              <p className="text-charcoal text-lg">
                <span className="font-medium text-gold">Email:</span> <span className="text-gold">salminabdalla93@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm">© 2026 Naim Agency. All rights reserved. GlobalWide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
