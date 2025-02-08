// import { TrophySpin } from 'react-loading-indicators';
// import { Commet } from 'react-loading-indicators';
import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <div className="pr-14 p-10 text-black bg-white h-[900px]">
      <div className="flex items-center">
        <Link to="/"><img className="w-[60px]" src="/Logo.png" alt="Logo" /></Link>
        <h1 className="ml-3 font-bold text-[25px]">Lilies</h1>
      </div>
      <div className="grid p-10 mt-10 font-bold text-[20px]">
        <div className="flex justify-around mt-10">
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="flex justify-around mt-10">
          <Link to="/profile">Account</Link>
        </div>
        <div className="flex justify-around mt-10">
          <Link to="/orders">Orders</Link>
          {/* <Commet color="#080612" size="medium" text="" textColor="" /> */}
        </div>
        <div className="flex justify-around mt-10">
          <Link to="/yourcart">Your Cart</Link>
          {/* <TrophySpin color="#080612" size="medium" text="wait" textColor="#6b6767" /> */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;