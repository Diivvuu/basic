import React from "react";
//fields - name, email, age, are you ateend with a guest?, guest name
const Form = () => {
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
