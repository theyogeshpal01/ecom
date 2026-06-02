import React from 'react';
import { CreditCard, Landmark, Send, DollarSign, Globe, ShieldCheck, FileText, Lock, UserCheck } from 'lucide-react';
import styles from './SecurePaymentOptions.module.css';

const paymentMethods = [
  {
    id: 1,
    title: 'T/T',
    subtitle: 'Transfer',
    tag: 'Reliable',
    Icon: Landmark,
  },
  {
    id: 2,
    title: 'Cards',
    subtitle: 'Visa, MasterCard',
    tag: 'Secure',
    Icon: CreditCard,
  },
  {
    id: 3,
    title: 'SWIFT',
    subtitle: 'Bank Transfers',
    tag: '3-5 Days',
    Icon: Landmark,
  },
  {
    id: 4,
    title: 'PayPal',
    subtitle: 'Online Payments',
    tag: 'Instant',
    Icon: DollarSign,
  },
  {
    id: 5,
    title: 'Wise',
    subtitle: 'Int\'l Transfers',
    tag: 'Low Fees',
    Icon: Globe,
  },
  {
    id: 6,
    title: 'LC',
    subtitle: 'Trade Finance',
    tag: 'Secure',
    Icon: FileText,
  },
  {
    id: 7,
    title: 'Bank',
    subtitle: 'Direct Transfer',
    tag: 'Reliable',
    Icon: Send,
  }
];

const SecurePaymentOptions = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>SECURE PAYMENT OPTIONS</h2>
          <p className={styles.subtitle}>Multiple trusted payment methods for hassle-free global transactions</p>
        </div>

        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            <div className={styles.marqueeGroup}>
              {paymentMethods.map((method) => (
                <div key={method.id} className={styles.card}>
                  <div className={styles.iconWrapper}>
                    <method.Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.methodTitle}>{method.title}</h3>
                  <p className={styles.methodSubtitle}>{method.subtitle}</p>
                  <span className={styles.methodTag}>{method.tag}</span>
                </div>
              ))}
            </div>
            {/* Duplicate group for seamless looping */}
            <div className={styles.marqueeGroup}>
              {paymentMethods.map((method) => (
                <div key={`${method.id}-dup`} className={styles.card}>
                  <div className={styles.iconWrapper}>
                    <method.Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.methodTitle}>{method.title}</h3>
                  <p className={styles.methodSubtitle}>{method.subtitle}</p>
                  <span className={styles.methodTag}>{method.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.trustBadges}>
          <div className={styles.badge}>
            <Lock size={16} className={styles.badgeIcon} />
            <span>256-bit SSL Encryption</span>
          </div>
          <div className={styles.badge}>
            <ShieldCheck size={16} className={styles.badgeIcon} />
            <span>PCI DSS Compliant</span>
          </div>
          <div className={styles.badge}>
            <UserCheck size={16} className={styles.badgeIcon} />
            <span>Fraud Protection</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurePaymentOptions;
