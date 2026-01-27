export default function Customer_support() {
  return (
    <div className="bg-gray-300 rounded w-fit p-4 shadow-lg">
      <h2>Customer Support</h2>

      <table>
        <tbody>
          <tr>
            <td rowSpan={2}>
              <img src="/src/assets/react.svg" alt="Support" />
            </td>
            <td>Contact number</td>
          </tr>

          <tr>
            <td>+91 345689363</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
