
import { useParams,useSearchParams } from "react-router-dom";

function ProductDetailsEdit(){

    const params=useParams();
    const [searchParams]=useSearchParams();
    console.log("hello",{searchParams})
    return(
        <><h1>Hello from {params.action} page</h1>
        <p>{params.productId}</p>
        <p>{searchParams.get('filter')}</p>
        </>
        
    )
}

export default ProductDetailsEdit;