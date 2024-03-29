import{Route, Routes} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import SearchMember from './components/SearchMember';
import ViewMembers from './components/ViewMembers';
import ManageCategory from './components/ManageCategory';
import ManageSubCategory from './components/ManageSubCategory';
import ManageProduct from './components/ManageProduct';
import UpdateSubCategory from './components/UpdateSubCategory';
import UpdateProduct from './components/UpdateProduct';
import AdminHome from './components/AdminHome';
import CreateAdmin from './components/CreateAdmin';
import Categories from './components/Categories';
import SubCategories from './components/SubCategories';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import ChangePassword from './components/ChangePassword';
import AdminHeader from './components/AdminHeader';
import ShowCart from './components/ShowCart';
import Checkout from './components/Checkout';
import OrderSummary from './components/OrderSummary';
import OrderItems from './components/OrderItems';
import UpdateStatus from './components/UpdateStatus';
import ViewOrders from './components/ViewOrders';
import SearchProducts from './components/SearchProducts';
import ViewUserOrders from './components/ViewUserOrders';
import ContactUs from './components/ContactUs';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import WeatherInfo from './components/WeatherInfo';
import MyCookies from './components/MyCookies';
import DirectCateg from './components/DirectCateg';
import AddProductPics from './components/AddProductPics';





var AppRoutes=()=>
{
  
  return (
   <Routes>
   
   {/* <Route path="/" element={<Navigate to="/Home"/>} />  */}
 
     <Route path="/" element={<Home/>} /> 
     <Route path="/home" element={<Home/>}/>
     <Route path="/Signup" element={<Signup/>} />
     <Route path="/Login" element={<Login/>} />
     <Route path="/searchmember" element={<SearchMember/>} />
     <Route path="/viewmembers" element={<ViewMembers/>} />
     <Route path="/ManageCategory" element={<ManageCategory/>} />
     <Route path="/ManageSubCategory" element={<ManageSubCategory/>}/>
     <Route path="/ManageProduct" element={<ManageProduct/>} />
     <Route path="/UpdateSubCategory" element={<UpdateSubCategory/>}/>
     <Route path="/UpdateProduct" element={<UpdateProduct/>}/>
     <Route path="/adminpanel" element={<AdminHome/>}/>
     <Route path="/createadmin" element={<CreateAdmin/>}/>

      <Route path="/categories" element={<Categories/>}/>
      <Route path="/subcategories" element={<SubCategories/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/productdetails" element={<ProductDetails/>}/>
      <Route path="/changepassword" element={<ChangePassword/>}/>
      <Route path="/adminheader" element={<AdminHeader/>}/>
      <Route path="/showcart" element={<ShowCart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/ordersummary" element={<OrderSummary/>}/>
      <Route path="/orderitems" element={<OrderItems/>}/>
      <Route path="/vieworders" element={<ViewOrders/>}/>
      <Route path="/updatestatus" element={<UpdateStatus/>}/>
      <Route path="/searchproducts" element={<SearchProducts/>}/>
      <Route path="/orderhistory" element={<ViewUserOrders/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      <Route path="/resetpassword" element={<ResetPassword/>}/>
      <Route path="/weatherinfo" element={<WeatherInfo/>}/>
      <Route path="/mycookies" element={<MyCookies/>}/>
      <Route path="/ditectcateg" element={<DirectCateg/>}/>
      <Route path="/addproductpics" element={<AddProductPics/>}/>
      
      
     
   </Routes>
  
  );
}

export default AppRoutes;
