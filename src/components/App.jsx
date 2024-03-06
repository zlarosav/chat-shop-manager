import { useState } from "react"
import ChatManager from "./ChatManager"
import ItemProduct from "./ItemProduct"
import TablaTotalProducts from "./TablaTotalProducts"

const products = [
  {
    name: "Pepsi",
    price: "10.00",
    amount: 8
  },
  {
    name: "Coca Cola",
    price: "12.00",
    amount: 6
  },
  {
    name: "Galletas Oreo",
    price: "8.00",
    amount: 10
  },
  {
    name: "Nutella",
    price: "15.00",
    amount: 5
  },
  {
    name: "Fideos Spaghetti",
    price: "3.50",
    amount: 20
  },
  {
    name: "Café instantáneo Nescafé",
    price: "7.50",
    amount: 15
  },
  {
    name: "Chocolate Hershey's",
    price: "4.50",
    amount: 12
  },
  {
    name: "Pasta de Dientes Colgate",
    price: "5.00",
    amount: 8
  },
  {
    name: "Papel Higiénico Scott",
    price: "6.00",
    amount: 25
  },
  {
    name: "Jabón Dove",
    price: "3.75",
    amount: 10
  }
]

export default function App() {
  const [ nowProducts, setProducts ] = useState(products)

  return (
    <div className="container">
      <TablaTotalProducts>
        {nowProducts.sort((a, b) => b.amount - a.amount).map((product, index) => (
          <ItemProduct key={index} product={product}/>
        ))}
      </TablaTotalProducts>

      <ChatManager nowProducts={nowProducts} setProducts={setProducts}/>
    </div>
  )
}
