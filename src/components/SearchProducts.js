import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

var SearchProducts = () => {
    const[params]=useSearchParams();
    const term=params.get("q");
    const[prodslist, setprodslist] = useState([]);
useEffect(()=>
  {
    fetchproductsbyterm();
  },[term])

  var fetchproductsbyterm=async () =>
    {
        try
        {
            var resp = await fetch(`${process.env.REACT_APP_APIURL}/fetchprodsbyname/${term}`);
            if(resp.ok)
            {
                var result = await resp.json();
                if(result.statuscode===1)
                {
                    setprodslist(result.prodsdata);
                }
                else if(result.statuscode===0)
                {
                    setprodslist([]);
                }
                else if(result.statuscode===-1)
                {
                    toast.error("Error Occured");
                }    
        }
    }
        catch(e)
        {
            toast.error("Error Occured");
        }
    }


    return (
        <>
            <div className="top-brands">
                <div className="container">
                    <h2>Products</h2><br/>
                    {
                        prodslist.length>0?
                        prodslist.map((data,index)=>
                        
                    <div className="col-md-4 top_brand_left"key={index}>
                        <div className="hover14 column">
                            <div className="agile_top_brand_left_grid">

                                <div className="agile_top_brand_left_grid1">
                                    <figure>
                                        <div className="snipcart-item block" >
                                            <div className="snipcart-thumb">
                                                <Link to={`/productdetails?pid=${data._id}`}>
                                                     <img src={`uploads/${data.picture}`}height="125" alt="category"/></Link>
                                                <p>{data.prodname}</p>

                                            </div>

                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>):<h3>No Products Found</h3>
                     }
                </div>
            </div>

        </>
    )
}
export default SearchProducts;