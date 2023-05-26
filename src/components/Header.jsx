import {useState} from 'react'
import {FaInstagram,FaWhatsapp} from "react-icons/fa"
import {Slide} from "react-reveal"
function Header() {

    const [dplay, setDplay] = useState(false)

    window.addEventListener("scroll",()=>{
        setDplay(window.scrollY)
    })
    
    

return <header className={`${dplay<=600?"hidden":"block"} w-full fixed top-0 z-50`}>
        <Slide top>
            <nav className='flex items-center justify-center gap-2 text-center bg-[#262ACC] font-sans text-white'>
                <p className='flex gap-1 '>
                <FaInstagram className='icon-top'/>
                <FaWhatsapp className='icon-top'/>
                </p>
                <span>Sebastiàn Cartes</span>
            </nav>
        </Slide>

  </header>
}

export default Header