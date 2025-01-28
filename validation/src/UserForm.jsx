import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const validation = z.object({
  name: z.string().min(2, "min 2 characters").max(25, "max 25 characters"),
  email: z.string().email(),
  password: z
    .string()
    .min(6, "min 6 characters")
    .regex(/[a-z]/, "small character required")
    .regex(/[A-Z]/, "large character required")
    .regex(/[@%&_?$]/, "single special character required"),
});

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validation),
  });

  const onSubmit = (data) => {
    console.log("onSubmit", data, errors);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">name</label>
        <input type="text" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
        <br />
        <label>email: </label>
        <input type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <br />
        <label htmlFor="">password</label>
        <input type="text" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UserForm;
