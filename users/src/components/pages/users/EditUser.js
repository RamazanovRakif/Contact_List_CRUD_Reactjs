import React, { useState,useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import { useHistory,useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const {id}=useParams()
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;

useEffect(() => {
  loadUser()
}, [])

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    await axios.put(`http://localhost:3000/users/${id}`, user);
    history.push("/")
    
    e.preventDefault();
  };

  const loadUser=async ()=>{
      const result=await axios.get(`http://localhost:3000/users/${id}`)
      setUser(result.data)
  }

 
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5 mt-3">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <Link className="btn btn-success btn-block" to="/">Update User</Link>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
