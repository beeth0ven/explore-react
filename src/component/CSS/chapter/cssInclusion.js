import React from 'react';
import './cssInclusion.css';

const examples = [
  {
    header: 'External CSS',
    render: (
      <div className='myBody'>
        <h1 className='myH1'>This is a heading</h1>
        <p>This is a paragraph</p>
      </div>
    ),
    code: `
      // HTML
      <div className='myBody'>
        <h1 className='myH1'>This is a heading</h1>
        <p>This is a paragraph</p>
      </div>
      
      // CSS
      .myBody {
        background-color: linen;
      }
      .myH1 {
        color: maroon;
        margin-left: 40px;
      }
    `
  },
  {
    header: 'Inline CSS',
    render: (
      <div>
        <h1 style={{color: '#36C'}}> This is inline CSS</h1>
      </div>
    ),
    code: `
        <h1 style={{color: '#36C'}}> This is inline CSS</h1>
    `
  }
];

export const cssInclusion = {
  header: 'CSS - Inclusion',
  examples
} ;