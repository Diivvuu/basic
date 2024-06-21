import { useState } from "react";

const useFormValidation = (initialState, validate) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (callback) => (e) => {
      e.preventDefault();
      const validationErrors = validate(formData);
      
  };
};
export default useFormValidation;
