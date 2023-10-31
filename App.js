import './App.css';
import BookingForm from './pages/bookingForm/BookingForm';
import LogInPage from './pages/login/LogIn';
import WelcomePage from './pages/welcome/WelcomePage';
import FindDoctor from './routes/findDoctor/findDrpara';
import BookingSearch from './routes/findDoctor/findDrSearch';
//import Navbar from './pages/navbar/NavbarPage';

function App() {
  return (
    <div className="App">
      
      <WelcomePage/>
      <BookingForm/>
      <LogInPage/>
      <FindDoctor/>
      <BookingSearch/>
    </div>
  );
}

export default App;
