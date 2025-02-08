export function Profile({ name, email }) {
    return (
        <div className='text-center border-[1px] border-black p-5 h-[390px] '>
            <img className='w-[150px] ml-12 rounded-full h-[150px]' src="./girl.png" alt="" />
            <div className="mt-5">
                <h1 className='text-[20px] font-bold'>{name}</h1>
                <p className='mt-5 w-60'>{email}</p>

            </div>
        </div>
    )
}