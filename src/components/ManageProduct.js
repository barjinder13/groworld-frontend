import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
var ManageProduct=()=>
{

    const [cat,setcat] = useState("");
    const [subcat,setsubcat] = useState("");
    const [pname,setpname] = useState();
    const [rate,setrate] = useState();
    const [dis,setdis] = useState();
    const [stock,setstock] = useState();
    const [descrip,setdescrip] = useState();
    const [feat,setfeat] = useState();
    const [pic,setpic] = useState(null);

    const [allcat,setallcat] = useState([]);
    const [subcatlist,setsubcatlist] = useState([]);

    const[prodslist, setprodslist] = useState([]);
    const navigate = useNavigate();

    var fetchcategories=async () =>
    {
        try
        {
            var resp = await fetch(`${process.env.REACT_APP_APIURL}/fetchallcat`);
            if(resp.ok)
            {
                var result = await resp.json();
                if(result.statuscode===1)
                {
                    setallcat(result.catdata);
                }
                else if(result.statuscode===0)
                {
                    toast.warning("No Category available");
                }
                else
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

    var onadd =async()=>
    {

        const formData = new FormData();
        formData.append("catid",cat);
        formData.append("scid",subcat);
        formData.append("prodname",pname);
        formData.append("rate",rate);
        formData.append("discount",dis);
        formData.append("stock",stock);
        formData.append("descrip",descrip);
        formData.append("featured",feat);

        if(pic!==null)
        {
            formData.append('prodpic',pic);
        }

        try {
            var resp = await fetch(`${process.env.REACT_APP_APIURL}/saveproducts`,
            {
                method:"post",
                body:formData
            })
            if (resp.ok) {
                var result = await resp.json();
                if (result.statuscode===1)
                {
                    toast.success("Product Added Successfully");
                    fetchproductsbysubcat();
                }
                else if (result.statuscode===0)
                {
                   toast.error("Product not Added");
                }
                else
                {
                    toast.error("Error Occured");
                }
            }
        }
        catch (e)
        {
            toast.error("Error Occured");
        }
    }
    
    
    useEffect(()=>
    {
        fetchcategories();
    },[])
  useEffect(()=>
  {
    setsubcatlist([]);
    setprodslist([]);
    if(cat!=="")
    {
        fetchsubcat();
    }
  },[cat])
  useEffect(()=>
  {
    setprodslist([]);
    if(subcat!=="")
    {
        fetchproductsbysubcat();
    }
  },[subcat])
  
  var fetchproductsbysubcat=async () =>
    {
        try
        {
            var resp = await fetch(`${process.env.REACT_APP_APIURL}/fetchproductsbysubcat/${subcat}`);
            if(resp.ok)
            {
                var result = await resp.json();
                if(result.statuscode===1)
                {
                    setprodslist(result.prodsdata);
                }
                else if(result.statuscode===0)
                {
                    toast.warning("No Product Available");
                }
                else
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
  var fetchsubcat=async () =>
    {
        try
        {
            var resp = await fetch(`${process.env.REACT_APP_APIURL}/fetchsubcat/${cat}`);
            if(resp.ok)
            {
                var result = await resp.json();
                if(result.statuscode===1)
                {
                    setsubcatlist(result.subcatdata);
                }
                else if(result.statuscode===0)
                {
                    toast.warning("No Sub Category available");
                }
                else
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
var onupdate=(pid)=>
{
    // navigate(`/updatesubcategory?subcatid=${scid}`);
    navigate({
        pathname:'/updateproduct',
        search: `?prodid=${pid}`,
    });
}
var ondel=async(id)=>
{
    var ucchoice = window.confirm("Are you sure to delete?");
    if (ucchoice===true)
    {
        var resp = await fetch(`${process.env.REACT_APP_APIURL}/deleteproduct/${id}`,
        {
            method:"delete"
        })
        if(resp.ok)
        {
            var result =await resp.json();
            if(result.statuscode===1)
            {
                toast.success("Product Deleted Successfully");
                fetchproductsbysubcat();
            }
            else if(result.statuscode===0)
            {
                toast.info("Product not Deleted");
            }
        }
        else
        {
            toast.error("Error Occured");
        }
    }
}
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                        <li><Link to="/"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
                        <li className="active">Manage Product</li>
                    </ol>
                </div>
            </div>

            <div className="login">
                <div className="container">
                    
                                <h2>Manage Product</h2><br/>

                                <div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
                                    
                                <select name="cat" className="form-control" onChange={(e)=>setcat(e.target.value)}>
                                    <option value="">Choose Category</option>
                                    {
                                        allcat.map((cat,i)=>
                                        <option value={cat._id} index={i}>{cat.catname}</option>
                                        )
                                    }

                                </select><br/>
                                <select name="subcat" className="form-control" onChange={(e)=>setsubcat(e.target.value)}>
                                    <option value="">Choose Sub Category</option>
                                    {
                                        subcatlist.map((data,i)=>
                                        <option value={data._id} index={i}>{data.subcatname}</option>
                                        )
                                    }

                                </select><br/>

                                <input type="text" name="pname" onChange={(e) => setpname(e.target.value)} placeholder="Product Name" required=" " /><br/>

                                <input type="text" name="rate" onChange={(e) => setrate(e.target.value)} placeholder="Rate" required=" " /><br/>

                                <input type="text" name="dis" onChange={(e) => setdis(e.target.value)} placeholder="Discount" required=" " /><br/>

                                <input type="text" name="stock" onChange={(e) => setstock(e.target.value)} placeholder="Stock" required=" " /><br/>

                                <input type="text" name="descp" onChange={(e) => setdescrip(e.target.value)} placeholder="Discription" required=" " /><br/>

                                Featured <label><input type="radio" name="featured" value="yes" onChange={(e)=> setfeat(e.target.value)}/>Yes</label>

                                 <label><input type="radio" name="featured" value="no" onChange={(e) => setfeat(e.target.value)}/>No</label><br/>

                                 <br/>  <input type="file" name="ppic" onChange={(e)=>setpic(e.target.files[0])}/>
                                <input type="submit" name="btn" value="Add" onClick={onadd} />
                                </div>
                            {
                        prodslist.length>0?
                            <div>
                                <h2>Added Products</h2><br />
                                <table className="timetable_sub">
                                    <tbody>
                                        <tr>
                                            <th>Picture</th>
                                            <th>Product Name</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                        {
                                            prodslist.map((data,i) =>
                                                <tr key={i}>
                                                    <td><img height='75' alt="Category" src={`uploads/${data.picture}`} /></td>
                                                    <td>{data.prodname}</td>
                                                    <td><button className="btn btn-primary" onClick={() => onupdate(data._id)}>Update</button></td>
                                                    <td><button className="btn btn-danger" onClick={() => ondel(data._id)}>Delete</button></td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div> :null
                    }
                            </div> 

                   
            </div>
        </>
    )
}
export default ManageProduct;