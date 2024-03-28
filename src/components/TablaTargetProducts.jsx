import "../css/TablaTargetProducts.css"

export default function TablaTargetProducts({ children }) {
  return (
    <table className="TablaTargetProducts">
      <thead>
        <tr>
          <th>Cantidad</th>
          <th>Producto</th>
          <th>Precio unitario</th>
          <th>Precio Total</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}