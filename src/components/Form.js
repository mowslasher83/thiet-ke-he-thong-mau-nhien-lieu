import React from 'react';
import './Form.css';

function Form({ onSubmit }) {
  return (
    <form className="custom-form" onSubmit={onSubmit}>
      <input type="text" placeholder="Nhập tên" required />
      <button type="submit">Gửi</button>
    </form>
  );
}

export default Form;