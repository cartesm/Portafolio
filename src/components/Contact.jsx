
function Contact() {
  
  const handleSubmit =(e)=>{
    e.preventDefault();
  }

  return (
    <div className="bg-[#141535] text-white">
      <div className="flex font-sans items-center ">
      <form action="" onSubmit={handleSubmit} className="mx-auto flex flex-col gap-3 items-center min-w-[300px] rounded-lg max-w-[500px]">
          <input type="text" placeholder="Ingresa tu nombre.." className="px-2 min-w-[400px] max-w-[500px] h-8 input-contact" />
          <input type="email" placeholder="Ingresa tu correo.." className="px-2 min-w-[400px] max-w-[500px] h-8 input-contact" />
          <textarea placeholder="Ingresa el asunto.." className="min-w-[400px] max-w-[500px] h-[170px] px-2 input-contact resize-none" ></textarea>
         <input className="hover:scale-105 duration-150 cursor-pointer px-4 rounded-full h-7 text-[#141535] bg-[#0e7373] focus:bg-[#16dcdc] hover:bg-[#16dcdc]" type="submit" value={"Enviar"} />
      </form>  
      <div className="min-w-[300px] max-w-[650px] xl:block hidden">
        <img className="object-cover" src="https://apod.nasa.gov/debate/2020/Tarter100th/Slide11.JPG" alt="" />
       </div>
      </div>
      <div className="py-6">
        <h3 className="text-center text-2xl">Redes y otros.</h3>
        <div>
            {/* intagram, linkedin, github, Freelancer, wattsApp */}
          <svg xmlns="http://www.w3.org/2000/svg" width="80"viewBox="7.025 7.025 497.951 497.95"><path d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z" fill="url(#a)"/></svg>

        </div>
      </div>
    </div>
  )
}

export default Contact