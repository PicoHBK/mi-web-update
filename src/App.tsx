import Footer from "./pages/components/Footer"
import Home from "./pages/Home"
import Header from "./pages/components/Header"

function App() {

  return (
    <div className='flex flex-col items-center w-full h-full min-h-screen bg-mylight-100 px-10 gap-6'>
      <Header/>
      <Home />
      <Footer/>
    </div>
  )
}

export default App
