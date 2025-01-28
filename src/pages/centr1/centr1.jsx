

export function Centr1() {
    return (
        <div className=' bg-gr  w-full h-full'>
            <div className='flex items-center mt-[250px] justify-between max-w-[1244px] max-h-16 mx-auto w-full  pt-16 bg-gr'>
                <div className=' w-[600px]'>
                    <h1 className='font-bold text-[50px]'>
                        Order  <span className='text-gg'>food</span>  anytime, anywhere
                    </h1>
                    <h1 className='mt-[30px]'>Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!</h1>
                    <div className='flex mt-[30px]'>
                        <img src="/App.png" alt="App.store" />
                        <img src="/Google.png" alt="Google play" className='ml-5' />
                    </div>
                </div>
                <img src="/lavash.png" alt="" className='w-[400px] h-[400px]' />
            </div>
        </div>
    )
}

export default Centr1
