import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <React.Fragment>
        <section className="section contact" id="contact" data-aos="fade-up">
            <h2 className="section-title">Contact Me</h2>
            <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
            </form>
        </section>
    </React.Fragment>
  )
}

export default Contact