import { useEffect, useState } from "react";


const ProductLista=()=>{



    const [COffeelist, setCoffeelist]=useState<Coffee>([
        {
        "name":"Espreso",
        "id":1
    },
    {
    "name":"latte",
    "id":2
    },
    {
        "name":"mocca",
        "id":3
        }])



    return(
        <>
        <h2>Product lista</h2>
      <ul>
          {coffeelist.map(coffee=>(
              <li key={coffee.id}>

              </li>
          ))}
      </ul>
      </>
    )
}
export default ProductLista