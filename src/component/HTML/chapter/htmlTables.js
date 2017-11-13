import React from 'react'
import testImage from '../../../assets/test.png';

const examples = [
  {
    header: 'HTML Tables',
    render: (
      <div>
        <table border='1'>
          <tr>
            <td>Row 1, Column 1</td> <td>Row 1, Column 2</td>
          </tr>

          <tr>
            <td>Row 2, Column 1</td> <td>Row 2, Column 2</td>
          </tr>
        </table>
      </div>
    )
  },
  {
    header: 'HTML Table Header',
    render: (
      <div>
        <table border='1'>
          <tr>
            <th>Name</th> <th>Salary</th>
          </tr>
          <tr>
            <td>Beeth0ven</td> <td>1000</td>
          </tr>
          <tr>
            <td>Mary</td> <td>1500</td>
          </tr>
        </table>
      </div>
    )
  },
  {
    header: 'HTML Table Cellpading',
    render: (
      <div>
        <table border='1' cellPadding='5' cellSpacing='5'>
          <tr>
            <th>Name</th> <th>Salary</th>
          </tr>
          <tr>
            <td>Beeth0ven</td> <td>1000</td>
          </tr>
          <tr>
            <td>Mary</td> <td>1500</td>
          </tr>
        </table>
      </div>
    )
  },
  {
    header: 'HTML Table Colspan/Rowspan',
    render: (
      <div>
        <table border='1'>
          <tr>
            <th>Column 1</th> <th>Column 2</th> <th>Column 3</th>
          </tr>
          <tr>
            <td rowSpan='2'>Row 1 Cell 1</td> <td>Row 1 Cell 2</td> <td>Row 1 Cell 3</td>
          </tr>
                                              <td>Row 2 Cell 2</td> <td>Row 2 Cell 3</td>
          <tr>
            <td colSpan='3'>Row 3 Cell 1</td>
          </tr>
        </table>
      </div>
    )
  },
  {
    header: 'HTML Table Background Color',
    render: (
      <div>
        <table border='1' style={{borderColor: 'green', backgroundColor: 'yellow'}}>
          <tr>
            <th>Column 1</th> <th>Column 2</th> <th>Column 3</th>
          </tr>
          <tr>
            <td rowSpan='2'>Row 1 Cell 1</td> <td>Row 1 Cell 2</td> <td>Row 1 Cell 3</td>
          </tr>
          <td>Row 2 Cell 2</td> <td>Row 2 Cell 3</td>
          <tr>
            <td colSpan='3'>Row 3 Cell 1</td>
          </tr>
        </table>
      </div>
    )
  },
  {
    header: 'HTML Table Background Image',
    render: (
      <div>
        <table border='1' style={{borderColor: 'green', backgroundImage: `url(${testImage})`}}>
          <tr>
            <th>Column 1</th> <th>Column 2</th> <th>Column 3</th>
          </tr>
          <tr>
            <td rowSpan='2'>Row 1 Cell 1</td> <td>Row 1 Cell 2</td> <td>Row 1 Cell 3</td>
          </tr>
          <td>Row 2 Cell 2</td> <td>Row 2 Cell 3</td>
          <tr>
            <td colSpan='3'>Row 3 Cell 1</td>
          </tr>
        </table>
      </div>
    )
  },
  {
    header: 'HTML Table Width/Height',
    render: (
      <div>
        <table border='1' width='400' height='150'>
          <tr>
            <td>Row 1, Cell 1</td> <td>Row 1, Cell 2</td> <td>Row 1, Cell 3</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td> <td>Row 2, Cell 2</td> <td>Row 2, Cell 3</td>
          </tr>
        </table>
      </div>
    )
  },
  {
    header: 'HTML Table Caption',
    render: (
      <div>
        <table border='1' width='100%'>
          <caption>This is caption</caption>
          <tr>
            <td>Row 1, Cell 1</td> <td>Row 1, Cell 2</td> <td>Row 1, Cell 3</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td> <td>Row 2, Cell 2</td> <td>Row 2, Cell 3</td>
          </tr>
        </table>
      </div>
    )
  },
  {
    header: 'HTML Table Header, Body and Footer',
    render: (
      <div>
        <table border='1' width='100%'>
          <thead>
            <tr>
              <td colSpan='3'>Table Header</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row 1, Cell 1</td> <td>Row 1, Cell 2</td> <td>Row 1, Cell 3</td>
            </tr>
            <tr>
              <td>Row 2, Cell 1</td> <td>Row 2, Cell 2</td> <td>Row 2, Cell 3</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan='3'>Table Footer</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  },
  {
    header: 'HTML Nested Table',
    render: (
      <div>
        <table border='1' width='100%'>
         <tr>
           <td>
             <table border='1' width='100%'>
               <tr>
                 <th>Name</th> <th>Salary</th>
               </tr>
               <tr>
                 <td>Beeth0ven</td> <td>1000</td>
               </tr>
               <tr>
                 <td>Mary</td> <td>1500</td>
               </tr>
             </table>
           </td>
         </tr>
        </table>
      </div>
    )
  }
];

export const htmlTables = {
  header: 'HTML - Tables',
  examples
};