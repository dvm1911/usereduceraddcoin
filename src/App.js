import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/homePage/home';
import Signup from './components/signUp/signUp';
import AddCoin from './components/addCoin/addCoin';
import LogIn from './components/login/login'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import AdminPage from './components/admin/mainPage/adminpage'
import EditCoinInfo from './components/admin/editPage/editcoinInfo'
import EditUser from './components/editUser/editUser'
import CoinInfo from './components/coinInfo/coinInfo';

function App() {
  return (
    <>
    <Header />
    <Routes>

      <Route path='/' element={<Home />}>    
      </Route>

      <Route path="/signup" element={<Signup />}>    
      </Route>

      <Route path="/addcoin" element={<AddCoin />}>    
      </Route>

      <Route path="/login" element={<LogIn />}>
      </Route>

      <Route path="/updateDetails/:id" element={<EditUser />}>
      </Route>

      <Route path="/adminPanel" element={<AdminPage />}>
      </Route>

      <Route path="/updateCoin/:id" element={<EditCoinInfo />}>
     </Route>

     <Route path="/coininfo/:id" element={<CoinInfo />}>
      </Route>

    </Routes>
    <Footer />
    </>
  );
}

export default App;



