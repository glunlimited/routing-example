
import { useState } from 'react';
import '../css/Contact.css';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const msgData = ` First Name: ${firstName}\n Last Name: ${lastName}\n Email: ${email}\n Message: ${message} `;
    console.log('Form submitted:', msgData);
    // Reset form fields after submission
    alert(msgData);
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  }
  return (
    <div className="contactWrapper">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className="formWrapper">
        <div className="infoWrapper">
          <label htmlFor="firstName">First Name:</label>
          <input 
            type="text" 
            id="firstName" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} 
          />
        </div>
        <div className="infoWrapper">
          <label htmlFor="lastName">Last Name:</label>
          <input 
            type="text" 
            id="lastName" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} 
          />
        </div>
        <div className="infoWrapper">
          <label htmlFor="email">Email:</label>
          <input 
          type="email" 
          id="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="infoWrapper">
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            value={message}
            onChange={(e) => setMessage(e.target.value)} 
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact; 