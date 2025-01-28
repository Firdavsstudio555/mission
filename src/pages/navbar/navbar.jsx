import { Link } from 'react-router-dom'
export function Navbar() {
    return (
        <div className=' bg-gr  w-full h-full'>
            <div className='flex justify-between max-w-[1244px] max-h-16 mx-auto w-full hx-auto pt-16 bg-gr'>
                <div className='flex items-center'>
                    <img src="/Logo.png" alt="" className='w-[57.48px] h-[67px]' />
                    <h1 className='ml-4 text-white  font-bold text-[20px] '>Lilies</h1>
                </div>
                <div className='flex items-center'>
                    <h1 className='mr-4 text-white hover:text-gg ease transition-all duration-700'>Home</h1>
                    <Link className="mr-4 text-white hover:text-gg ease  transition-all duration-700 " to="/login">Login</Link>
                    <Link to="/register" className=' border-gg bg-gg px-6 py-2 rounded-[10px] text-gr  font-bold hover:text-white transition-all duration-700 '>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar 
