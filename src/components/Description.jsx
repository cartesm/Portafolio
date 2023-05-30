import {Reveal} from "react-reveal"
function Description() {

 
  return (
    <Reveal cascade>
    <div id="me" className="flex flex-col md:flex-row pb-[100px] items-center justify-center gap-12">
        <div className="flex items-center flex-col gap-5">
            <h3 className="font-sans text-4xl"><b>Acerca de mi</b></h3>
            <p className=" xd min-w-[450px] max-w-[500px] px-6 font-sans text-lg indent-8 md:indent-7 leading-8">
                Soy un desarrollador web con amplia experiencia en HTML, CSS, JavaScript, React, MongoDB, Node.js y Express.
                Además, tengo conocimientos en el mantenimiento de hardware, lo que me hace más versátil en el campo de la tecnología. 
                En mi tiempo libre, me gusta leer, ver anime y películas, lo cual me ayuda a encontrar un equilibrio entre mi vida profesional y personal.
            </p>
        </div>
        <div className="">   
          <svg className="min-w-[300px] max-w[400px]" xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
            <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
            <g stroke="#61dafb"  fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
        </div>
    </div>
    </Reveal>
  )
}

export default Description