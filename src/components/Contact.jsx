import {useForm} from 'react-hook-form'
import {useRef,useState} from 'react'
import emailjs from '@emailjs/browser';
import {FiMail} from 'react-icons/fi'
import Message from './Message';
function Contact() {
  
  const [Dplay, setDplay] = useState(false)
  const {register,formState:{errors},handleSubmit} = useForm();
  const form = useRef()

  const hSubmit=()=>{
    emailjs.sendForm('service_0rkhp2j', 'template_zhfktwj', form.current, 'qtfVgRZUhOEwI_cxs')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          setDplay(true)
      }, (error) => {
          console.log(error.text);
    });
  }
  

  return (
    <>
    {Dplay && <Message message={"Correo enviado."}/>}
    <div id='contact' className="bg-[#141535] text-white">
      <div className="flex font-sans items-center ">
        <div className='mx-auto'>
          <h3 className='flex items-center text-2xl my-5 gap-1 text-[]'><FiMail className='text-3xl '/>Correo</h3>
          <form ref={form} action="" onSubmit={handleSubmit(hSubmit)}  className=" min-w-[300px] max-w-[500px]">
              <div className='containner-contact'>
                <label className='label-contact'>Nombre</label> <br />
                <input {...register("user_name",{required:true,maxLength:50})} autoComplete='off' type="text" className={`input-contact ${errors.user_name?"border-violet-600":"border-[#16dcdc]"}`} placeholder='Lion El`Jhonson'/> <br />
                {errors.user_name?.type==="required" && <span className='input-contact-error'>Este campo es obligatorio.</span>}
              </div>
              <div className='containner-contact'>
                <label className='label-contact'>Email</label><br />
                <input autoComplete='off' {...register("user_email",{required:true,pattern:/^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/})}  type="email" placeholder="ejemplo@gmail.com" className={`input-contact ${errors.user_email?"border-violet-600":"border-[#16dcdc]"}`} /> <br />
                {errors.user_email?.type==="required" && <span className='input-contact-error'>Este campo es obligatorio.</span>}
                {errors.user_email?.type==="pattern" && <span className='input-contact-error'>El formato de correo no es aceptable.</span>}
              </div>
              <div className='containner-contact'>
                <label className='label-contact'>Asunto</label> <br />
                <input {...register("user_affair",{required:true,maxLength:50})} autoComplete='off' type="text" className={`input-contact ${errors.affair?"border-violet-600":"border-[#16dcdc]"}`} placeholder='Trabajo'/> <br />
                {errors.affair?.type==="required" && <span className='input-contact-error'>Este campo es obligatorio.</span>}
              </div>
              <div className='containner-contact'>
                <label className='label-contact'>Mensaje</label> <br />
                <textarea {...register("message",{required:true,maxLength:300,minLength:50})} className={`scollbar-textArea resize-none input-contact h-20 ${errors.message?"border-violet-600":"border-[#16dcdc]"}`} placeholder='Me communico para...'></textarea> <br />
                {errors.message?.type==="required" && <span className='input-contact-error'>Este campo es obligatorio.</span>}
                {errors.message?.type==="minLength" && <span className='input-contact-error'>El mensaje es demaciado corto.</span>}
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
    </>
  )
}

export default Contact