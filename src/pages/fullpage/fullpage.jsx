import { Dashboard } from "../dashboard/dashboard"

function Fullpage() {
    return (
        <main className='bg-white h-full'>
            <div className="flex justify-between">
                <Dashboard />
            </div>
        </main >
    )
}

export default Fullpage
