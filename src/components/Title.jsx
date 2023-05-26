import {RiOmega} from "react-icons/ri"

function Title() {
  return (
    <>
      <div className="bg-[#262ACC] py-20 text-[#EDEEF0] flex" >
          <div className="  mx-auto">
              <span className="text-[#16CDC4] ml-6 text-2xl font-semibold">Web developer</span> 
              <p className="text-7xl md:text-9xl font-bold">
                  <span>Sebastiàn</span>
                  <span className="block ml-32">Cartes</span>
              </p>
              <span className="text-[#16CDC4] ml-20 text-2xl font-semibold">Student</span> 
          </div>
          <RiOmega className="text-[400px] -mt-[50px] hidden lg:block opacity-80 "/>
      </div>
      {/* separator */}
      <div>
        <svg className="rotate-180 -mt-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#262ACC"  d="M0,160L120,186.7C240,213,480,267,720,272C960,277,1200,235,1320,213.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      </div>
    </>
  )
}

export default Title