import "../css/ChatManager.css"
import { useState } from "react"
import translatorAi from "../scripts/translatorAi"

export default function ChatManager({ shopProducts, setShopProducts, listProducts, setListProducts }) {
  const [ message, setMessage ] = useState("")

  const addProduct = async (msg) => {
    const newProducts = [...listProducts]
    try {
      const parseAiProduct = await translatorAi(msg, shopProducts)

      const editRes = parseAiProduct.replace(/\n/g, "").split("},")
      editRes.forEach((obj, index) => {
        if (index < editRes.length - 1) obj += "}"
        const objPush = JSON.parse(obj.trim())
        newProducts.push(objPush)
      })

      setListProducts(newProducts)
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