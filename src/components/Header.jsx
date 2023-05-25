import {useState} from 'react'
import {FaInstagram,FaWhatsapp} from "react-icons/fa"
function Header() {

    const [dplay, setDplay] = useState(0)

    window.addEventListener("scroll",()=>{
        setDplay(window.scrollY)
    })
    
    

return <header className={`${dplay<=500?"hidden":"block"} `}>
        <nav className='flex items-center justify-center gap-2 text-center bg-[#0d407f] font-sans text-white'>
            <p className='flex gap-1 '>
            <FaInstagram className='hover:scale-105 transition duration-150'/>
            <FaWhatsapp className='hover:scale-105 transition duration-150'/>
            </p>
            <span>Sebatian Cartes</span>
        </nav>

  </header>
}

export default Header