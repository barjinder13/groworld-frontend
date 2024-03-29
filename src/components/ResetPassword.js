import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";




var ResetPassword = () => {
    const [myparams] = useSearchParams();
    const token = myparams.get("token");

	const [uname, setuname] = useState();
	const [newp, setnewp] = useState();
	const [cnewp, setcnewp] = useState();
	const [flag, setflag] = useState();
	const [msg, setmsg] = useState();
	const navigate = useNavigate();
	const [verrors, setverrors] = useState({});
	var validateForm=()=>
	{
		const errors={};
		if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}/.test(newp))    // password validation
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
	}

useEffect(()=>
{
    fetchdata();
},[])
var fetchdata=async () =>
{
    try
    {
        var resp = await fetch(`${process.env.REACT_APP_APIURL}/checktoken?token=${token}`);
        if(resp.ok)
        {
            var result = await resp.json();
            if(result.statuscode===1)
            {
                setuname(result.username);
				setflag(true);
            }
           
            else 
            {
                setmsg(result.msg);
                setflag(false);
            }    
    }
}
    catch(e)
    {
        toast.error("Error Occured");
    }
}

var onSubmit = async (e) => {
		e.preventDefault();
		if (validateForm() === true)
			 {
		if(newp===cnewp)
        {
		try {
			var apidata = {newp, cnewp};
			var resp = await fetch(`${process.env.REACT_APP_APIURL}/resetpassword/${uname}`,
			{
				method: "put",
				body: JSON.stringify(apidata),
				headers: { 'Content-type': 'application/json' }
			})
// put api call, send username, password,encrypt password in api and update the record

			if (resp.ok) {
				var result = await resp.json();
				if (result.statuscode===1) {
                    toast.success("Password changed Successfully");
                    navigate("/login");
				}
                 else{
                    toast.error("Error occured, try again");
                 }
            }
        }
			
		catch (e) {
			toast.error("Error occured");
		}
	}
	else
	{
		toast.error("New Password and Confirm Password doesnot Match");
	}


}
}
	return (
		<>
			<div className="breadcrumbs">
				<div className="container">
					<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
						<li><Link to="/Home"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
						<li className="active">Reset Password</li>
					</ol>
				</div>
			</div>

			<div className="login">
				<div className="container">
                    {
                    flag?
                    <>
					<h2>Reset Password</h2>

					<div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
						<form name="form1" method="post" onSubmit={onSubmit}>
							
							<input type="password" name="newp" onChange={(e)=>setnewp(e.target.value)} placeholder="New Password Required" required=""/>
							{verrors.password?<span>{verrors.password}</span>:null}

							<input type="password" name="cnewp" onChange={(e)=>setcnewp(e.target.value)} placeholder="The New Password" required=""/>

						 
							<input type="submit" name="btn" value="Submit" />
						</form>
					</div>
                    </>:<h2>{msg}</h2>
                    }
				</div>
			</div>
		</>
	)
}
export default ResetPassword;