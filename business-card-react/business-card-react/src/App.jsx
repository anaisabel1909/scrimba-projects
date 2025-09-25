import Info from './Info'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'

export default function App() {
  return (
    <div className='card'>
      <Info/>
      <div className='card-details'>
        <About/>
        <Interests/>
        <Footer/>
      </div>
    </div>
  )
}