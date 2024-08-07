import { Link } from "react-router-dom";
import { ValidationError, useForm } from '@formspree/react';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import "../App.css";
import { Fade } from "react-awesome-reveal";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const FeedbackForm = () => {

  const [state, handleSubmit] = useForm("xeqybqbw");
  if (state.succeeded) {
    return <div className="column form-feedback">
        <p className="form-response">Thank you for your message.</p>
        <p className="form-response">Our manager will contact you soon.</p>
        </div>;
  }

  return (
    <section className="form">
        <Fade direction="up" duration="2000">
        <div className="column-center center">
        <h4 className="black">Feel free <span className="outlined border-black">to ask us</span></h4>
        <p className="description black bottom-margin">Please, <span className="pink">fill in the form</span>. Our manager will contact you soon.</p>
        </div>
        <form method="POST" onSubmit={handleSubmit}>
      <div className="form-block">
      <input className="input" placeholder="Your name" id="name" type="text" name="name" required />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div className="form-block">
      <input className="input"  placeholder="Your phone number" id="phone" type="tel" name="phone" required />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>

      <div className="form-block">
      <input className="input" placeholder="Your e-mail address" id="email" type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="form-block">
      <textarea className="input textarea" placeholder="Your message here..." id="message" name="message" required></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <div className="center btn-margin">
      <button className="cta" type="submit" disabled={state.submitting}>Submit</button>
      </div>
      <div>
      <Checkbox {...label} color="secondary" />
        <span className="private-policy">By clicking the "Submit" button, you automatically agree to the <Link to="/privacy"><span className="privacy-link">Privacy Policy</span></Link></span>
      </div>
    </form>
    </Fade>
    </section>
  )
}
