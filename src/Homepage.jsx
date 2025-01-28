
import Navbar from './pages/navbar/navbar'
import Centr2 from './pages/centr2/centr2'
import Centr3 from './pages/centr3/centr3'
import Centr1 from './pages/centr1/centr1'
import Bottom  from './pages/bottom/bottom'

function Homepage() {
  return (
    <main className='bg-gr h-full overflow-hidden'>
      <Navbar />
      <Centr1 />
      <Centr2 />
      <Centr3 />
      <Bottom />
    </main >
  )
}

export default Homepage
