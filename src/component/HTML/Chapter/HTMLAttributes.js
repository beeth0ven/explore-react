import React from 'react';

const examples = [
  {
    header: 'Align Attribute Chapter',
    render: (
      <div>
        <p align='left'>This is left aligned</p>
        <p align='center'>This is center aligned</p>
        <p align='right'>This is right aligned</p>
      </div>
    )
  },
  {
    header: 'The Style Attribute',
    render: (
      <div>
        <p style={{fontFamily: 'arial', color:'#FF0000'}}>Some text...</p>
      </div>
    )
  }
];

export const htmlAttributes = {
  header: 'HTML - Attributes',
  examples: examples
};

