import React, { useState } from 'react';

function AddHogForm({ addNewHog }) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    specialty: '',
    weight: '',
    greased: false,
    'highest medal achieved': ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.image) {
      addNewHog(formData);
      setFormData({
        name: '',
        image: '',
        specialty: '',
        weight: '',
        greased: false,
        'highest medal achieved': ''
      });
    } else {
      alert("Please fill out the name and image fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="ui form segment">
      <div className="field">
        <label>Name</label>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
        />
      </div>
      <div className="field">
        <label>Image URL</label>
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={formData.image} 
          onChange={handleChange} 
        />
      </div>
      <div className="field">
        <label>Specialty</label>
        <input 
          type="text" 
          name="specialty" 
          placeholder="Specialty" 
          value={formData.specialty} 
          onChange={handleChange} 
        />
      </div>
      <div className="field">
        <label>Weight (kg)</label>
        <input 
          type="number" 
          name="weight" 
          placeholder="Weight" 
          value={formData.weight} 
          onChange={handleChange} 
        />
      </div>
      <div className="field">
        <label>Greased</label>
        <input 
          type="checkbox" 
          name="greased" 
          checked={formData.greased} 
          onChange={handleChange} 
        />
      </div>
      <div className="field">
        <label>Highest Medal Achieved</label>
        <input 
          type="text" 
          name="highest medal achieved" 
          placeholder="Highest Medal" 
          value={formData['highest medal achieved']} 
          onChange={handleChange} 
        />
      </div>
      <button type="submit" className="ui button primary">Add Hog</button>
    </form>
  );
}

export default AddHogForm;
