import { useParams,Link} from "react-router-dom";
import ProductDetailsEdit from "./ProductDetailsEdit";



function ProductDetails(){
    const params=useParams();
    console.log("Product details")
    
  return(
    <>
    <h1>Product details</h1>
    <p>{params.productId}</p>
    <Link to=".." relative="path">Back</Link>
    <Link to={`/products/${params.productId}/edit`}>Edit page</Link>
    <Link to={`/products/${params.productId}/delete`}>delete page</Link>
    </>
  )
}

export default ProductDetails;