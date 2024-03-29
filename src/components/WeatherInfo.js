import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
var WeatherInfo = () => {
	const [city, setcity] = useState();
	const [wdata, setwdata] = useState({});
	const [flag, setflag] = useState();
	
var onsearch = async (e) => {
		e.preventDefault();
		try {
			var resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a43d8f1f4207c29eb71c6cf44656e113&units=metric`)

			if (resp.ok) 
				 {
                    var result = await resp.json();
					setwdata(result)
                    setflag(true);
				
                 }
        }
		catch (e) {
			toast.error("Error occured");
		}
	}
	return (
		<>
			<div className="breadcrumbs">
				<div className="container">
					<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
						<li><Link to="/Home"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
						<li className="active">Weather Info</li>
					</ol>
				</div>
			</div>

			<div className="login">
				<div className="container">
					<h2>Search Weather</h2>

					<div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
						<form name="form1" method="post" onSubmit={onsearch}>
							<input type="text" name="city" onChange={(e)=>setcity(e.target.value)} placeholder="city" required=" " />
                             
							<input type="submit" name="btn" value="Show Weather" /><br/>
                            {
                                flag?
                                <div>
                                    current Temp:{wdata.main.temp}<br/>
                                    humidity:{wdata.main.humidity}<br/>
                                    wind Speed:{wdata.wind.speed}
                                </div>:null
                            }
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
export default WeatherInfo;