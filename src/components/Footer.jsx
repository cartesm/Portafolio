import {BsPhone} from 'react-icons/bs'
import {RiOmega} from "react-icons/ri"
import {HiOutlineMail} from 'react-icons/hi'

function Footer() {
  return (
    <footer className="footer flex justify-center flex-col items-center gap-5 py-8 bg-[#141535] text-white">
        <RiOmega className='text-9xl text-[#16dcdc] rotate-180'/>
        <p className='min-w-[300px] indent-5 my-3 max-w-[400px] text-center'>
            Los programadores son los magos modernos que dan vida a la tecnología con líneas de código, convirtiendo sueños en realidad.
        </p>
        <div>
            <span className='icon-contactme'><HiOutlineMail className='text-[#16CDC4]'/>sebastiancartes.work@gmail.com</span>
            <span className='icon-contactme'><BsPhone className='text-[#16CDC4]'/> *********</span>
        </div>
    </footer>
  )
}

export default Footer