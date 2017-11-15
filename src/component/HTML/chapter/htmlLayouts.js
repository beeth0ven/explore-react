import React from 'react';

const examples = [
  {
    header: 'HTML Layout using Tables',
    render: (
      <div>
        <table width='100%' border='0'>
          <tr>
            <td colSpan='2' style={{backgroundColor: '#b5dcb3'}}>
              <h1>This is Web Page Main title</h1>
            </td>
          </tr>

          <tr valign='top'>
            <td style={{backgroundColor: '#aaa'}} width='50'>
              <b>Main Menu</b><br/>
              HTML<br/>
              PHP<br/>
              PERL...
            </td>
            <td style={{backgroundColor: '#eee'}} width='100' height='200'>
              Technical and Managerial Tutorials
            </td>
          </tr>

          <tr>
            <td colSpan='2' style={{backgroundColor: '#b5dcb3', textAlign: 'center'}}>
              Copyright © 2017 somebody
            </td>
          </tr>
        </table>
      </div>
    ),
    code: `
        <table width='100%' border='0'>
          <tr>
            <td colSpan='2' style={{backgroundColor: '#b5dcb3'}}>
              <h1>This is Web Page Main title</h1>
            </td>
          </tr>

          <tr valign='top'>
            <td style={{backgroundColor: '#aaa'}} width='50'>
              <b>Main Menu</b><br/>
              HTML<br/>
              PHP<br/>
              PERL...
            </td>
            <td style={{backgroundColor: '#eee'}} width='100' height='200'>
              Technical and Managerial Tutorials
            </td>
          </tr>
          
          <tr>
            <td colSpan='2' style={{backgroundColor: '#b5dcb3', textAlign: 'center'}}>
              Copyright © 2017 somebody
            </td>
          </tr>
        </table>
    `
  },
  {
    header: 'Three Column HTML Layout',
    render: (
      <div>
        <table width = "100%" border = "0">
          <tr valign = "top">
            <td style={{backgroundColor: '#aaa', width: '20%'}}>
              <b>Main Menu</b><br />
              HTML<br />
              PHP<br />
              PERL...
            </td>

            <td style={{backgroundColor: '#b5dcb3', width: '60%', height: '200'}}>
              Technical and Managerial Tutorials
            </td>

            <td style={{backgroundColor: '#aaa', width: '20%'}}>
              <b>Right Menu</b><br />
              HTML<br />
              PHP<br />
              PERL...
            </td>
          </tr>
        </table>
      </div>
    ),
    code: `
        <table width = "100%" border = "0">
          <tr valign = "top">
            <td style={{backgroundColor: '#aaa', width: '20%'}}>
              <b>Main Menu</b><br />
              HTML<br />
              PHP<br />
              PERL...
            </td>

            <td style={{backgroundColor: '#b5dcb3', width: '60%', height: '200'}}>
              Technical and Managerial Tutorials
            </td>

            <td style={{backgroundColor: '#aaa', width: '20%'}}>
              <b>Right Menu</b><br />
              HTML<br />
              PHP<br />
              PERL...
            </td>
          </tr>
        </table>
    `
  },
  {
    header: 'HTML Layouts using DIV, SPAN',
    render: (
      <div>
        <div style={{width: '100%'}}>

          <div style={{backgroundColor: '#b5dcb3', width: '100%'}}>
            <h1>This is Web Page Main title</h1>
          </div>

          <div style={{backgroundColor: '#aaa', height: '200px', width: '100px', float: 'left'}}>
            <b>Main Menu</b><br/>
            HTML<br/>
            PHP<br/>
            PERL...
          </div>

          <div style={{backgroundColor: '#eee', height: '200px', width: '350px', float: 'left'}}>
            <p>Technical and Managerial Tutorials</p>
          </div>

          <div style={{backgroundColor: '#aaa', height: '200px', width: '100px', float: 'right'}}>
            <div><b>Right Menu</b></div>
            HTML<br />
            PHP<br />
            PERL...
          </div>

          <div style={{backgroundColor: '#b5dcb3', clear: 'both', textAlign: 'center'}}>
            Copyright © 2017 somebody
          </div>

        </div>
      </div>
    ),
    code: `
        <div style={{width: '100%'}}>

          <div style={{backgroundColor: '#b5dcb3', width: '100%'}}>
            <h1>This is Web Page Main title</h1>
          </div>

          <div style={{backgroundColor: '#aaa', height: '200px', width: '100px', float: 'left'}}>
            <b>Main Menu</b><br/>
            HTML<br/>
            PHP<br/>
            PERL...
          </div>

          <div style={{backgroundColor: '#eee', height: '200px', width: '350px', float: 'left'}}>
            <p>Technical and Managerial Tutorials</p>
          </div>

          <div style={{backgroundColor: '#aaa', height: '200px', width: '100px', float: 'right'}}>
            <div><b>Right Menu</b></div>
            HTML<br />
            PHP<br />
            PERL...
          </div>

          <div style={{backgroundColor: '#b5dcb3', clear: 'both', textAlign: 'center'}}>
            Copyright © 2017 somebody
          </div>

        </div>
    `
  }
];

export const htmlLayouts = {
  header:'HTML - Layouts',
  examples
};