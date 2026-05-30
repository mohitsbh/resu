import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import "./Form.css";

const Form = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "66a3af37-e7c6-447a-adb6-39f534bbf127");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmit} className="contact-form-modern">
        <TextField
          label="Your Name"
          name="name"
          variant="outlined"
          required
          className="form-field"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          required
          className="form-field"
        />
        <TextField
          label="Subject"
          name="subject"
          variant="outlined"
          required
          className="form-field"
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          multiline
          rows={6}
          placeholder="Type Your Message Here"
          required
          className="form-field"
        />
        <Button
          type="submit"
          variant="contained"
          className="form-submit-btn"
        >
          Submit
        </Button>
        {result && (
          <Typography variant="body1" className="form-status">
            {result}
          </Typography>
        )}
      </form>
    </div>
  );
};

export default Form;
