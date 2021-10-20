import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Singup from './components/Singup/Singup';

function App() {
  return (
    // Router set 
    <BrowserRouter>
      {/* header load in all page  */}
      <Header></Header>
      <Switch>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        {/* <Route exact path="/about">
          <About></About>
        </Route> */}
        <Route exact path="/services">
          <Services></Services>
        </Route>
        <Route exact path="/doctor/:doctorId">
          <DoctorDetails></DoctorDetails>
        </Route>
        {/* <Route exact path="/teachers">
          <Teachers></Teachers>
        </Route> */}
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/doctor/">
          <Login></Login>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/singup">
          <Singup></Singup>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      {/* footer load in all page */}
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
