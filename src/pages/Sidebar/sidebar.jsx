
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
          <Link to="/board">Dashboard</Link>
        </div>
        <div className="flex justify-around mt-10">
          <Link to="/orders">Orders</Link>
        </div>
        <div className="flex justify-around mt-10">
          <Link to="/yourcart">Your Cart</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;