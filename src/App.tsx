import Footer from "./pages/components/Footer"
import RoutesWeb from "./route/RoutesWeb"

function App() {

  return (
    <div className='flex flex-col items-center w-full h-full min-h-screen bg-mylight-100 px-10 gap-6'>
      <RoutesWeb />
      <Footer/>
    </div>
  )
}

export default App
