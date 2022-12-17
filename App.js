import './App.css';
import Home from './Home';
import Login from './Login';
import Product from './Product';
import AboutUs from './AboutUs';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Nav from './Nav';
import Employee from './Employee';
import Fashion from './Fashion';
import Electronic from './Electronic';
import Mobiles from './Mobiles';
import Printers from './Printers';
import Laptops from './Laptops';
import Scanners from './Scanners';
import NavProduct from './NavProduct';
import ProductParam from './ProductParam';
import User from './User';
import Post from './Post';
{/*import Contact from './Contact';
import Email from './Email';
import Feedback from './Feedback';*/}
function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Home/>
       <Login/>
       <Product/>
       <Aboutus/> */}
       {/* // For browser application - browserrouter */}
       <BrowserRouter>
        <Nav/>
        {/* define the url / route for the component as it is a collection of routes - routes  */}
          <Routes>
            {/* For each compoennt define the route */}
            <Route path='/' element={App} ></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/aboutus' element={<AboutUs/>}></Route>
            <Route path='/employee' element={<Employee/>}></Route>
            <Route path='/product/fashion' element={<Fashion/>}></Route>
            <Route path='/product/electronic' element={<Electronic/>}></Route>
            <Route path='/electronic/mobile' element={<Mobiles/>}></Route>
            <Route path='/electronic/laptop' element={<Laptops/>}></Route>
            <Route path='/electronic/printer' element={<Printers/>}></Route>
            <Route path='/electronic/scanner' element={<Scanners/>}></Route>
            <Route path="/navproduct" element={<NavProduct/>}></Route>
            <Route path="/product/:child" element={<ProductParam/>}></Route>
            <Route path="/user" element={<User/>}></Route>
            <Route path="/post" element={<Post/>}></Route>
            {/*<Route path="/contact" element={<Contact/>}></Route>
            <Route path="/contact/email" element={<Email/>}></Route>
      <Route path="/contact/feedback" element={<Feedback/>}></Route>*/}    
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}



export default App;
