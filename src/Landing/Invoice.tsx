import InvoiceTable from "../components/Table/InvoiceTable"

const Invoice = () => {
  return (
    <div className="overflow-x-auto p-2">
      <h1 className="font-spartan">Invoices</h1> 
      <InvoiceTable/>
    </div>
  )
}

export default Invoice