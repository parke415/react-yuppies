import { useState, useEffect, useRef } from 'react';
import {Link, useLocation} from 'react-router-dom';

export default function EditYuppiePage({ handleUpdateYuppie }) {
  const [formValidity, setFormValidity] = useState(true);
  const [formData, setFormData] = useState(useLocation().state.yuppie);

  const formRef = useRef();

  useEffect(() => formRef.current.checkValidity() ? setFormValidity(false) : setFormValidity(true), [formData]);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateYuppie(formData);
  }

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  return (
    <>
      <h1>Edit Yuppie</h1>
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
          UPDATE YUPPIE
        </button>
        <Link to='/'>CANCEL UPDATE</Link>
      </form>
    </>
  );
}