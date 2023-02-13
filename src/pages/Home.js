import { Link,useNavigate } from "react-router-dom";

function HomePage(){
    const navigate=useNavigate();

    function navigateHandler(){
        navigate('products')
    }
    return(
        <>
        <h1>My home page</h1>
        <Link to="products">Products</Link>
        <p>
            <button onClick={navigateHandler}>Products</button>
        </p>
        </>
    )
}

export default HomePage;