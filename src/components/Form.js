import React from "react";
import useFormValidation from "../hooks/useFormValidation";
// fields - name, email, age, are you attending with a guest?, guest name
const validateForm = (values) => {
  const errors = {};
  if (!values.name)
    errors.name =
      "Oops! Looks like you forgot to tell us your name. Can't we at least know who you are?";
  if (!values.email)
    errors.email =
      "Don't leave us hanging! We need your email to keep in touch.";
  else if (!/\S+@\S+\.\S+/.test(values.email))
    errors.email =
      "That doesn't look like a valid email address. Did you mean to type example@example.com?";
  if (!values.age)
    errors.age =
      "We'd love to know your age, Don't worry we won't tell anyone!";
  else if (isNaN(values.age)) errors.age = "Age must be a number!";
  else if (values.age <= 0 || values.age >= 150)
    errors.age = "Are you a time traveller or something?";
  if (values.attendingWithGuest === "Yes" && !values.guestName)
    errors.guestName =
      "Guest name is required, We want to know who you are bringing!";

  return errors;
};

const Form = () => {
  const { formData, errors, handleChange, handleSubmit } = useFormValidation(
    {
      name: "",
      email: "",
      age: "",
      attendingWithGuest: "",
      guestName: "",
    },
    validateForm
  );

  const submitForm = () => {
    alert(`Form Submitted Successfully`);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form
        className="w-[80%] max-w-lg bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
        onSubmit={handleSubmit(submitForm)}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Sign Up
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            name="name"
            type="text"
            value={formData.name}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:shadow-outline transition duration-300"
            onChange={handleChange}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:shadow-outline transition duration-300"
            onChange={handleChange}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Age
          </label>
          <input
            name="age"
            type="number"
            value={formData.age}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:shadow-outline transition duration-300"
            onChange={handleChange}
          />
          {errors.age && (
            <span className="text-red-500 text-sm">{errors.age}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Are you attending with a guest?
          </label>
          <select
            name="attendingWithGuest"
            value={formData.attendingWithGuest}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:shadow-outline transition duration-300"
            onChange={handleChange}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        {formData.attendingWithGuest === "Yes" && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Guest Name
            </label>
            <input
              name="guestName"
              type="text"
              value={formData.guestName}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:shadow-outline transition duration-300"
              onChange={handleChange}
            />
            {errors.guestName && (
              <span className="text-red-500 text-sm">{errors.guestName}</span>
            )}
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
