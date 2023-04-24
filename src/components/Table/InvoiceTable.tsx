import { tableData } from "../../constants/dummyData"

type Props = {}

const InvoiceTable = (props: Props) => {
  return (
    <div>
        <table>
        {tableData.map((row)=>{return(
            <tr key={Math.random()}>
                <td>{row.id}</td>
                <td>{row.Date}</td>
                <td>{row.Name}</td>
                <td>{row.Amount}</td>
                <td>{row.Status}</td>
            </tr>
         
        )})}
           </table>
    </div>
  )
}

export default InvoiceTable