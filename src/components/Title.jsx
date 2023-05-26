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
            <RiOmega className="text-[400px] -mt-[50px] hidden lg:block opacity-80 "/>
          </Slide>
      </div>
      {/* separator */}
      <div>
      <svg className="rotate-180 -mt-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#262ACC" d="M0,224L48,218.7C96,213,192,203,288,197.3C384,192,480,192,576,208C672,224,768,256,864,261.3C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </>
  )
}

export default Title