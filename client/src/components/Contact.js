import React, { useState, useEffect } from "react";
import axios from "axios";
import validator from "validator";

const Contact = (props) => {
  const [name, setName] = useState({ value: "", valid: "Valid name." });
  const [email, setEmail] = useState({ value: "", valid: "Valid email." });
  const [message, setMessage] = useState({
    value: "",
    valid: "Valid message.",
  });
  const [isSuccess, setSuccess] = useState(undefined);

  useEffect(() => {
    axios
      .get("/api/test")
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => e);
  }, []);

  const onNameChange = (e) => {
    if (e.target.value.trim().length === 0) {
      setName({
        ...name,
        value: e.target.value,
        error: "Name cannot be empty!",
      });
    } else {
      setName({ ...name, value: e.target.value, error: false });
    }
  };

  const onEmailChange = (e) => {
    if (!validator.isEmail(e.target.value)) {
      setEmail({
        ...email,
        value: e.target.value,
        error: "You have entered invalid email address!",
      });
    } else {
      setEmail({ ...email, value: e.target.value, error: false });
      console.log("correct email");
    }
  };

  const onMessageChange = (e) => {
    if (e.target.value.trim().length === 0) {
      setMessage({
        ...message,
        value: e.target.value,
        error: "Message cannot be empty!",
      });
    } else {
      setMessage({ ...message, value: e.target.value, error: false });
    }
  };

  const onSubmitClick = (e) => {
    e.preventDefault();

    if (
      name.error === undefined ||
      name.error ||
      email.error === undefined ||
      email.error ||
      message.error === undefined ||
      message.error
    ) {
      setSuccess(false);
    } else {
      axios
        .get(
          `/api/sendmail?name=${name.value}&email=${email.value}&message=${message.value}`
        )
        .then((res) => {
          console.log(res);
        })
        .catch((e) => console.log(e));

      setSuccess(true);
      setName({ ...name, value: "", error: undefined });
      setEmail({ ...email, value: "", error: undefined });
      setMessage({ ...message, value: "", error: undefined });

      e.target.elements.name.value = "";
      e.target.elements.email.value = "";
      e.target.elements.message.value = "";
    }
  };

  const ErrorMessage = ({ input }) => {
    return input.error !== undefined ? (
      input.error ? (
        <p className="message message--error">{input.error}</p>
      ) : (
        <p className="message message--valid">{input.valid}</p>
      )
    ) : (
      <p></p>
    );
  };

  const successMessage = () => {
    if (isSuccess === undefined) {
      return <p className="form-message"></p>;
    } else if (isSuccess === false) {
      return (
        <p className="form-message form-message--error">
          You have entered invalid values.
        </p>
      );
    } else {
      return (
        <p className="form-message form-message--success">
          Your message has been successfully sent.
        </p>
      );
    }
  };

  return (
    <div className="contact" id="contact">
      <h2>Contact</h2>
      {successMessage()}
      <form className="contact__form" onSubmit={onSubmitClick}>
        <div className="contact__form__row">
          <div className="contact__form__row__item">
            <p className="label">Name</p>
            <input
              onChange={onNameChange}
              value={name.value}
              type="text"
              autoComplete="off"
              name="name"
              placeholder="Enter name..."
            />
            <ErrorMessage input={name} />
          </div>
          <div className="contact__form__row__item">
            <p className="label">Email</p>
            <input
              onChange={onEmailChange}
              value={email.value}
              type="text"
              autoComplete="off"
              name="email"
              placeholder="Enter email..."
            />
            <ErrorMessage input={email} />
          </div>
        </div>
        <div className="contact__form__row">
          <div className="contact__form__row__message">
            <p className="label">Message</p>
            <textarea
              onChange={onMessageChange}
              value={message.value}
              type="text"
              autoComplete="off"
              name="message"
              placeholder="Enter message..."
              rows="4 "
            />
            <ErrorMessage input={message} />
          </div>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
