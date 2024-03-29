import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../reducers/authSlice";


var ChangePassword = () => {
	const [currpass, setcurrpass] = useState();
	const [newpass, setnewpass] = useState();
	const [cnewpass, setcnewpass] = useState();
	const { uname } = useSelector((state) => state.auth)
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [verrors, setverrors] = useState({});
	var validateForm=()=>
	{
		const errors={};
		if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}/.test(newpass))    // password validation
		{
			errors.password ='Password must contain at least 1 uppercase, 1 number, 1 special character, and be at least 8 characters long';
		}
		setverrors (errors);
		if(Object.keys(errors).length>0)
		{
			return false
		}
		else
		{
			return true
		}

		// return object.keys(errors).length !==0? false : true;
	}

	var onsubmit = async (e) => {
		e.preventDefault();
		if (validateForm() === true)
			 {
		if (newpass === cnewpass) {
			try {
				var apidata = { uname, currpass, newpass };
				var resp = await fetch(`${process.env.REACT_APP_APIURL}/changepassword`,
					{
						method: "put",
						body: JSON.stringify(apidata),
						headers: { 'Content-type': 'application/json' }
					})

				if (resp.ok) {
					var result = await resp.json();
					if (result.statuscode === 1) {
						toast.success("Password changed Successfully");
						dispatch(logout())
						sessionStorage.clear();
						navigate("/login");
					}
					else if (result.statuscode === -2) {
						toast.error("Incorrect Password");
					}
					else {
						toast.error("Error occured, try again");
					}

				}
			}

			catch (e) {
				toast.error("Error occured");
			}
		}
		else {
			toast.error("New Password and Confirm new Password doesn't match")
		}
	}
}
	return (
		<>
			<div className="breadcrumbs">
				<div className="container">
					<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
						<li><Link to="/Home"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
						<li className="active">Change Password</li>
					</ol>
				</div>
			</div>

			<div className="login">
				<div className="container">
					<h2>Change Password</h2>

					<div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
						<form name="form1" method="post" onSubmit={onsubmit}>

							<input type="password" name="pass" onChange={(e) => setcurrpass(e.target.value)} placeholder="Current Password" required="" />

							<input type="password" name="pass" onChange={(e) => setnewpass(e.target.value)} placeholder="New Password" required="" />
							{verrors.password?<span>{verrors.password}</span>:null}

							<input type="password" name="pass" onChange={(e) => setcnewpass(e.target.value)} placeholder="Confirm New Password" required="" />


							<input type="submit" name="btn" value="Change Password" />
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
export default ChangePassword;