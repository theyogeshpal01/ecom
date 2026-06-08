import React, { useEffect } from 'react';
import './AffiliateProgram.css';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  Gift, 
  BarChart2, 
  UserPlus, 
  Share2, 
  TrendingUp 
} from 'lucide-react';

const AffiliateProgram = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    { title: 'Competitive Commission', desc: 'Earn high commission rates on every successful referral. Your earning potential is unlimited with HIEIL.', icon: <DollarSign size={40} /> },
    { title: 'Exclusive Offers', desc: 'Get access to special discounts and products for your audience, helping you convert more leads.', icon: <Gift size={40} /> },
    { title: 'Real-time Tracking', desc: 'Monitor your performance with our dedicated affiliate dashboard and real-time reporting tools.', icon: <BarChart2 size={40} /> }
  ];

  const processSteps = [
    { num: '1', title: 'Sign Up', desc: "Apply to our affiliate program. It's quick, easy, and free to join our network.", icon: <UserPlus size={24} /> },
    { num: '2', title: 'Promote', desc: 'Share HIEIL products with your unique link through your blog, social media, or network.', icon: <Share2 size={24} /> },
    { num: '3', title: 'Earn', desc: 'Collect commissions on every purchase made through your affiliate link.', icon: <TrendingUp size={24} /> }
  ];

  return (
    <div className="affiliate-page">
      {/* Hero Section */}
      <section className="aff-hero">
        <div className="aff-hero-content" data-aos="fade-up">
          <span className="aff-tag">Affiliate Program</span>
          <h1 className="aff-title">Partner With Hieil</h1>
          <p className="aff-subtitle">
            Join our community and earn as you share the excellence of HIEIL. Become a part of the HIEIL success story. Our affiliate program is designed for creators, curators, and connectors who want to share premium, trend-setting products with their audience while earning competitive commissions.
          </p>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="aff-benefits-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Program Benefits</h2>
            <p>Grow Your Career and Earnings with Us</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="benefit-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="aff-process-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>How It Works</h2>
            <p>Three Simple Steps to Success</p>
          </div>
          <div className="process-steps-container">
            {processSteps.map((step, index) => (
              <div className="aff-process-step" key={index} data-aos="fade-left" data-aos-delay={index * 100}>
                <div className="step-number">{step.num}</div>
                <div className="step-content">
                  <div className="step-header">
                    {step.icon}
                    <h4>{step.title}</h4>
                  </div>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="aff-cta-section" data-aos="zoom-in">
        <div className="aff-cta-inner">
          <h2>Ready To Start Your Journey?</h2>
          <p>Join hundreds of successful affiliates who are already earning with HIEIL. Start your partnership today and grow your earnings with a brand that people love.</p>
          <Link to="/contact" className="aff-btn">Register As An Affiliate</Link>
        </div>
      </section>
    </div>
  );
};

export default AffiliateProgram;
