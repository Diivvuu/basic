import React from "react";
import useFormValidation from "../hooks/useFormValidation";
//fields - name, email, age, are you ateend with a guest?, guest name
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
    <div className="h-screen w-full mx-auto bg-zinc-600">
      <form
        className="flex flex-col justify-center items-center pt-24"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="flex">
          <label className="">Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            className=""
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label className="">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            className=""
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label className="">Age</label>
          <input
            name="age"
            type="number"
            value={formData.age}
            className=""
            onChange={handleChange}
          />
          {errors.age && <span>{errors.age}</span>}
        </div>
        <div>
          <label className="">Are you attending with a guest?</label>
          <select
            name="attendingWithGuest"
            value={formData.attendingWithGuest}
            className=""
            onChange={handleChange}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        {formData.attendingWithGuest === "Yes" && (
          <div>
            <label>Guest Name : </label>
            <input
              name="guestName"
              type="text"
              value={formData.guestName}
              onChange={handleChange}
            />
            {errors.guestName && <span>{errors.guestName}</span>}
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
