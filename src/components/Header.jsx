import {useState} from 'react'
import {FaInstagram,FaWhatsapp} from "react-icons/fa"
import {RiOmega} from 'react-icons/ri'
import {Slide} from "react-reveal"
function Header() {

    const [dplay, setDplay] = useState(false)

    window.addEventListener("scroll",()=>{
        setDplay(window.scrollY)
    })
    
    

return <header id='header' className={` w-full  bg-[#262ACC]`}>
        <nav className='h-10 text-white flex py-8 items-center '>
            <RiOmega className='text-4xl rotate-180 mx-12'/>
            <div className='flex gap-6'>
                <a href="#me" className='link-header'>Sobre mi</a>
                <a href="#skills" className='link-header'>Skills</a>
                <a href="#projects" className='link-header'>Projectos</a>
                <a href="#contact" className='link-header'>Contacto</a>
            </div>
        </nav>
        <Slide top>
            <nav className={`${dplay<=600?"hidden":"block"} bg-[#262ACC] top-0 z-50 w-full flex items-center fixed justify-center gap-2 text-center  font-sans text-white`}>
                <p className='flex gap-1 '>
                <FaInstagram className='icon-top'/>
                <FaWhatsapp className='icon-top'/>
                </p>
                <span>Sebastiàn Cartes</span>
                <p>
                    <a href="#header">
                        <RiOmega className='text-xl rotate-180'/>
                    </a>
                </p>
            </nav>
        </Slide>

  </header>
}

export default Header