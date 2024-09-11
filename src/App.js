import logo from './logo.svg';
import './App.css';
import AboutPage from './aboutPage';
import ContactPage from './contactPage';
import { BrowserRouter, Routes, Route , Link} from 'react-router-dom';

// const BASENAME = "/client-side-routing"

const BASENAME = process.env.PUBLIC_URL; 

console.log(BASENAME, "this is the basename")

 

const HomePage = ()=>{
  return(
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Basic Example of how to get client side routing working on gh-pages
        </p>
        <Link
          to = "/about"
          className="App-link" 
        >
          about page
        </Link>
        <Link
          to = {"/contact"}
          className='App-link'          
        >
          contact page
        </Link>

      </header>

  );
}


function App() {
  return (
    <BrowserRouter basename ={BASENAME}>

    <div className="App">
      
        <Routes>
          <Route path= {"/"} element = {<HomePage/>}/>
          <Route path = {'/about'} element = {<AboutPage/>}/>      
          <Route path = { '/contact'}  element = {<ContactPage/>}/>
        </Routes>
     

    </div>

    </BrowserRouter>
    
  );
}

export default App;
