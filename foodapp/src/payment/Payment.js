import React, { useState } from 'react';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    paymentReceipt: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'file' ? files[0] : value,
      }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('paymentReceipt', formData.paymentReceipt);
  
      const response = await fetch('http://localhost:3001/submit_form', {
        method: 'POST',
        body: formDataToSend,
      });
  
      if (response.ok) {
        console.log('Form submitted successfully!');
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  return (
    <div>
      <h2>Payment Information Form</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <br />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

        <br />

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" value={formData.address} onChange={handleChange} required />

        <br />
  
        <label htmlFor="paymentReceipt">Upload Payment Receipt:</label>
        <input type="file" id="paymentReceipt" name="paymentReceipt" onChange={handleChange} accept="image/*" required />

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PaymentForm;
