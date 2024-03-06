export default function ItemProduct({ product }) {
  return (
    <tr>
      <th>{product.amount}</th>
      <th>{product.name}</th>
      <th>$ {product.price}</th>
      <th>$ {product.price*product.amount}</th>
    </tr>
  )
}