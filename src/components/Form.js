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
  const { formData, errors, handleChange, handleSubmit } = useFormValidation();
  return (
    <div className="h-screen w-full mx-auto bg-zinc-600">
      <form className="flex flex-col justify-center items-center pt-24">
        <div className="flex">
          <label className="">Name</label>
          <input name="name" type="text" className="" />
        </div>
        <div>
          <label className="">Email</label>
          <input name="" type="" className="" />
        </div>
        <div>
          <label className="">Age</label>
          <input name="" type="" className="" />
        </div>
        <div>
          <label className="">Are you attending with a guest?</label>
          <input
            name=""
            type=""
            className=""
            placeholder="Are you attending with a guest"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
