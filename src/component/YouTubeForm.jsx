import React from "react";
import { useForm } from "react-hook-form";
import {DevTool} from "@hookform/devtools"

function YouTubeForm() {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const {errors} = formState

  const onSubmit = (data) => {
    console.log("hook form", data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username", {
          required: {
            value: true,
            message: "Username is required"
          }
        })} />
        <p className="errors">{errors.username?.message}</p>
        </div>

        <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email", {
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "invalid email address"
          },
          validate: (fieldValue) => {
              return 
          }
        })} />
        <p className="errors">{errors.email?.message}</p>
        </div>

        <div className="form-control">
        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel", {
          required: {
            value: true,
            message: "Channel is required"
          }
        })} />
        <p className="errors">{errors.channel?.message}</p>
        </div>

        <button>Submit</button>
      </form>
      <DevTool control={control}/>
    </div>
  );
}

export default YouTubeForm;
