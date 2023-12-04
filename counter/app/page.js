import Image from 'next/image'
import Contador from './components/Contador';
import './globals.css'


const Page = () => {
  return (
    <> 
    <div className='title'>
    <h1> Contador de números </h1>
    <h2>  usando o NEXT.JS</h2>
    </div>

    <div className='contador'>
    <Contador className="counter"/>
     </div>
  </>
  )
}

export default Page