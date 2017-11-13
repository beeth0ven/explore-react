import React from 'react';

const examples = [
  {
    header: 'Using Image in web page',
    render: (
      <div>
        <img src='https://www.tutorialspoint.com/html/images/test.png' alt='Test Image'/>
      </div>
    )
  },
  {
    header: 'Set Image Width/Height',
    render: (
      <div>
        <img
          src='https://www.tutorialspoint.com/html/images/test.png'
          alt='Test Image'
          width='150'
          height='50'
        />
      </div>
    )
  },
  {
    header: 'Set Image Border (Failed)',
    render: (
      <div>
        <img
          src='https://www.tutorialspoint.com/html/images/test.png'
          alt='Test Image'
          border='3'
        />
      </div>
    )
  },
  {
    header: 'Set Image Alignment',
    render: (
      <div>
        <img
          src='https://www.tutorialspoint.com/html/images/test.png'
          alt='Test Image'
          align='right'
        />
      </div>
    )
  }
];

export const htmlImages = {
  header: 'HTML - Images',
  examples
};