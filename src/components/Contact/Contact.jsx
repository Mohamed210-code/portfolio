import { useState, useEffect, useRef } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    try {
      const response = await fetch('https://formspree.io/f/mnjqynyy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'sedratimohamed123456789@gmail.com',
      link: 'mailto:sedratimohamed123456789@gmail.com'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/Sedrati-Mohamed-9M69843j4',
      link: 'https://www.linkedin.com/in/Sedrati-Mohamed-9M69843j4'
    },
    {
      label: 'GitHub',
      value: 'github.com/Mohamed210-code',
      link: 'https://github.com/Mohamed210-code'
    },
    {
      label: 'Location',
      value: 'Constantine, Algeria',
      link: null
    }
  ];

  return (
    <section id="contact" className={styles.contact} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.sectionLabel}>Get In Touch</span>
          <h2 className={styles.title}>Contact Me</h2>
          <p className={styles.subtitle}>
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.infoSection}>
            <div className={styles.infoCards}>
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className={`${styles.infoCard} ${isVisible ? styles.visible : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardLabel}>{info.label}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className={styles.cardValue}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className={styles.cardValue}>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={`${styles.socialSection} ${isVisible ? styles.visible : ''}`}>
              <h3 className={styles.socialTitle}>Follow Me</h3>
              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/Mohamed210-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/Sedrati-Mohamed-9M69843j4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  LinkedIn
                </a>

                <a
                  href="mailto:sedratimohamed123456789@gmail.com"
                  className={styles.socialLink}
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <div className={`${styles.formContainer} ${isVisible ? styles.visible : ''}`}>
              <h3 className={styles.formTitle}>Send me a message</h3>
              <form onSubmit={handleSubmit} className={styles.formWrapper}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className={styles.input}
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email@example.com"
                  required
                  className={styles.input}
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className={styles.textarea}
                />

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {formStatus === 'success' && (
                  <div className={styles.successMessage}>
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className={styles.errorMessage}>
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <footer className={`${styles.footer} ${isVisible ? styles.visible : ''}`}>
          <p className={styles.footerText}>Built with React + Vite</p>
          <p className={styles.copyright}>
            © 2025 Mohamed Sedrati. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
