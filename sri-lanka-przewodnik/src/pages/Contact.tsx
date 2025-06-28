import { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "Proszę podać imię i nazwisko.";
    if (!formData.email.trim()) newErrors.email = "Proszę podać adres e-mail.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Nieprawidłowy format e-mail.";
    if (!formData.subject.trim()) newErrors.subject = "Proszę podać temat.";
    if (!formData.message.trim()) newErrors.message = "Proszę wpisać wiadomość.";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      console.log("Formularz wysłany!", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="contact-container">
      <h2>📬 Skontaktuj się z nami</h2>
      {submitted && (
        <p className="success-message">
          Dziękujemy! Twoja wiadomość została wysłana.
        </p>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Imię i nazwisko</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Wpisz swoje imię i nazwisko"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Adres e-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="np. jan.kowalski@example.com"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Temat</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Temat wiadomości"
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Wiadomość</label>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Wpisz treść wiadomości..."
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-button">
          Wyślij wiadomość
        </button>
      </form>
    </div>
  );
};

export default Contact;
