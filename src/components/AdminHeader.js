
import {Link, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../reducers/authSlice";
import Cookies from "universal-cookie";
var AdminHeader = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cookieobj = new Cookies();
    var onlogout=()=>
    {
        dispatch(logout())
        sessionStorage.clear();
        navigate("/login");
        cookieobj.remove("usercookie");
    }
    return (
        <>
            <div className="agileits_header">
                <div className="container">
                    <div className="w3l_offers">
                        <p> Welcome Admin</p>
                    </div>
                    <div className="agile-login">
                
                          <ul>
                            <li><Link to="/ChangePassword"> Change password </Link> </li>
                            <li><button className="btn btn-primary" onClick={onlogout}>Logout</button> </li>
                        </ul>
                    
                    </div>
                   
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
                        <form action="#" method="post">
                            <input type="search" name="Search" placeholder="Search for a Product..." required="" />
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
                            <li><Link to="/adminpanel" className="act">Home</Link></li>
                                <li className="dropdown">
                                <a href="#" className="dropdown-toogle" data-toggle="dropdown">Manage<b className="caret"></b></a>
                                <ul className="dropdown-menu multi-column columns-3">
                                    <div className="row">
                                        <div className="multi-gd-img">
                                            <ul className="multi-column-dropdown">
                                                <h6>Manage All</h6>
                                                <li><Link to="/ManageCategory" className="act">Category</Link></li>
                                                
                                                <li><Link to="/ManageSubCategory" className="act">Sub Category</Link></li>
                                                <li><Link to="/ManageProduct" className="act">Product</Link></li>
                                                <li><Link to="/createadmin" className="act">Create Admin</Link></li>

                                            </ul>
                                        </div>
                                    </div>
                                    </ul>
                                    </li>

                                    <li className="dropdown">
                                <a href="#" className="dropdown-toogle" data-toggle="dropdown">View<b className="caret"></b></a>
                                <ul className="dropdown-menu multi-column columns-3">
                                    <div className="row">
                                        <div className="multi-gd-img">
                                            <ul className="multi-column-dropdown">
                                            
                                                <li> <Link to="/viewmembers" className="act">List of Members</Link></li>
                                                
                                                <li><Link to="/searchmember" className="act">Search Member</Link></li>
                                                
                                                <li><Link to="/vieworders" className="act">orders</Link></li>
                                            
                                            </ul>
                                        </div>
                                    </div>
                                    </ul>
                                    </li>                       
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default AdminHeader;