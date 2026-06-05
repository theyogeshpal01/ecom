import React from 'react';
import { 
  ShieldCheck, 
  Globe, 
  Settings, 
  Truck, 
  Star, 
  CheckCircle2, 
  Users, 
  Package,
  Award,
  ChevronRight,
  MapPin,
  Building,
  Target,
  FileText,
  HeartHandshake,
  Download
} from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-zinc-900 text-white py-20 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold tracking-wider mb-6">
            WHY CHOOSE US
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-serif">
            More Than Just Exporters — <br />
            <span className="text-orange-500">Partners in Your Success</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            At HIEIL, we are more than just exporters — we are partners in your success. Based in Jaipur, India's hub of heritage and craftsmanship, we bring together traditional artistry and modern business standards to deliver authentic handicrafts trusted worldwide. Experience the perfect blend of Indian tradition and world-class business reliability.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/10 pt-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">100%</div>
              <div className="text-sm text-gray-400 font-medium">Customizations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">100%</div>
              <div className="text-sm text-gray-400 font-medium">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">50+</div>
              <div className="text-sm text-gray-400 font-medium">Global Markets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">24/7</div>
              <div className="text-sm text-gray-400 font-medium">Dedicated Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Standards, Local Craft */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3">Global Standards, Local Craft</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Where Tradition Meets Excellence</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong className="text-gray-900">Authentic Craftsmanship Meets Modern Excellence.</strong> Every product is handmade by skilled artisans and passes through strict quality control and export compliance checks. From design to packaging, we ensure that each piece meets international quality expectations while preserving the authentic touch of traditional Indian craftsmanship.
            </p>
            <div className="space-y-6 mt-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                  <Star className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Handcrafted Excellence</h4>
                  <p className="text-gray-600 text-sm">Each piece created by skilled artisans with generations of craftsmanship heritage.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Quality Assured</h4>
                  <p className="text-gray-600 text-sm">Rigorous quality control processes meeting international standards and expectations.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                  <FileText className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Export Compliance</h4>
                  <p className="text-gray-600 text-sm">Full compliance with international export regulations and documentation requirements.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
             <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-orange-500" size={32} />
                  <span className="text-2xl font-serif font-bold">100% Quality Assured</span>
                </div>
                <p className="text-gray-300">Tested and verified for international markets.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Our Trust Factors */}
      <section className="py-20 px-6 md:px-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3">Our Trust Factors</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Why Businesses Worldwide Trust Us</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Global Shipping', desc: 'Seamless worldwide delivery with trusted logistics partners and transparent tracking' },
              { icon: ShieldCheck, title: 'Quality Control', desc: 'Multi-stage quality checks ensuring every product meets international standards' },
              { icon: HeartHandshake, title: 'Partnerships', desc: 'Long-term business relationships built on trust, reliability, and mutual success' },
              { icon: Star, title: 'Handcrafted', desc: 'Authentic products handmade by skilled artisans preserving traditional techniques' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                  <feature.icon className="text-orange-500 group-hover:text-white transition-colors" size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-end Export Solutions */}
      <section className="py-20 px-6 md:px-12 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 justify-between items-end mb-16 border-b border-white/10 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3">End-to-end Export Solutions</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold">Making Importing from India Simple and Secure</h3>
            </div>
            <p className="text-gray-400 max-w-md">
              Comprehensive services designed to streamline your sourcing process from conception to delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { icon: Settings, title: 'Custom Product Development', desc: 'Tailored solutions designed to meet your specific market needs and brand requirements.' },
              { icon: Package, title: 'Bulk Supply', desc: 'Reliable volume supply maintaining consistent quality across all orders and shipments.' },
              { icon: Target, title: 'Private Labeling', desc: 'Complete branding solutions with your logo, packaging, and custom specifications.' },
              { icon: Truck, title: 'Global Shipping', desc: 'Comprehensive logistics with partners ensuring smooth deliveries worldwide.' },
            ].map((sol, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">
                  <sol.icon className="text-orange-500" size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">{sol.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence & Valued Clients */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          {/* Global Presence */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3">By International Buyers</h2>
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8">Growing Global Presence Across Continents</h3>
            <div className="space-y-6">
              {[
                { region: 'United States', desc: 'Strong partnerships with retailers and distributors across major US cities and states.' },
                { region: 'Europe', desc: 'Established network across UK, Germany, France, Italy and other European markets.' },
                { region: 'Middle East', desc: 'Growing presence in UAE, Saudi Arabia, Qatar with understanding of regional markets.' },
                { region: 'Asia Pacific', desc: 'Expanding reach in Australia, Japan, Singapore and other Asian markets.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                  <MapPin className="text-orange-500 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{item.region}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Valued Clients */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3">Our Valued Clients</h2>
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8">Trusted by Industry Leaders Worldwide</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Retailers', desc: 'Boutique stores, chain retailers, and specialty shops worldwide trust our quality and reliability.' },
                { title: 'Wholesalers', desc: 'Distribution partners relying on our consistent quality and scalable supply solutions.' },
                { title: 'Interior Designers', desc: 'Creative professionals choosing our products for their unique projects and client requirements.' },
                { title: 'Hotel Chains', desc: 'Luxury and boutique hotels selecting our products for their premium guest experiences.' },
              ].map((client, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <Building className="text-orange-500 mb-4" size={32} />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{client.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{client.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Your Success Partner */}
      <section className="py-20 px-6 md:px-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3">Your Success Partner</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Why Choose Us as Your Export Partner</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Reliability', desc: 'Consistent quality and on-time delivery that you can depend on for your business operations.' },
              { title: 'Craftsmanship', desc: 'Authentic handmade products preserving traditional techniques with modern quality standards.' },
              { title: 'Partnership Approach', desc: 'We work as your strategic partner, invested in your success and committed to your growth.' },
              { title: 'Quality Assurance', desc: 'Rigorous quality control processes and international certifications for complete peace of mind.' },
              { title: 'Flexible Solutions', desc: 'Customized services that adapt to your unique business needs and market requirements.' },
              { title: 'Dedicated Support', desc: 'Personal account managers and 24/7 customer support for all your export needs.' },
            ].map((prop, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex gap-4 items-start">
                <CheckCircle2 className="text-orange-500 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{prop.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 border border-orange-100 flex flex-col md:flex-row gap-8 items-center shadow-lg shadow-orange-500/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
               <ShieldCheck size={120} />
             </div>
             <div className="flex-1 relative z-10">
               <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                 <Star className="text-orange-500" size={20} fill="currentColor" /> 100% Transparency
               </h4>
               <p className="text-gray-600 mb-6">Complete visibility into development costs, material sourcing, and production timelines.</p>
               
               <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                 <ShieldCheck className="text-orange-500" size={20} fill="currentColor" /> No Corruption Policy
               </h4>
               <p className="text-gray-600">Zero-tolerance for unethical practices, ensuring fair and honest product development cycles.</p>
             </div>
          </div>
        </div>
      </section>

      {/* The Hieil Difference */}
      <section className="py-20 px-6 md:px-12 bg-zinc-900 text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3">The Hieil Difference</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-12">Setting Standards in Export Excellence</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: 'Heritage & Experience', desc: '7+ years of expertise combining traditional craftsmanship with modern practices.' },
              { title: 'Quality Excellence', desc: 'Rigorous quality control and international certifications ensuring premium standards.' },
              { title: 'Global Reach', desc: 'Established presence in 50+ countries with reliable logistics and export expertise.' },
              { title: 'Client Success', desc: 'Proven track record of helping businesses grow through reliable partnerships.' },
            ].map((diff, i) => (
              <div key={i}>
                <div className="w-12 h-12 bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
                  <span className="font-bold">{i+1}</span>
                </div>
                <h4 className="text-lg font-bold mb-2">{diff.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Ready To Experience Excellence?</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Work with us, and experience the perfect blend of Indian tradition and world-class business reliability. Join hundreds of satisfied clients worldwide who trust us for their handicraft sourcing needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2">
              Request a Quote <ChevronRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 border border-gray-200 hover:border-orange-500 hover:text-orange-600 rounded-full font-semibold transition-all duration-300 shadow-sm flex items-center gap-2">
              <Download size={20} /> Download Our Catalogue
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
