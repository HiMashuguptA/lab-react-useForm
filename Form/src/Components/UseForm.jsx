import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
function UseForm() {
    const{register,handleSubmit,watch,reset,formState:{errors,isSubmitSuccessful,isSubmitted}}=useForm()
    // console.log(watch());
    // console.log("errors: ", errors);
    const FormSubmit=(data)=>{
        toast("Submited Successfully")
        console.log("data:", data);
    }
    if(errors.firstName && (errors.firstName.type==='minLength' || errors.firstName.type==='maxLength'|| errors.firstName)){
      toast("Your Name should be between 4-10 Char")
    }else if(errors.lastName && (errors.lastName.type==='minLength' || errors.lastName.type==='maxLength'|| errors.lastName)){
      toast("Your Last Name requires min 4 char")
    }
    else if(errors.password && (errors.password.type==='minLength' || errors.password )){
      toast("Please Enter Password more than 8 char")
    }
    return (
        <div className="form-container">
          <ToastContainer />
          <fieldset>
            <legend>Fill this Form</legend>
            <form onSubmit={handleSubmit(FormSubmit)}>
              {/* Success Message  */}
                {isSubmitSuccessful&&<div className="success">
                  <p>Registration Successful</p>
                </div>}
              <label> First Name </label>
              <input type="text" name="firstName" {...register("firstName",{
                required:"Fill First Name",
                minLength:{value:4,message: "Minimum 4 Charcter Required"},
                maxLength:{value:10,message:"Minimum 8 Character Required"}
              })}/>
              {/* {errors.firstName && <p className="err">{errors.firstName.message}</p>} */}
              <p className="err">{errors.firstName?.message}</p>

    
              <label> Last Name </label>
              <input type="text" name="lastName" {...register("lastName",{
                required:"Enter Last Name",
                minLength:{value:4,message: "Minimum 4 Charcter Required"}
              })}/>
              {/* {errors.lastName && <p className="err">{errors.lastName.message}</p>} */}
              <p className="err">{errors.lastName?.message}</p>
    
              <label>Email</label>
              <input type="email" name="email" {...register("email",{required:"Enter Email"})}/>
              {/* {errors.email && <p className="err">{errors.email.message}</p>} */}
              <p className="err">{errors.email?.message}</p>
    
              <label> Enter Passwordd </label>
              <input type="password" name="password" {...register("password",{required:"Enter Password",
            minLength:{value:8,message:"Minimum 8 Char Required"}
            })}/>
              {/* {errors.phoneNo && <p className="err">{errors.phoneNo.message}</p>} */}
              <p className="err">{errors.password?.message}</p>
              <input className="button" type="submit" value={"Register"} />
              <button className='reset' onClick={()=>reset()}>Reset</button>
            </form>
          </fieldset>
        </div>
      );
}

export default UseForm