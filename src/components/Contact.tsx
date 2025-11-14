import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.subtitle}>
          I'm always interested in new opportunities and exciting projects. 
          Let's connect and discuss how we can work together!
        </p>
        
        <div className={styles.contactContent}>
          <div className={styles.contactGrid}>
            
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📍</div>
              <h3 className={styles.contactType}>Location</h3>
              <span className={styles.contactValue}>Millersville, MD 21108</span>
            </div>
            
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>💼</div>
              <h3 className={styles.contactType}>LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/evan-mcgarry-b88529163/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Connect with me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;