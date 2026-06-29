import {useContext} from "react";
import {CartContext} from "../context/CartContext";


function Product({product}){


const {addToCart}=useContext(CartContext);


return(

<div>

<h2>{product.name}</h2>

<p>₹ {product.price}</p>


<button
onClick={()=>addToCart(product)}
>

Add to Cart

</button>


</div>

)

}

export default Product;