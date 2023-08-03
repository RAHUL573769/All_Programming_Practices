import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    renter: ""
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.name);
  };

  return (
    <div>
      <div className=" h-[800px] flex justify-center items-center">
        <div className=" hero  bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    placeholder="Your Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Password</span>
                  </label>
                  <input
                    type="password"
                    value={user.password}
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Re enterPassword</span>
                  </label>
                  <input
                    placeholder="password"
                    type="password"
                    value={user.renter}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
