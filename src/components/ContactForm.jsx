import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios"; // Import axios

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  
  const playSuccessSound = () => {
    const audio = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/2127/2127-preview.mp3"
    ); 
    audio.play();
  };

  const playErrorSound = () => {
    const audio = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/2997/2997-preview.mp3"
    ); 
    audio.play();
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { firstName: "", lastName: "", phone: "", email: "", message: "" };

    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
      isValid = false;
    }

    // Last Name Validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
      isValid = false;
    }

    // Phone Validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone Number must be 10 digits";
      isValid = false;
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:5000/api/contact", formData);
        
        // Save form data to localStorage
        localStorage.setItem("formData", JSON.stringify(formData));
        console.log(formData);
  
        // Play success sound
        playSuccessSound();
  
        // Show success toast
        toast.success("Form submitted successfully!");
  
        // Reset form data and errors
        setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
        setErrors({ firstName: "", lastName: "", phone: "", email: "", message: "" });
      } catch (error) {
        // Handle any errors that occur during the request
        console.error("Error submitting form:", error);
  
        // Play error sound
        playErrorSound();
  
        // Show error toast
        toast.error("An error occurred while submitting the form.");
      }
    } else {
      // Play error sound
      playErrorSound();
  
      // Show error toast
      toast.error("Please fill out the form correctly.");
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();

    
  //   if (validateForm()) {
      
  //     localStorage.setItem("formData", JSON.stringify(formData));
  //     console.log(formData);
      

     
  //     playSuccessSound();

      
  //     toast.success("Form submitted successfully!");

      
  //     setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
  //     setErrors({ firstName: "", lastName: "", phone: "", email: "", message: "" });
  //   } else {
      
  //     playErrorSound();

     
  //     toast.error("Please fillup the form.");
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for the field
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-950">
          Contact Us
        </h2>
        {/* Gradient Border Wrapper */}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gradient-to-r from-red-600 via-black to-blue-800 p-[2px] rounded-lg transition-all duration-300 hover:shadow-xl"
        >
          {/* Inner White Background */}
          <div className="bg-white p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full p-3 border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 transition-all`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full p-3 border ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 transition-all`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 transition-all`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 transition-all`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="mt-6">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 transition-all`}
                rows="5"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-blue-950 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors font-extrabold duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </div>
        </form>
        <Toaster />
      </div>
    </section>
  );
}

export default ContactForm;
