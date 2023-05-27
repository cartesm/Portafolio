import Glider from "react-glider"
import 'glider-js/glider.min.css';
function Carrousel() {

  const data={
    description:"",
    exp:{
      max:0,
      value:0,
      color:""
    }
  }

  return (
    <div className="bg-[#141535] text-white py-12">
      {/* titulo */}
      <div>
        <h3 className="text-center text-5xl font-semibold">Habilidades</h3>
      </div>
      {/* carrousel */}
      <Glider className="py-12" draggable onSlideVisible={true} slidesToScroll={1} scrollLock slidesToShow={4} rewind >
        <div>
          <img src="https://images-na.ssl-images-amazon.com/images/I/41YRFVtUM8L._AC_UL600_SR600,600_.jpg" alt="" width={200}/>
        </div>
        <div>
          <img src="https://images-na.ssl-images-amazon.com/images/I/41YRFVtUM8L._AC_UL600_SR600,600_.jpg" alt="" width={200}/>
        </div>
        <div>
          <img src="https://images-na.ssl-images-amazon.com/images/I/41YRFVtUM8L._AC_UL600_SR600,600_.jpg" alt="" width={200}/>
        </div>
        <div>
          <img src="https://images-na.ssl-images-amazon.com/images/I/41YRFVtUM8L._AC_UL600_SR600,600_.jpg" alt="" width={200}/>
        </div>
        <div>
          <img src="https://images-na.ssl-images-amazon.com/images/I/41YRFVtUM8L._AC_UL600_SR600,600_.jpg" alt="" width={200}/>
        </div>
        <div>
          <img src="https://images-na.ssl-images-amazon.com/images/I/41YRFVtUM8L._AC_UL600_SR600,600_.jpg" alt="" width={200}/>
        </div>
        <div>
          <img src="https://images-na.ssl-images-amazon.com/images/I/41YRFVtUM8L._AC_UL600_SR600,600_.jpg" alt="" width={200}/>
        </div>
      </Glider>
    {/* mas info */}
      <div className="flex flex-col md:flex-row mx-auto gap-4 items-center justify-center text-lg font-sans">
          <p className="min-w-[300px] max-w-[500px] text-center indent-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quas autem laborum reprehenderit perferendis excepturi fugiat pariatur debitis eligendi rem, esse possimus dolorum ipsa recusandae facilis porro? Quae, cum ducimus!
          </p>
          <div className="flex items-center">
            <span>Experiencia</span>
            <progress max={100} value={50}></progress>
          </div>
      </div>
    </div>
  )
}

export default Carrousel