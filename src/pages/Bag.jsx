import React,{useContext} from "react";
import { CartContext } from "../context/CartContext";


function Bag(){


const {cart}=useContext(CartContext);



const total = cart.reduce(
(sum,item)=>sum + item.price,
0
);



return(

<div>


<h1>
My Bag
</h1>


{
cart.map(item=>(

<div key={item.id}>


<img 
src={item.image}
width="100"
/>


<h3>
{item.name}
</h3>


<p>
₹{item.price}
</p>


</div>


))

}



<h2>
Total : ₹{total}
</h2>



</div>

)


}


export default Bag;