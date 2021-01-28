import { Component, useState, useRef, useEffect } from 'react';

export default function AddYuppiePage({ handleAddYuppie }) {
  const [formValidity, setFormValidity] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    age: '0',
    location: '',
    occupation: ''
  });

  const formRef = useRef();

  useEffect(() => formRef.current.checkValidity() ? setFormValidity(false) : setFormValidity(true));

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddYuppie(formData);
  }

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  return (
    <>
      <h1>Add Yuppie</h1>
      <form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            onChange={handleChange}
            name="name"
            value={formData.name}
            required
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            className="form-control"
            onChange={handleChange}
            name="age"
            value={formData.age}
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            className="form-control"
            onChange={handleChange}
            name="location"
            value={formData.location}
          />
        </div>
        <div className="form-group">
          <label>Occupation</label>
          <input
            className="form-control"
            onChange={handleChange}
            name="occupation"
            value={formData.occupation}
            required
          />
        </div>
        <button className="btn" type="submit" disabled={formValidity}>
          ADD YUPPIE
        </button>
      </form>
    </>
  );
}