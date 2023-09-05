import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const myform = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(myform)}>
      <div
        className="container bg-light p-5 shadow border"
        style={{ marginTop: "100px" }}
      >
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="border-bottom pb-3">Contact Us</h2>
          </div>
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              {...register("fullname", { required: true })}
            />
            <p>
              {errors.fullname && (
                <span className="text-danger">This field is required</span>
              )}
            </p>
          </div>
          <div className="col-md-6">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger mt-2">This field is required</span>
            )}
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone no</label>
            <input
              type="text"
              className="form-control"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span className="text-danger mt-2">This field is required</span>
            )}
          </div>
          <div className="col-md-6">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="text-danger mt-2">This field is required</span>
            )}
          </div>
          <div className="col-md-12 mt-3 pt-2 text-center">
            <input type="submit" value="submit" className="btn btn-success" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
