import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Email validation
  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/);
  };

  const handleSend = (e) => {
    e.preventDefault();

    // Form validation
    if (!username) {
      setErrMsg('Username is required!');
      return;
    } else if (!phoneNumber) {
      setErrMsg('Phone number is required!');
      return;
    } else if (!email) {
      setErrMsg('Please provide your Email!');
      return;
    } else if (!emailValidation()) {
      setErrMsg('Provide a valid Email!');
      return;
    } else if (!subject) {
      setErrMsg('Please provide a Subject!');
      return;
    } else if (!message) {
      setErrMsg('Message is required!');
      return;
    }

    setErrMsg('');

    // Sending email using EmailJS
    const templateParams = {
      from_name: username,
      phone_number: phoneNumber,
      email,
      subject,
      message,
    };

    emailjs
      .send(
        'your_service_id', // Replace with your EmailJS service ID
        'your_template_id', // Replace with your EmailJS template ID
        templateParams,
        'your_user_id' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          setSuccessMsg(
            `Thank you ${username}, your message has been sent successfully!`
          );
          setUsername('');
          setPhoneNumber('');
          setEmail('');
          setSubject('');
          setMessage('');
        },
        (error) => {
          setErrMsg('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
              onSubmit={handleSend}
            >
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your Name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`contactInput ${
                      errMsg === 'Username is required!' && 'outline-designColor'
                    }`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`contactInput ${
                      errMsg === 'Phone number is required!' && 'outline-designColor'
                    }`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`contactInput ${
                    errMsg === 'Please provide your Email!' && 'outline-designColor'
                  }`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`contactInput ${
                    errMsg === 'Please provide a Subject!' && 'outline-designColor'
                  }`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`contactTextArea ${
                    errMsg === 'Message is required!' && 'outline-designColor'
                  }`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
