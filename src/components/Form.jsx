import React from "react";
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
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

}



  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <label> Your Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label> Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea rows="6" placeholder="Type Your Message Here"></textarea>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default Form;
