import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';

const Sidebar = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  useEffect(() => {
    setId(localStorage.getItem('id'))
  }, [])

  const logoutHandler = async() => {
    try {
      localStorage.removeItem('id');
      axios.delete('http://localhost:5000/logout');
      localStorage.clear()
      navigate('/');
      console.log("berhasil logout")
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <aside className="w-64 h-auto bg-blue-500 text-white p-4 flex flex-col">
      <Link to={`/dashboard`}>
        <div className="mb-8 text-2xl font-semibold">CV Maker</div>
      </Link>
      <ul className="space-y-2 flex-1">
        <li>
          <Link to={`/datadiri/${id}`} className="flex items-center p-2 space-x-2 rounded-md hover:bg-blue-400" style={{ width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            </svg>
            Data Diri
          </Link>
        </li>
        <li>
          <Link to={`/pendidikan/${id}`} className="flex items-center p-2 space-x-2 rounded-md hover:bg-blue-400" style={{ width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            </svg>
            Pendidikan
          </Link>
        </li>
        <li>
          <Link to={`/organisasi/${id}`} className="flex items-center p-2 space-x-2 rounded-md hover:bg-blue-400" style={{ width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            </svg>
            Organisasi
          </Link>
        </li>
        <li>
          <Link to={`/portofolio/${id}`} className="flex items-center p-2 space-x-2 rounded-md hover:bg-blue-400" style={{ width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            </svg>
            Portofolio
          </Link>
        </li>
        <li>
          <Link to={`/skill/${id}`} className="flex items-center p-2 space-x-2 rounded-md hover:bg-blue-400" style={{ width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            </svg>
            Skill
          </Link>
        </li>
      </ul>
      <div>
        <button className="p-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
