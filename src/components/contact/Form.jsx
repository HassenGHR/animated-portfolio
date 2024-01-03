import React, { useRef, useState } from "react";
import "./form.scss"; 
import { motion } from "framer-motion";

const FormPage = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/submit-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
  
      if (response.ok) {
        console.log("Form submitted successfully!");
        setForm({
          name: "",
          email: "",
          message: "",
        })
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="contact">
      <h2>Contact.</h2>
      <form className="formContainer" onSubmit={handleSubmit}>
        <label>
          <span>Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="input-field"
          />
        </label>

        <label >
          <span>Your Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className="input-field"
          />
        </label>
        <label >
          <span>Your Message</span>
          <textarea
            rows={5}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="input-field"
          />
        </label>
        <button
          type="submit"
          className={`submit-button ${loading ? "loading" : ""}`}
        >
          {loading ? "Sending..." : "Send"}
        </button>
        
      </form>
      <div className="wrapper">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              ></motion.span>
               <div className="social">
          <motion.a
            href="https://www.linkedin.com/in/hassen-goumghar-profile23/"
            whileHover={{ scale: 1 }}
          >
            <img src="/linkedin.png" alt="LinkedIn" />
          </motion.a>
          <motion.a
            href="https://github.com/HassenGHR"
            whileHover={{ scale: 1 }}
          >
            <img src="/github.png" alt="GitHub" />
          </motion.a>
          <motion.a
            href="https://www.datacamp.com/portfolio/goumhassan"
            whileHover={{ scale: 1 }}
          >
            <img src="/datacamp.svg" alt="DataCamp" />
          </motion.a>
        </div>
            </div>
    </div>
  );
};

export default FormPage;
