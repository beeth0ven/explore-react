import React from 'react';

const examples = [
  {
    header: 'HTML marquee Tag',
    render: (
      <div>
        <marquee>This is basic example of marquee</marquee>
      </div>
    ),
    code: `
        <marquee>This is basic example of marquee</marquee>
    `
  },
  {
    header: 'HTML marquee width',
    render: (
      <div>
        <marquee width='50%'>This example will take only 50% width</marquee>
      </div>
    ),
    code: `
        <marquee width='50%'>This example will take only 50% width</marquee>
    `
  },
  {
    header: 'HTML marquee right to left',
    render: (
      <div>
        <marquee direction='right'>This text will scroll from left to right</marquee>
      </div>
    ),
    code: `
        <marquee direction='right'>This text will scroll from left to right</marquee>
    `
  },
  {
    header: 'HTML marquee bottom to up',
    render: (
      <div>
        <marquee direction='up'>This text will scroll from bottom to up</marquee>
      </div>
    ),
    code: `
        <marquee direction='up'>This text will scroll from bottom to up</marquee>
    `
  }
];

export const htmlMarquees = {
  header: 'HTML - Marquees',
  examples
};