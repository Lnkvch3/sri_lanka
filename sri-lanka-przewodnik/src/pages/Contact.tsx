import { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // czyść błędy przy wpisywaniu
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Imię jest wymagane.';
      valid = false;
    }
    if (!formData.email.includes('@')) {
      newErrors.email = 'Email jest nieprawidłowy.';
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Wiadomość nie może być pusta.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Dziękujemy za wiadomość!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <main className="contact-main">
      <h1>📬 Formularz kontaktowy</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Imię:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Wiadomość:
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>

        <button type="submit">Wyślij</button>
      </form>
    </main>
  );
};

export default Contact;
