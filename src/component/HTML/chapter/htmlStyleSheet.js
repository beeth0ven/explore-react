import React from 'react';
import './style.css';

const examples =[
  {
    header: 'HTML CSS',
    render: (
      <div>
        <p style={{color: 'green', fontSize: '24'}}>Hello, World!</p>
      </div>
    ),
    code: `
        <p style={{color: 'green', fontSize: '24'}}>Hello, World!</p>
    `
  },
  {
    header: 'HTML External CSS',
    render: (
      <div>
        <p className='red'>This is red</p>
        <p className='thick'>This is thick</p>
        <p className='green'>This is green</p>
        <p className='thick green'>This is thick green</p>
      </div>
    ),
    code: `
        <p className='red'>This is red</p>
        <p className='thick'>This is thick</p>
        <p className='green'>This is green</p>
        <p className='thick green'>This is thick green</p>
    `
  },
  {
    header: 'HTML Inline CSS',
    render: (
      <div>
        <p style={{color: 'red'}}>This is red</p>
        <p style={{fontSize: '20px'}}>This is thick</p>
        <p style={{color: 'green'}}>This is green</p>
        <p style={{color: 'green', fontSize: '20px'}}>This is thick green</p>
      </div>
    ),
    code: `
        <p style={{color: 'red'}}>This is red</p>
        <p style={{fontSize: '20px'}}>This is thick</p>
        <p style={{color: 'green'}}>This is green</p>
        <p style={{color: 'green', fontSize: '20px'}}>This is thick green</p>
    `
  }
];

export const htmlStyleSheet = {
  header: 'HTML - Style Sheet',
  examples
};