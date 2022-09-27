import Header from "./Components/Header/Header";
import "./App.css";
import SimpleBottomNavigation from "./Components/BottomNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/system";
import Trending from "./Pages/Trending";
import Movies from "./Pages/Movies";
import Search from "./Pages/Search";
import Series from "./Pages/Series";
import Shows from "./Pages/Shows";
 const App = () =>{
  return (
    <BrowserRouter>
    <Header/>
      <div className="App">
      <Container maxWidth>
      <Routes>
        <Route path="/" element={<Trending/>} exact/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/series" element={<Series/>}/>
        <Route path="/shows" element={<Shows/>}/>
      </Routes>
      </Container>      
    </div>
    <SimpleBottomNavigation/>

    </BrowserRouter>
  );
}

export default App;

/////////////////////////////////////////////////////////
