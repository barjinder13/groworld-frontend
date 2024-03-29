import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

var OrderSummary = () => {

   
    const [orderdata, setorderdata] = useState({});
    const {isLoggedIn, uname}=useSelector((state)=>state.auth)


    useEffect(() => {
        if (isLoggedIn) 
            fetchorderdetails();
        
    }, [])

    var fetchorderdetails = async () => {

        try {
           
            var resp = await fetch(`${process.env.REACT_APP_APIURL}/fetchorderdetails/${uname}`)
            if (resp.ok) {
                var result = await resp.json();
                if (result.statuscode === 0)
                 {
                    toast.error("unable to fetch order details");
                }
                else if (result.statuscode === 1) {
                    setorderdata(result.orderdata)
                }
            }
        }
        catch (e) {
            toast.error("Error Occured Fetching Cart " + e);
        }
    }

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                        <li><Link to="/"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
                        <li className="active">Order Summary</li>
                    </ol>
                </div>
            </div>

            <div className="top-brands">
                <div className="container">
                    <h3>Thanks for Shopping on our Website.</h3><br/>
                    <h3>Your order number is{orderdata._id}</h3><br/>
                    <h3>Current Status is{orderdata.status}</h3><br/>    
                    </div>
                </div>
        </>
    )
}
export default OrderSummary;