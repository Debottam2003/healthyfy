import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test from './Test.jsx'
import Navber from './Components/Navbar.jsx'
import Top from './Components/Top.jsx'
import Footer from "./Components/Footer";
createRoot(document.getElementById('root')).render(
  <>
    {/* <h1>Healthyfy</h1> */}
    <Test />
     {/* <Navber />
    <div>
    <Top></Top>
    <App />
    </div>
    <Footer></Footer> */}
  </>
)
