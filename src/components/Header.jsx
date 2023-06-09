import {useState} from 'react'
import {RiOmega} from 'react-icons/ri'
import {Slide} from "react-reveal"
function Header() {

    const [dplay, setDplay] = useState(false)

    window.addEventListener("scroll",()=>{
        setDplay(window.scrollY)
    })
    
    

return <header id='header' className={` w-full  bg-[#262ACC]`}>
        <nav className='h-10 text-white flex py-8 items-center '>
        <svg  fill="#fff" className='mx-8' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="40px"  viewBox="0 0 98.82 98.82">
                <g >
                    <path d="M96.82,85.474H86.357c6.945-9.213,10.77-20.733,10.77-32.438c0-28.343-21.406-51.402-47.72-51.402
                        c-26.313,0-47.72,23.06-47.72,51.402c0,11.707,3.823,23.227,10.767,32.438H2c-1.104,0-2,0.896-2,2v7.714c0,1.104,0.896,2,2,2
                        h28.551c1.104,0,2-0.896,2-2v-8.593c0-0.476-0.169-0.935-0.477-1.296l-0.111-0.131c-0.112-0.133-0.242-0.25-0.385-0.348
                        c-9.826-6.81-15.931-18.988-15.931-31.785c0-20.646,15.145-37.442,33.76-37.442c18.614,0,33.759,16.797,33.759,37.442
                        c0,12.851-6.143,25.055-16.029,31.851c-0.543,0.373-0.867,0.989-0.867,1.647v8.653c0,1.104,0.896,2,2,2H96.82c1.104,0,2-0.896,2-2
                        v-7.714C98.82,86.369,97.926,85.474,96.82,85.474z"/>
                </g>
            </svg>
            <div className='flex gap-2 md:gap-6'>
                <a href="#me" className='link-header'>Sobre mi</a>
                <a href="#skills" className='link-header'>Skills</a>
                <a href="#projects" className='link-header'>Projectos</a>
                <a href="#contact" className='link-header'>Contacto</a>
            </div>
        </nav>
        <Slide top>
            <nav className={`${dplay<=600?"hidden":"block"} bg-[#262ACC] top-0 z-50 w-full flex items-center fixed justify-center gap-2 text-center  font-sans text-white`}>
                
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