import './App.css';
import Home from './componets/pages/Home';
import About from './componets/pages/About';
import Approach from './componets/pages/Approach';
import Services from './componets/pages/Services';
import Contact from './componets/pages/Contact';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './componets/pages/Header';
import Footer from './componets/pages/Footer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './componets/pages/GlobalStyle';
import Portfolio from './componets/pages/Portfolio';
import Client from './componets/pages/Client';
import EventImages from './componets/pages/EventImages';
import PopUpImage from './componets/pages/PopUpImage';
import EventDetails from './componets/pages/EventDetails';
import ManpowerSupplyDetails from './componets/pages/ManpowerSupplyDetails';
import EmployeeTransportDetails from './componets/pages/EmployeeTransportDetails';
import CorporateCateringDetails from './componets/pages/CorporateCateringDetails';



function App() {
  const theme = {
    colors:{
    heading: "#000",
    text:"#fff",
    bacground:"#ff0000",
    btn:"#808080",
    hovercol:"#c20000"
    },
    media:{
      mobile: "768px", tab: "998px" },
    };
  
  return (
    <ThemeProvider theme={theme}>
 <GlobalStyle/>
  <BrowserRouter basename="/SBE_WEBSITE">
   <Header/>
   <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/about" element = {<About/>}/>
    <Route path="/approach" element = {<Approach/>}/>
    <Route path="/services" element = {<Services/>}/>
    <Route path="/portfolio" element = {<Portfolio/>}/>
    <Route path="/client" element = {<Client/>}/>
    <Route path="/contact" element = {<Contact/>}/>
    <Route path="/manpower-supply" element = {<ManpowerSupplyDetails/>}/>
    <Route path="/employee-transport" element = {<EmployeeTransportDetails/>}/>
    <Route path="/corporate-catering" element = {<CorporateCateringDetails/>}/>
    <Route path="/eventsorignal" element = {<EventImages/>}/>
    <Route path="/eventsloading" element = {<EventDetails/>}/>
    <Route path="/events" element = {<EventDetails/>}/>
    <Route path="/clients" element = {<PopUpImage/>}/>

    
   </Routes>
 <Footer/>
   </BrowserRouter>
   </ThemeProvider>


  );
}

export default App;

