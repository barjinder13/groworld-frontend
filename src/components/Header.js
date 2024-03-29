import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/authSlice";


var Header = () => {
    const navigate = useNavigate();
    const [term, setterm] = useState();
    const cookieobj = new Cookies();

    const {isLoggedIn,personName} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    var onlogout=()=>
    {
        // setuserinfo(null);
        dispatch(logout())
        sessionStorage.clear();
        navigate("/login");
        cookieobj.remove("usercookie");
    }
    var gotocart=()=>
    {
        navigate("/showcart");
    }
    var onsearch=(e)=>
    {
        e.preventDefault();
        navigate(`/searchproducts?q=${term}`);
    }
    return (
        <>
            <div className="agileits_header">
                <div className="container">
                    <div className="w3l_offers">
                        <p> Welcome <b>{personName}</b></p>
                    </div>
                    <div className="agile-login">
                        {
                            isLoggedIn===false?
                        <ul>
                            <li><Link to="/Signup"> Create Account </Link> </li>
                            <li><Link to="/Login">Login</Link> </li>
                          </ul>:
                          <ul>
                            <li><Link to="/orderhistory">Order History </Link> </li>
                            <li><Link to="/ChangePassword"> Change Password </Link> </li>
                            <li><button className="btn btn-primary" onClick={onlogout}>Logout</button> </li>
                        </ul>
                        }
                    </div>
                    {
                        isLoggedIn===true?
                    <div className="product_list_header">
                        
                            <button className="w3view-cart" type="submit" onClick={gotocart} name="submit" value=""><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
                    
                    </div>:null
                    }
                    <div className="clearfix"> </div>
                </div>
            </div>

            <div className="logo_products">
                <div className="container">
                    <div className="w3ls_logo_products_left1">
                        <ul className="phone_email">
                            <li><i className="fa fa-phone" aria-hidden="true"></i>Order online or call us : (+91) 8968 862 815</li>

                        </ul>
                    </div>
                    <div className="w3ls_logo_products_left">
                        <h1><a href="/">Local Mart</a></h1>
                    </div>
                    <div className="w3l_search">
                        <form name="form1" onSubmit={onsearch}>
                            <input type="search" name="q"  placeholder="Search for a Product..." required="" onChange={(e)=>setterm(e.target.value)}/>

                            <button type="submit" className="btn btn-default search" aria-label="Left Align">
                                <i className="fa fa-search" aria-hidden="true"> </i>
                            </button>
                            <div className="clearfix"></div>
                        </form>
                    </div>

                    <div className="clearfix"> </div>
                </div>
            </div>
            {/* navigation  */}
            <div className="navigation-agileits">
                <div className="container">
                    <nav className="navbar navbar-default">

                        <div className="navbar-header nav_2">
                            <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                            <ul className="nav navbar-nav">
                                <li><Link to="/" className="act">Home</Link></li>
                                <li><Link to="/Categories" className="act">Products</Link></li>
                                <li><Link to="/contactus" className="act">Contact Us</Link></li>
                               
                               
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Header;