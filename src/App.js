import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import {Box} from '@mui/material'
import DataProvider from './context/DataProvider';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Detailview from './components/details/Detailview';
import Cart from './components/Cart/Cart';


function App() {

  return (
    <DataProvider>
    <BrowserRouter>
      <Header/>
      <Box style={{marginTop:55}}>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<Detailview/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </Box>
    </BrowserRouter>
    </DataProvider>
  );
} 

export default App;
