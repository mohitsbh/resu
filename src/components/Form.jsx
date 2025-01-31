import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "4rem 1rem",
        color:'white',
        backgroundColor: "#000", // White background for the form
      }}
    >
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#fff", // White background for the form
          padding: "2rem",
          borderRadius: "8px", // Adds rounded corners to the form
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for a nice effect
        }}
      >
        <TextField
          label="Your Name"
          name="name"
          variant="outlined"
          required
          sx={{
            marginBottom: "1rem",
            backgroundColor: "#fff", // White background for input
            borderColor: "#ccc", // Light border for input
            color: "#000", // Dark text color for better readability
          }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          required
          sx={{
            marginBottom: "1rem",
            backgroundColor: "#fff", // White background for input
            borderColor: "#ccc", // Light border for input
            color: "#000", // Dark text color for better readability
          }}
        />
        <TextField
          label="Subject"
          name="subject"
          variant="outlined"
          required
          sx={{
            marginBottom: "1rem",
            backgroundColor: "#fff", // White background for input
            borderColor: "#ccc", // Light border for input
            color: "#000", // Dark text color for better readability
          }}
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          multiline
          rows={6}
          placeholder="Type Your Message Here"
          required
          sx={{
            marginBottom: "1rem",
            backgroundColor: "#fff", // White background for input
            borderColor: "#ccc", // Light border for input
            color: "#000", // Dark text color for better readability
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            padding: "10px 18px",
            marginBottom: "1rem",
            backgroundColor: "#f39c12", // Vibrant button color
            '&:hover': {
              backgroundColor: "#e67e22", // Darker shade on hover
            },
          }}
        >
          Submit
        </Button>
        <Typography variant="body1" color="textSecondary">
          {result}
        </Typography>
      </form>
    </Box>
  );
};

export default Form;
