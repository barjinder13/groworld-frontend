
import { Link} from "react-router-dom";

var AdminHome = () => {
	return (
		<>
			<div className="top-brands">
				<div className="container">
					<h2>Create Admin</h2>
                    <h3><Link to="/ManageCategory">Manage Category</Link></h3>
                    <h3><Link to="/ManageSubCategory">Manage Sub Category</Link></h3>
                    <h3><Link to="/ManageProduct">Manage Product</Link></h3>
                    <h3><Link to="/createadmin">Create Admin</Link></h3>
					</div>
				</div>
		
		</>
	)
}
export default AdminHome;