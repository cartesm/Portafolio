import {useForm} from 'react-hook-form'
import {FiMail} from 'react-icons/fi'
function Contact() {
  
 
  const {register,formState:{errors},handleSubmit,watch} = useForm();

  const hSubmit=(data)=>{
    console.log(data);
  }
  

  return (
    <div id='contact' className="bg-[#141535] text-white">
      <div className="flex font-sans items-center ">
        <div className='mx-auto'>
          <h3 className='flex items-center text-2xl my-5 gap-1'><FiMail className='text-3xl '/>Correo</h3>
          <form action="" onSubmit={handleSubmit(hSubmit)}  className=" min-w-[300px] rounded-lg max-w-[500px]">
              <div>
                <label className='label-contact'>Nombre</label> <br />
                <input {...register("name",{required:true,maxLength:50})} autoComplete='off' type="text" className={`input-contact ${errors.name?"border-red-600":"border-[#262ACC]"}`} placeholder='Lion El`Jhonson'/> <br />
                {errors.name?.type==="required" && <span className='input-contact-error'>Este campo es obligatorio.</span>}
              </div>
              <div>
                <label className='label-contact'>Email</label><br />
                <input {...register("email",{required:true,maxLength:50,pattern:/^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/})}  type="email" placeholder="ejemplo@gmail.com" className={`input-contact ${errors.email?"border-red-600":"border-[#262ACC]"}`} /> <br />
                {errors.email?.type==="required" && <span className='input-contact-error'>Este campo es obligatorio.</span>}
                {errors.email?.type==="pattern" && <span className='input-contact-error'>El formato de correo no es aceptable.</span>}
              </div>
              <div>
                <label className='label-contact'>Asunto</label> <br />
                <textarea {...register("affair",{required:true,maxLength:300,minLength:50})} className={`scollbar-textArea resize-none input-contact h-20 ${errors.affair?"border-red-600":"border-[#262ACC]"}`} placeholder='Me communico para...'></textarea> <br />
                {errors.affair?.type==="required" && <span className='input-contact-error'>Este campo es obligatorio.</span>}
                {errors.affair?.type==="minLength" && <span className='input-contact-error'>El asunto es demaciado corto.</span>}
              </div>
            <input className="input-contact-button" type="submit" value={"Enviar"} />
          </form>  
        </div>
      {/* imagen mapa */}
      <div className="min-w-[300px] max-w-[650px] xl:block hidden">
        <img className="object-cover" src="https://apod.nasa.gov/debate/2020/Tarter100th/Slide11.JPG" alt="" />
       </div>
      </div>
      <div className="py-6">
        <h3 className="text-center text-2xl">Redes y otros.</h3>
        <div>
            {/* intagram, linkedin, github, Freelancer, wattsApp */}
          
        </div>
      </div>
    </div>
  )
}

export default Contact