import {RiOmega} from "react-icons/ri"
import {Slide} from "react-reveal"

function Title() {
  return (
    <>
      <div className="bg-[#262ACC] py-20 text-[#EDEEF0] flex" >
          <div className="  mx-auto">
              <Slide cascade top>
                <span className="text-[#16CDC4] ml-6 text-2xl font-semibold">Web developer</span> 
              </Slide>
              <p className="text-7xl md:text-9xl font-bold">
                  <Slide top cascade>
                    <span>Sebastiàn</span>
                    <span className="block ml-32">Cartes</span>
                  </Slide>
              </p>
              <Slide bottom cascade>
                <span className="text-[#16CDC4] ml-20 text-2xl font-semibold">Student</span> 
              </Slide>
          </div>
          <Slide top>
            <RiOmega className="text-[400px] rotate-180 -mt-[50px] hidden lg:block opacity-80 "/>
          </Slide>
      </div>
      {/* separator */}
      <svg xmlns="http://www.w3.org/2000/svg" className="rotate-180 -mt-[1px]" viewBox="0 0 1440 320"><path fill="#262ACC" fillOpacity="1" d="M0,192L1440,256L1440,320L0,320Z"></path></svg>
    </>
  )
}

export default Title