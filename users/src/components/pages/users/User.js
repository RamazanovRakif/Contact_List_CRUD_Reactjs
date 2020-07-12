import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser=async ()=>{
    const result=await axios.get(`http://localhost:3000/users/${id}`)
    setUser(result.data)
}
  return (
    <div className="container py-4">
      <Link className="btn btn-info mt-3" to="/">
        Back to Home
      </Link>
      <h1 className="display-4">User: {user.name}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">User Name: {user.username}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
        <li className="list-group-item">ebsite: {user.website}</li>
      </ul>
    </div>
  );
};

export default User;
