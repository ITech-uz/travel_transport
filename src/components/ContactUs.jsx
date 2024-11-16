import {useState} from "react";

const ContactUs = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const clearFields = () => {
    setName("")
    setPhone("")
    setSubject("")
    setEmail("")
    setMessage("")
  }

  async function sendMessage() {
    const msg = `
    New Client information:
-name: ${name}
-email: ${email}
-phone: ${phone}
-subject: ${subject}
-message: ${message}
    `
    // Send the message to your Telegram bot
    await fetch(`https://api.telegram.org/bot${"8101706713:AAGk8243axGd6rCDvbKxfqNHtyOvb34zf4c"}/sendMessage`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        chat_id: "6814846106",
        text: msg,
        parse_mode: 'Markdown'  // To format the message with markdown for better readability
      })
    }).then(() => {
      alert("Done")
      clearFields()
    }).catch(er => {
      alert("error: ", er)
    })
  }

  return (
    <section className="contact-us py-5">
      <div className="container">
        <div className="contact">
          <div className="row">
            <div className="col-xl-8 col-12">
              <div className="contact-form" data-aos="fade-right">
                <h4 className="py-2">Get in Touch</h4>
                <form action="#" method="post">
                  <div className="row">
                    <div className="col-xl-6 mb-3">
                      <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name"
                             className="form-control" id="userName" placeholder="Name"/>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email"
                             className="form-control" id="email" placeholder="Email"/>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" name="phone"
                             className="form-control" id="phone" placeholder="Phone"/>
                    </div>
                    <div className="col-xl-6 mb-3">
                      <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" name="subject"
                             className="form-control" id="subject" placeholder="Subject"/>
                    </div>
                    <div className="col-xl-12 mb-3">
                      <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="6"
                                className="form-control"
                                name="message" placeholder="Your Message"
                                id="message"></textarea>
                    </div>
                  </div>
                  <button onClick={ () => sendMessage()} disabled={!name || !email || !phone || !subject || !message} type="button" className="btn btn-md primary-bg submit-btn">SUBMIT NOW</button>
                </form>
              </div>
            </div>
            <div className="col-xl-4 col-12">
              <div className="contact-info primary-bg" data-aos="fade-left">
                <h4 className="py-2">Contact Information</h4>
                <div className="single-info">
                  <i className="fa-solid fa-phone text-center"></i>
                  <div className="info-text">
                    <h5>Call Phone</h5>
                    <p>+998900000000</p>
                  </div>
                </div>
                <div className="single-info">
                  <i className="fa-solid fa-at text-center"></i>
                  <div className="info-text">
                    <h5>Email us</h5>
                    <p>travel.transport.uz@gmail.com</p>
                  </div>
                </div>
                <div className="single-info">
                  <i className="fa-solid fa-location-arrow text-center"></i>
                  <div className="info-text">
                    <h5>Address</h5>
                    <p>Khiva city, Khorezm, Uzbekistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ContactUs;