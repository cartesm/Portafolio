import {Slide} from "react-reveal"
import {FiMail} from 'react-icons/fi'
import {RxCross2} from "react-icons/rx"
import {useState} from "react"
function Message({message}) {
  
    const [display, setDisplay] = useState(true)
    const handleDisplay =()=> setDisplay(false)
    return (
    <Slide left>
        <div className={`fixed ${display?"block":"hidden"} top-0 bg-[#141535] text-white m-2 font-sans items-center justify-between rounded-md z-[60] min-w-[300px] max-w-[400px] border-l-[6px] border-[#262ACC] flex`}>
            <div className="flex items-center">
                <FiMail className="h-[50px] mx-2 text-xl"/>
                <p>
                    {message || "kjhgjkh"}
                </p>
            </div>
            <button onClick={handleDisplay}>
                <RxCross2 className="text-xl mx-2 hover:rotate-180 transition duration-150"/>
            </button>
        </div>
    </Slide>
  )
}

export default Message