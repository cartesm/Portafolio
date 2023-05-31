import {Carrousel,Header,Title,Description,Contact,Projects, Footer} from "./components/main" 

function App() {

  return (
    <main className=" max-w-[1920px] max-h-[1200px]">
      <Header/>
      <Title/>
      <Description/>
      <Carrousel/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
