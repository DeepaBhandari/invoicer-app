import { tableData } from '../../constants/dummyData';
import { ReactComponent as ArrowRight } from '../../images/icon-arrow-right.svg';

type Props = {};

const InvoiceTable = (props: Props) => {
  return (
    <div className='overflow-x-auto p-2'>
      <table className='table-auto w-full text-xs text-center whitespace-no-wrap font-spartanmedium'>
        <tbody className=' '>
          {tableData.map((row) => {
            return (
              <tr
                className='border-separate border-spacing-4 shadow shadow-slate-300 m-auto p-auto'
                key={Math.random()}
              >
                <td className='bg-white font-bold '>{row.id}</td>
                <td className='bg-white text-gray font-extralight'>
                  {row.Date}
                </td>
                <td className='bg-white text-gray font-extralight'>
                  {row.Name}
                </td>
                <td className='bg-white font-bold '>{row.Amount}</td>
                <td
                  className={` m-10 rounded-md ${
                    row.Status.toLowerCase() === 'paid'
                      ? 'bg-green-300 text-green-500'
                      : row.Status.toLowerCase() === 'pending'
                      ? 'bg-yellow-300 text-yellow-500'
                      : 'bg-slate-300 text-gray'
                  }`}
                >
                  <span className='circle' />
                  {row.Status}
                </td>
                <td>
                  <ArrowRight />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
