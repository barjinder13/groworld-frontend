import {Link, useNavigate} from "react-router-dom";
var Footer =()=>
{
    return(
    <>
    <div className="footer">
		<div className="container">
			<div className="w3_footer_grids">
				<div className="col-md-3 w3_footer_grid">
					<h3>Contact</h3>
					
					<ul className="address">
						
						<li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">localmart13@hotmail.com</a></li>
						<li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>+91 8968862815</li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Information</h3>
					<ul className="info"> 
						{/* <li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="about.html">About Us</a></li> */}
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/contactus" className="act">Contact Us</Link></li>
						{/* <li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="faq.html">FAQ's</a></li> */}
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/Categories" className="act">Products</Link></li>
					</ul>
				</div>
				
				<div className="col-md-3 w3_footer_grid">
					<h3>Profile</h3>
					<ul className="info"> 
						{/* <li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="products.html">Store</a></li> */}
						{/* <li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="checkout.html">My Cart</a></li> */}
						
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/Login">Login</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/Signup"> Create Account </Link></li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Address</h3>
					<ul className="address"> 
						{/* <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/directcateg">Groceries</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="household.html">Household</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="personalcare.html">Personal Care</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="packagedfoods.html">Packaged Foods</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"></i><a href="beverages.html">Beverages</a></li> */}
						<li><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>Green Wood Avenue, Mithapur <span>Jalandhar, India.</span></li>
					</ul>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
		
		<div className="footer-copy">
			
			<div className="container">
				<p>© 2024 Local Mart. All rights reserved | Design by <a href="https://www.instagram.com/vivs_singh/?igshid=YmMyMTA2M2Y%3D/">Barjinder Singh</a></p>
			</div>
		</div>
		
	</div>	
	<div className="footer-botm">
			<div className="container">
				<div className="w3layouts-foot">
					<ul>
						<li><a href="https://www.facebook.com/vivs.singh.007?mibextid=LQQJ4d" className="w3_agile_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li><a href="https://x.com/Barjinderbisht/status" className="agile_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li><a href="https://www.instagram.com/vivs_singh/?igshid=YmMyMTA2M2Y%3D/" className="w3_agile_dribble"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
						
					</ul>
				</div>
				{/* <div className="payment-w3ls">	
					<img src="images/card.png" alt="" className="img-responsive"/>
				</div> */}
				<div className="clearfix"> </div>
			</div>
		</div>
    </>
    )
}
export default Footer;