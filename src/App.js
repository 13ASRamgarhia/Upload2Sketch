import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ErrorPage from './Components/404';
import About from './Components/About';
import LoadingBar from 'react-top-loading-bar';
import { useContext } from 'react';
import Signup from './Components/Signup';
import Login from './Components/Login';
import loginContext from './Context/loginContext';
import MovieHub from './Components/MovieHub';
import GPreferences from './Components/GPreferences';
import MovieDetail from './Components/MovieDetail';
import Main from './Components/Main';

function App() {
  const context = useContext(loginContext)
  const { progress, setProgress } = context

  return (
    <div className="bg-bgColor min-h-screen min-w-[100%]">
      <Navbar />
      <LoadingBar
        height="3px"
        color="#ff0000"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/About" element={ <About /> } />
        <Route exact path="/Signup" element={ <Signup /> } />
        <Route exact path="/Login" element={ <Login /> } />
        <Route exact path="/MovieHub" element={ <MovieHub /> } />
        <Route exact path="/Prefrences" element={ <GPreferences />} />
        <Route exact path="/MovieDetail" element={ <MovieDetail />} />
        <Route exact path="/Main" element={ <Main />} />
        <Route exact path="*" element={ <ErrorPage /> } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
