export default function ItemProduct({ product }) {
  return (
    <tr>
      <th>{product.amountProduct}</th>
      <th>{product.nameProduct}</th>
      <th>$ 10</th>
      <th>$ {10*product.amountProduct}</th>
    </tr>
  )
}