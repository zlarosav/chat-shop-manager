import "../css/TablaTotalProducts.css"

export default function TablaTotalProducts({ children }) {
  return (
    <table className="TablaTotalProducts">
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