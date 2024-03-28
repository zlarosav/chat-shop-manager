import axios from "axios"

export default async function translatorAi(message, shopProducts) {
  const url_api = "https://api.ai21.com/studio/v1/j2-ultra/chat"

  const payload = {
    numResults: 1,
    temperature: 1.0,
    messages: [{ text: `A continuación, el texto del usuario: ${message}`, role: "user" }],
    system: `Eres una IA Manager de una tienda. Tu tarea es interpretar el mensaje de un cliente para agregar o quitar de su carrito de compras un producto determinado. Tu única respuesta debe ser un objeto de JavaScript (sin tildes) que mantenga la siguiente esencia: 
    {"select": "agregar/quitar", "nameCategory": "categoría elegida", "amountProduct": 1, "nameProduct": "nombre del producto por unidad (pantalones->pantalón)", "tagsProduct": [ "tag 1", "tag 2" ], "detailed": true }
    Las categorías posibles son: ${Object.keys(shopProducts).join(", ")}.
    Algunos elementos que puede incluir tagsProduct son: color, tamaño, etc.
    Solo coloca en tagsProducts palabras que estén en el texto del cliente y que no sean el nombre del producto, si no los hay, deja el array vacío.
    Si consideras que el cliente debería dar más detalles del producto, coloca "detailed: false". 
    Si consideras que el mensaje del cliente no tiene ninguna relación con tu rol actual, pregúntale si desea comprar algo, ya que no respondes otras preguntas.
    `
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