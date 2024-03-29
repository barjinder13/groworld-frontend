var AppRouter = () => {
    return (
        <>

            import Home from './Home';
            import Aboutus from './Aboutus';
            import Products from './products';
            import Search from './Search';
            import Contactus from './Contactus';
            import Feedback from './Feedback';
            import Login from './Login';
            import Signup from './Signup';
            import Details from './Details';
            import Result from './Result';


            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Aboutus" element={<Aboutus />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Search" element={<Search />} />
                <Route path="/Contactus" element={<Contactus />} />
                <Route path="/Feedback" element={<Feedback />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Details" element={<Details />} />
                <Route path="/Result" element={<Result />} />
            </Routes>
        </>
    )
}
export default AppRouter;