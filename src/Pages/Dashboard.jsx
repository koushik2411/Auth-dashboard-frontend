import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const {user, logout} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  return (
    <>
      <div className=' w-screen h-screen flex items-center justify-center bg-[#090f1a]'>
        <div className=' border h-100 w-[75vw] max-w-175 flex flex-col items-center gap-10 pb-8 rounded-xl bg-[#e4e4e4]'>
          
          <h1 className=' w-full p-5 rounded-t-xl text-blue-50 text-3xl font-semibold flex items-center justify-center bg-blue-500'>Dashboard</h1>

          <div className=' h-full flex flex-col gap-10 items-center justify-center'>
            <p className=' text-orange-600 font-semibold text-xl'>Welcome !!! </p>
            <p className=' text-blue-600 font-bold text-2xl'>{user?.name}</p>
          </div>

          <button onClick={handleLogout} className=' p-3 mb-2 text-blue-50 bg-blue-500 rounded-xl'>Logout</button>
        </div>

      </div>
    </>
  )
}

export default Dashboard