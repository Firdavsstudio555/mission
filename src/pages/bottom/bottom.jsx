export function Bottom() {
    return (
        <div className=" bg-slate-950 mx-auto w-full ">
            <div className="flex justify-between p-16">
            <div className="w-64">
                <h1 className="mb-7 font-bold text-[25px]">Company</h1>
                <p className="mb-3">About Us</p>
                <p className="mb-3">Careers</p>
                <p className="mb-3">Contact Us</p>
            </div>
            <div className="w-64">
                <h1 className="mb-7 font-bold text-[25px]">Support</h1>
                <p  className="mb-3" >Help Center</p>
                <p  className="mb-3" >Safety Center</p>
            </div>
            <div className="w-64">
                <h1 className="mb-7 font-bold text-[25px]">Legal</h1>
                <p  className="mb-3">Cookies Policy</p>
                <p  className="mb-3">Privacy Policy</p>
                <p  className="mb-3">Terms of Service</p>
                <p  className="mb-3">Dispute resolution</p>
            </div>
            <div className="w-64">
                <h1 className="mb-7 font-bold text-[25px]">Install App</h1>
                <img  className="mb-3" src="/Google.png" alt="" />
                <img  className="mb-3" src="/App.png" alt="" />
            </div>
            </div>
            <div className="w-[1600px] h-[1px] bg-white max-w-[2200px] mt-5"></div>
            <div className="flex justify-between pl-16 pr-16 pt-5 pb-10 mt-5 items-center">
                <p>© 2021 LILIES, All rights reserved</p>
                <div className="flex items-center">
                    <img className="ml-4" src="/ins.png" alt="" />
                    <img className="ml-4" src="/twiter.png" alt="" />
                    <img className="ml-4" src="/youtube.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Bottom