import axios from "axios";

export default function parseAi(message) {
  const url_api = "https://api.ai21.com/studio/v1/j2-ultra/chat"

  const payload = {
    numResults: 1,
    temperature: 1.0,
    messages: [{ text: `A continuación, el texto del usuario: ${message}`, role: "user" }],
    system: `Debes convertir el texto recibido a Objeto de JavaScript, este se colocará posteriormente en una lista de productos de una tienda. Da como respuesta solo el Objeto, si es más de un producto, separa los objetos con ", ". Usa el siguiente ejemplo de respuesta: {"name": "Nombre del producto", "price": "3.75", "amount": 10}`
  }

  const headers = {
    accept: "application/json",
    "content-type": "application/json",
    Authorization: `Bearer c8uE4MUBTqv9S9IQGBdrZWCd7Cs5bQ2i`
  }

  return axios.post(url_api, payload, { headers })
    .then(res => {
      console.log(res.data.outputs[0].text)
      return res.data.outputs[0].text
    }).catch(e => console.error(e))
}