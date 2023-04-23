import { tableData } from "../../constants/dummyData"

type Props = {
    data:[];
    columns:[];
    column:string;
    index:[];
    header:string
}

// const index:React.FC<Props> = (props) => {
const Table= ({data,columns}:Props) => {
  return (
    <div>
        <table>
            <thead>
           <tr>
            {columns && columns.map((column:Props)=>{
                return(
                <th key={Math.random()}>{column.header}</th>
            )})}
            </tr>
            </thead>

            <tbody>
            {tableData && tableData.map((data)=>{return(
            <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.Date}</td>
                <td>{data.Name}</td>
                <td>{data.Amount}</td>
                <td>{data.Status}</td>
            </tr>
         )})}
            
            </tbody>
        </table>
    </div>
  )
}

export default Table