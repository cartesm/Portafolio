import {RiOmega} from "react-icons/ri"

function Title() {
  return (
    <div className="bg-[#262ACC] py-12 flex items-center justify-between text-[#EDEEF0] " >
        <div className="ml-32">
            <span className="text-[#16CDC4] ml-6 text-2xl font-semibold">Web developer</span> 
            <p className="text-9xl font-bold">
                <span>Sebastian</span>
                <span className="block ml-32">Cartes</span>
            </p>
            <span className="text-[#16CDC4] ml-20 text-2xl font-semibold">Student</span> 
        </div>
        <RiOmega className="text-[400px] opacity-80 "/>

    </div>
  )
}

export default Title