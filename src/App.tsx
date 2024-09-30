import { useReadingProgress } from "./hooks/useReadingProgress";
import Footer from "./pages/components/Footer";
import RoutesWeb from "./route/RoutesWeb";

function App() {
  const completion = useReadingProgress();

  return (
    <div className="flex flex-col items-center w-full h-full min-h-screen bg-mylight-100 px-10 gap-6 overflow-y-auto">
  <span
    id="progress-bar"
    style={{
      transform: `translateX(${completion - 100}%)`,
    }}
    className={`fixed top-0 left-0 w-full transition-transform duration-150 h-1 bg-gradient-to-r from-myprim-500 via-mysec-400 to-blue-400 z-50`}
  />

  <RoutesWeb />
  <Footer />
</div>

  );
}

export default App;
