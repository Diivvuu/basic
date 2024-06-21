import React from "react";
//fields - name, email, age, are you ateend with a guest?, guest name
const Form = () => {
  return (
    <div>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Age" />
        <input placeholder="Are you attending with a guest" />
      </form>
    </div>
  );
};

export default Form;
