import { useState } from "react"
import ChatManager from "./ChatManager"
import ItemProduct from "./ItemProduct"
import TablaTargetProducts from "./TablaTargetProducts"

import productos from '../db/products.json'

export default function App() {
  const [ listProducts, setListProducts ] = useState([])
  const [ shopProducts, setShopProducts ] = useState(productos)

  return (
    <div className="container">
      <TablaTargetProducts>
        {listProducts.sort((a, b) => b.amount*b.price - a.amount*a.price).map((product, index) => (
          <ItemProduct key={index} product={product}/>
        ))}
      </TablaTargetProducts>

      <ChatManager 
        shopProducts={shopProducts} 
        setShopProducts={setShopProducts}   
        listProducts={listProducts} 
        setListProducts={setListProducts}
      />
    </div>
  )
}