import React from "react";
import { useForm } from "react-hook-form";
import {DevTool} from "@hookform/devtools"

function YouTubeForm() {
  const form = useForm();
  const { register, control, handleSubmit } = form;

  const onSubmit = () => {
    console.log("hook form")
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />

        <lable htmlFor="channel">Channel</lable>
        <input type="text" id="channel" {...register("channel")} />

        <button>Submit</button>
      </form>
      <DevTool control={control}/>
    </div>
  );
}

export default YouTubeForm;
