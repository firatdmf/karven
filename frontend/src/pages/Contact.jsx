import classes from "./Contact.module.css";

function Contact() {
  return (
    <div className={classes.contact}>
      <div className={classes.firstPart}>
        <div className={`${classes.map} ${classes.item}`}>
          <h2>Contact Us</h2>
          <h4>Phone:</h4>
          <p>+90 (282) 675-1552 (Office)</p>
          <p>+90 (533) 544-2525 (Mobile)</p>
          <h4>Email:</h4>
          <p>info@demfirat.com</p>
          <p>karvenmuhasebe@gmail.com</p>
          <h4>Address:</h4>
          <p>
            Karven Tekstil <br />
            VAKIFLAR OSB MAH D100 CAD NO 38 <br />
            ERGENE TEKIRDAG, 59930 <br />
            TURKIYE
          </p>
          <iframe
            title=" "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.6867135945436!2d27.63401171528988!3d41.27215671109388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4c1844bb93f27%3A0xcc32597014cd891f!2sDem%20F%C4%B1rat%20Karven%20Tekstil!5e0!3m2!1sen!2sus!4v1664524927699!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Open up the below code later; the css code will fix itself by default */}
        {/* <div className={`${classes.col2} ${classes.item}`}>
          <h2>Contact Form</h2>
          <form action="">
            <div className={classes.name}>
              <p>Name:</p>
              <input type="text" placeholder="Name" />
            </div>
            <div className={classes.businessName}>
              <p>Business Name:</p>
              <input type="text" placeholder="Business Name" />
            </div>
            <div className={classes.phone}>
              <p>Phone:</p>
              <input type="tel" placeholder="Phone" />
            </div>
            <div className={classes.email}>
              <p>Email:</p>
              <input type="email" placeholder="Email" />
            </div>
            <div className={classes.message}>
            <p>Your message:</p>
              <textarea placeholder="Your message" name="" id="" ></textarea>
            </div>
            <div className={classes.contactWay}>
              <input
                type="radio"
                value="EMAIL"
                defaultChecked
                name="contactWay"
              />
              Email
              <input type="radio" value="PHONE" name="contactWay" /> Phone
            </div>
            <button>Submit</button>
          </form>
        </div> */}

        <div className={`${classes.item} ${classes.col3}`}>
          <div
            className={classes.image}
            style={{
              backgroundImage:
                "url('/images/factory/karven-factory-building-exterior.jpg')",
            }}
          ></div>

          <div
            className={`${classes.image} ${classes.image2}`}
            style={{
              backgroundImage:
                "url('/images/factory/factory-floor-image-industrial-curtain-embroidery-machines.jpg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
