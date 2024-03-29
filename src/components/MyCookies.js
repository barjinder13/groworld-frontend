
import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
var MyCookies = () => {
	
    const [data, setdata] = useState();
    const cookieobj = new Cookies();
    var savedata=()=>
    {
        cookieobj.set("usercookie","vivek",{maxAge: 60*60*24*7});
    }
    var readdata=()=>
    {
        if(cookieobj.get("usercookie")===undefined)
        {
            setdata("cookie not Available");
        }
        else
        {
            setdata(cookieobj.get("usercookie"));
        }
    }
    var deldata=()=>
    {
        cookieobj.remove("usercookie");
    }

    // useEffect(()=>
    // {
    //     deldata();
    // },[readdata])

	return (
		<>
			<div className="breadcrumbs">
				<div className="container">
					<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
						<li><Link to="/Home"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
						<li className="active"> Cookies </li>
					</ol>
				</div>
			</div>

			<div className="login">
				<div className="container">
					<h2>Cookies Model </h2>

					<div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
						
							{/* <input type="text" name="city" onChange={(e)=>setcity(e.target.value)} placeholder="city" required=" " /> */}
							<input type="submit" name="btn" value="Save" onClick={savedata}/>
							<input type="submit" name="btn" value="Get" onClick={readdata}/>
							<input type="submit" name="btn" value="Delete" onClick={deldata}/>
                            {data}
                           <br/>
						
					</div>
				</div>
			</div>
		</>
	)
}
export default MyCookies;