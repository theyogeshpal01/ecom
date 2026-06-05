import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send,
  Building,
  HelpCircle,
  AlertCircle,
  ChevronDown
} from 'lucide-react';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "What Is Your Response Time For Inquiries?", a: "We typically respond to all inquiries within 24 hours. For urgent matters, please use our 24/7 emergency line." },
    { q: "Do You Offer International Shipping?", a: "Yes, we offer seamless worldwide delivery with trusted logistics partners and transparent tracking." },
    { q: "Can I Visit Your Workshop?", a: "We welcome buyers to visit our facilities by appointment. Please contact our team to schedule a visit." },
    { q: "Do You Offer Custom Design Services?", a: "Absolutely. We offer tailored solutions designed to meet your specific market needs and brand requirements." }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs & Simple Header like the Image */}
      <div className="bg-[#faf9f6] py-16 text-center border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-wide uppercase mb-4">Contact</h1>
        <p className="text-gray-500 font-medium tracking-widest text-sm uppercase">Home / Contact</p>
      </div>

      {/* Intro Section */}
      <section className="py-16 px-6 md:px-12 bg-white text-center border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Get In Touch With Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            We'd love to hear from you! Whether you have questions about our products, need assistance with your order, want to discuss a custom project, or just want to learn more about our handicrafts, our team is here to help. Reach out to us through any of the following methods.
          </p>

          {/* Quick Contacts */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-[#faf9f6] border border-gray-100 rounded-2xl hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#C7815A] shadow-sm group-hover:bg-[#C7815A] group-hover:text-white transition-colors">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Call Us</h3>
              <p className="text-sm text-gray-500 mb-3">Speak directly with our experts</p>
              <p className="text-lg font-bold text-[#C7815A]">+91 9050001972</p>
            </div>
            
            <div className="p-8 bg-[#faf9f6] border border-gray-100 rounded-2xl hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#C7815A] shadow-sm group-hover:bg-[#C7815A] group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Email Us</h3>
              <p className="text-sm text-gray-500 mb-3">Send us your queries</p>
              <p className="text-lg font-bold text-[#C7815A]">indiaexport@hieil.com</p>
            </div>
            
            <div className="p-8 bg-[#faf9f6] border border-gray-100 rounded-2xl hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#C7815A] shadow-sm group-hover:bg-[#C7815A] group-hover:text-white transition-colors">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Whatsapp</h3>
              <p className="text-sm text-gray-500 mb-3">Quick chat support</p>
              <p className="text-lg font-bold text-[#C7815A]">+91 9050001972</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Sidebar Section (Inspired by uploaded design) */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left: Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Send Us A Message</h2>
            <p className="text-gray-500 mb-8">Have a specific inquiry? Fill out the form below and our team will get back to you shortly.</p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                  <input type="text" placeholder="e.g. John Doe" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#C7815A] focus:ring-1 focus:ring-[#C7815A] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#C7815A] focus:ring-1 focus:ring-[#C7815A] transition-colors" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Select Country *</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:border-[#C7815A] focus:ring-1 focus:ring-[#C7815A] transition-colors text-gray-600">
                      <option>Search country...</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                      <option>India</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 bg-gray-100 border border-r-0 border-gray-200 text-gray-500 rounded-l-lg">+00</span>
                    <input type="text" placeholder="000 000 0000" className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-r-lg focus:outline-none focus:border-[#C7815A] focus:ring-1 focus:ring-[#C7815A] transition-colors" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject *</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:border-[#C7815A] focus:ring-1 focus:ring-[#C7815A] transition-colors text-gray-600">
                      <option>Select a subject</option>
                      <option>Product Inquiry</option>
                      <option>Order Status</option>
                      <option>Custom Project</option>
                      <option>Partnership</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Inquiry Category *</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:border-[#C7815A] focus:ring-1 focus:ring-[#C7815A] transition-colors text-gray-600">
                      <option>Select a category</option>
                      <option>Wholesale</option>
                      <option>Retail</option>
                      <option>Support</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Message *</label>
                <textarea rows={5} placeholder="Write your message here..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#C7815A] focus:ring-1 focus:ring-[#C7815A] transition-colors resize-none"></textarea>
              </div>

              <button type="button" className="px-10 py-4 bg-[#C7815A] hover:bg-[#a8623d] text-white font-bold rounded-lg transition-colors flex items-center gap-2 tracking-wide uppercase text-sm">
                SEND MESSAGE <Send size={18} />
              </button>
            </form>
          </div>

          {/* Right: Contact Information Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <MapPin className="text-[#C7815A] mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900">Our Showroom</h4>
                    <a href="#" className="text-[#C7815A] text-sm hover:underline font-medium">Visit Virtual Map</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Clock className="text-[#C7815A] mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600 text-sm">Mon - Fri: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600 text-sm">Sat: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <HelpCircle className="text-[#C7815A] mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Support Hours</h4>
                    <p className="text-gray-600 text-sm">Phone Support: 24/7 Available</p>
                    <p className="text-gray-600 text-sm">Email: within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-2xl text-white relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <AlertCircle size={100} />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Need Urgent Help?</h3>
                <p className="text-gray-400 text-sm mb-6">Connect with our dedicated support team directly for immediate assistance.</p>
                <div className="text-2xl font-bold text-orange-400 mb-2">+91 9050001972</div>
                <p className="text-orange-500/80 text-xs font-bold uppercase tracking-wider">Available 24/7 for Global Support</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-6 md:px-12 bg-[#faf9f6] border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest text-[#C7815A] uppercase mb-3">Our Office Locations</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Visit Us at Any of Our Convenient Locations</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Kota HQ */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="h-56 w-full bg-[url('/Kota.png')] bg-cover bg-center"></div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#C7815A]">
                    <Building size={24} />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-gray-900">Kota Headquarters</h4>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin className="shrink-0 text-gray-400 mt-1" size={18} />
                    <span>Hind Import Export International (OPC) Pvt. Ltd. Ground Floor, Ganesh Nagar, Kota, 324005, Rajasthan, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="shrink-0 text-gray-400" size={18} />
                    <span>+91 9050001972</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="shrink-0 text-gray-400" size={18} />
                    <span>indiaexport@hieil.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="shrink-0 text-gray-400" size={18} />
                    <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                </div>
                <button className="w-full py-3 border border-[#C7815A] text-[#C7815A] hover:bg-[#C7815A] hover:text-white rounded-lg font-bold transition-colors flex items-center justify-center gap-2 mt-auto">
                  Kota Map <MapPin size={18} />
                </button>
              </div>
            </div>

            {/* Jaipur HQ */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="h-56 w-full bg-[url('/jaipur.jpeg')] bg-cover bg-center"></div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#C7815A]">
                    <Building size={24} />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-gray-900">Jaipur Headquarters</h4>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin className="shrink-0 text-gray-400 mt-1" size={18} />
                    <span>Hind Import Export International (OPC) Pvt. Ltd. Ground Floor, Jaipur, 302021, Rajasthan, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="shrink-0 text-gray-400" size={18} />
                    <span>+91 9050001972</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="shrink-0 text-gray-400" size={18} />
                    <span>indiaexport@hieil.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="shrink-0 text-gray-400" size={18} />
                    <span>Mon-Sat: 9:30 AM - 7:30 PM</span>
                  </div>
                </div>
                <button className="w-full py-3 border border-[#C7815A] text-[#C7815A] hover:bg-[#C7815A] hover:text-white rounded-lg font-bold transition-colors flex items-center justify-center gap-2 mt-auto">
                  Jaipur Map <MapPin size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Support Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          
          {/* FAQs */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold tracking-widest text-[#C7815A] uppercase mb-3">Frequently Asked Questions</h2>
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8">Quick Answers to Common Questions</h3>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-bold text-gray-900">{faq.q}</span>
                    <ChevronDown className={`transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} size={20} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-white text-gray-600">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Business & Support Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#faf9f6] p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="text-[#C7815A]" /> Business Hours
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium">Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>11:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <AlertCircle className="text-[#C7815A]" /> Need Urgent Assistance?
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                For urgent matters outside business hours, our emergency support line is available 24/7
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#C7815A] shadow-sm">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">+91-9050001972</div>
                    <div className="text-xs text-gray-500">24/7 Emergency Line</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-500 shadow-sm">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">+91-9050001972</div>
                    <div className="text-xs text-gray-500">WhatsApp Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Map Placeholder (As shown in design reference) */}
      <section className="h-96 w-full bg-gray-200 relative">
         <iframe 
            title="Office Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.23861214088!2d75.71714036125071!3d26.885141679549525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
      </section>

    </div>
  );
};

export default Contact;
