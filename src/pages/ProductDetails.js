import { useParams,Link} from "react-router-dom";



function ProductDetails(){
    const params=useParams();
    console.log("Product details")
    
  return(
    <>
    <h1>Product details</h1>
    <p>{params.productId}</p>
    <Link to=".." relative="path">Back</Link>
    </>
  )
}

export default ProductDetails;