import SectionTitle from '../SectionTitle/SectionTitle'
import './Contact.css'

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionTitle title="Let’s Work Together" />

        <div className="contact">
          <div className="contact__left">
            <p>
              I’m currently looking for internship opportunities and interesting
              projects where I can continue to grow as a frontend developer.
            </p>

            <a className="contact__cta" href="mailto:martin.olsson1862@gmail.com">
              Send a Message
            </a>
          </div>

          <div className="contact__cards">
            <a className="contact__card card" href="mailto:martin.olsson1862@gmail.com">
              <span>Email</span>
              <strong>martin.olsson1862@gmail.com</strong>
            </a>

            <a className="contact__card card" href="tel:0739173148">
              <span>Phone</span>
              <strong>073-917 31 48</strong>
            </a>

            <a className="contact__card card" href="#">
              <span>LinkedIn</span>
              <strong>Add your LinkedIn here</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact