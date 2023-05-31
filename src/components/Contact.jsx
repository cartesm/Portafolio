import {useForm} from 'react-hook-form'
import {useRef,useState} from 'react'
import emailjs from '@emailjs/browser';
import Message from './Message';
import {BsGithub,BsLinkedin,BsInstagram} from 'react-icons/bs'
import {SiFreelancer} from 'react-icons/si'
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
    <div className='mx-auto rounded-xl bg-[#191a49] max-w-[300px] h-[50px] -my-[25px] relative z-20 flex items-center justify-center md:max-w-[500px]'>
      <h2 className='text-center text-4xl text-white my-12'><strong>Contactame</strong></h2>
    </div>
    <div id='contact' className=" py-14  text-white">
          <form ref={form} onSubmit={handleSubmit(hSubmit)} className="mx-auto flex bg-sky-900 items-center flex-col form py-12 bg-opacity-60 xl:bg-opacity-20 backdrop-blur-sm rounded-xl w-[350px]">
              <div className='containner-contact'>
                <label className='label-contact'>Nombre
                {errors.user_name?.type==="required" && <span className='input-contact-error'>Este campo es obligatorio.</span>}
                </label> <br />
                <input {...register("user_name",{required:true,maxLength:50})} autoComplete='off' type="text" className={`input-contact ${errors.user_name?"border-violet-600":"border-[#16dcdc]"}`} placeholder='Lion El`Jhonson'/> <br />
              </div>
              <div className='containner-contact'>
                <label className='label-contact'>Email 
                {errors.user_email?.type==="required" && <span className='input-contact-error'>Este campo es obligatorio.</span>}
                {errors.user_email?.type==="pattern" && <span className='input-contact-error'>El formato de correo no es aceptable.</span>}
              </label><br />
                <input autoComplete='off' {...register("user_email",{required:true,pattern:/^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/})}  type="email" placeholder="ejemplo@gmail.com" className={`input-contact ${errors.user_email?"border-violet-600":"border-[#16dcdc]"}`} /> <br />
                </div>
              <div className='containner-contact'>
                <label className='label-contact'>Asunto
                {errors.user_affair?.type==="required" && <span className='input-contact-error'>Este campo es obligatorio.</span>}
                </label> <br />
                <input {...register("user_affair",{required:true,maxLength:50})} autoComplete='off' type="text" className={`input-contact ${errors.user_affair?"border-violet-600":"border-[#16dcdc]"}`} placeholder='Trabajo'/> <br />
              </div>
              <div className='containner-contact'>
                <label className='label-contact'>Mensaje
                {errors.message?.type==="required" && <span className='input-contact-error'>Este campo es obligatorio.</span>}
                {errors.message?.type==="minLength" && <span className='input-contact-error'>El mensaje es demaciado corto.</span>}
              </label> <br />
                <textarea {...register("message",{required:true,maxLength:300,minLength:50})} className={`scollbar-textArea resize-none input-contact h-20 ${errors.message?"border-violet-600":"border-[#16dcdc]"}`} placeholder='Me comunico para...'></textarea> <br />
                </div>
            <input className="input-contact-button" type="submit" value={"Enviar"} />
            <div className='flex gap-2 text-[#16CDC4]'>
                <a href="https://github.com/cartesm" rel='noreferrer' target='_blank'>
                  <BsGithub className='cursor-pointer'/>
                </a>
                <a href="https://www.linkedin.com/in/sebastian-cartes-8b0317279/" rel='noreferrer' target='_blank'>
                  <BsLinkedin className='cursor-pointer'/>
                </a>
                <a href="https://www.instagram.com/sebastiancartes.work/" rel='noreferrer' target='_blank'>
                  <BsInstagram className='cursor-pointer'/>
                </a>
                <a href="https://www.freelancer.com/u/sebastiankrts" rel='noreferrer' target='_blank'>
                  <SiFreelancer className='cursor-pointer'/>
                </a>
            </div>
          </form>
    </div>
    </>
  )
}

export default Contact