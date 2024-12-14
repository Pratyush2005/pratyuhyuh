import { useState } from 'react';
import emailjs from 'emailjs-com';

export function ContactForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();

    emailjs.send(
      'service_un4j068',          // Replace with your EmailJS Service ID
      'template_5sn7loa',         // Replace with your EmailJS Template ID
      {
        username,
        email,
        message,
      },
      'YzGnMSU6oL-RUe8hj'              // Replace with your EmailJS User ID
    )
    .then(() => {
      setStatus('Message sent successfully!');
      setUsername('');
      setEmail('');
      setMessage('');
    })
    .catch(() => {
      setStatus('Failed to send message.');
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-[#2f3136] rounded-lg p-4 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-[#5865f2] text-lg">#</span>
          <h3 className="text-lg font-medium text-white">send-message</h3>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="block text-[#b9bbbe] text-sm">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 bg-[#202225] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#5865f2] transition-all duration-200"
              placeholder="Your username"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[#b9bbbe] text-sm">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-[#202225] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#5865f2] transition-all duration-200"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[#b9bbbe] text-sm">Message</label>
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 bg-[#202225] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#5865f2] transition-all duration-200 resize-none"
              rows={4}
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full px-6 py-2 bg-[#5865f2] text-white rounded-md hover:bg-[#4752c4] transition-colors duration-200 transform hover:translate-y-[-2px] font-medium">
            Send Message
          </button>
          {status && <p className="text-[#b9bbbe] mt-2">{status}</p>}
        </form>
      </div>
      <div className="bg-[#2f3136] rounded-lg p-4 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-[#5865f2] text-lg">#</span>
          <h3 className="text-lg font-medium text-white">contact-info</h3>
        </div>
        <div className="space-y-3">
          <p className="text-[#b9bbbe]">
            Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="p-3 bg-[#202225] rounded-md">
            <p className="text-[#b9bbbe] text-sm">
              <span className="text-white font-medium">Response Time:</span> Within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}