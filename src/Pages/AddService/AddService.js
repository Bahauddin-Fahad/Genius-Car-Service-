import React from "react";
import { useForm } from "react-hook-form";
const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = "http://localhost:5000/service";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="w-1/2 mx-auto min-h-[calc(100vh-187px)]">
      <h2>Add new Service</h2>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="border-2 mb-2"
          placeholder="Name of the service"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="border-2 mb-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="border-2 mb-2"
          placeholder="price"
          type="number"
          {...register("price")}
        />
        <input
          className="border-2 mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input className="border-2" type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
