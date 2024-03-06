import "../css/ChatManager.css"
import { useState } from "react"
import parseAi from "../scripts/parseAi"

export default function ChatManager({ nowProducts, setProducts }) {
  const [ message, setMessage ] = useState("")

  const addProduct = async (msg) => {
    const newProducts = [...nowProducts]
    try {
      const parseAiProduct = await parseAi(msg)

      const editRes = parseAiProduct.split("},")
      editRes.forEach((obj, index) => {
        if (index < editRes.length - 1) obj += "}"
        newProducts.push(JSON.parse(obj.trim()))
      })

      setProducts(newProducts)
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className="ChatManager">
      <textarea placeholder="Escribe aquí tus instrucciones" onChange={(e)=> setMessage(e.target.value)}></textarea>
      <button onClick={() => addProduct(message)}>Enviar</button>
      <div className="response"></div>
    </div>
  )
}