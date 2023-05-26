import {useState} from 'react'
import {FaInstagram,FaWhatsapp} from "react-icons/fa"
function Header() {

    const [dplay, setDplay] = useState(0)

    window.addEventListener("scroll",()=>{
        setDplay(window.scrollY)
    })
    
    

return <header className={`${dplay<=550?"hidden":"block"} w-full fixed top-0 z-50`}>
        <nav className='flex items-center justify-center gap-2 text-center bg-[#262ACC] font-sans text-white'>
            <p className='flex gap-1 '>
            <FaInstagram className='icon-top'/>
            <FaWhatsapp className='icon-top'/>
            </p>
            <span>Sebastiàn Cartes</span>
        </nav>

  </header>
}

export default Header