import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Gallery from './pages/Gallery'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contacts from './pages/Contacts'
import FAQs from './pages/FAQs' //ayaw ni tangala baskin nag ingon ug error, d mugana ang page if tangalon n siya biskan nag pula pula na 
import Guidelines from './pages/Guidelines'
import CommissionPage from './pages/CommissionPage'
import Thanks from './pages/Thanks'
import FooterDark from './components/FooterDark'


function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>

          <Route path="/Gallery" element={<Gallery/>} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/HomePage" element ={<HomePage/>} />
          <Route path="/About" element ={<About/>} />
          <Route path="/Contacts" element ={<Contacts/>} />
          <Route path="/FAQs" element ={<FAQs/>} />
          <Route path="/Guidelines" element ={<Guidelines/>} />
          <Route path="/CommissionPage" element ={<CommissionPage/>} />
          <Route path="/Thanks" element ={<Thanks/>} />
          <Route path="/FooterDark" element ={<FooterDark/>} />
          <Route path="*" element={<PageNotFound/>} />
          
          

          
        </Routes>
        </BrowserRouter>
    </div>
  )
}


export default App