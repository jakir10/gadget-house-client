import { Route, Routes } from 'react-router-dom';
import './App.css';
import ManageInventories from './ManageInventories/ManageInventories';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import InventoriesDetail from './Pages/InventoriesDetail/InventoriesDetail';
import AddItem from './Pages/Login/AddItem/AddItem';
import Login from './Pages/Login/Login/Login';
import ManageItems from './Pages/Login/ManageItems/ManageItems';
import Myitem from './Pages/Login/MyItem/Myitem';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <InventoriesDetail></InventoriesDetail>
          </RequireAuth>
        }></Route>
        <Route path='/manageinventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        {/* private routes after login user */}
        <Route path='additem' element={<AddItem></AddItem>} ></Route>
        <Route path='myitem' element={<Myitem></Myitem>} ></Route>
        <Route path='manageitem' element={<ManageItems></ManageItems>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
