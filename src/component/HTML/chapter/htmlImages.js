import React from 'react';

const examples = [
  {
    header: 'Using Image in web page',
    render: (
      <div>
        <img src='https://beeth0ven.github.io/RxSwift-Chinese-Documentation/assets/Rx_Logo_M.png' alt='Test Image'/>
      </div>
    ),
    code: `
        <img src='https://beeth0ven.github.io/RxSwift-Chinese-Documentation/assets/Rx_Logo_M.png' alt='Test Image'/>
    `
  },
  {
    header: 'Set Image Width/Height',
    render: (
      <div>
        <img
          src='https://beeth0ven.github.io/RxSwift-Chinese-Documentation/assets/Rx_Logo_M.png'
          alt='Test Image'
          width='150'
          height='50'
        />
      </div>
    ),
    code: `
        <img
          src='https://beeth0ven.github.io/RxSwift-Chinese-Documentation/assets/Rx_Logo_M.png'
          alt='Test Image'
          width='150'
          height='50'
        />
    `
  },
  {
    header: 'Set Image Border (Failed)',
    render: (
      <div>
        <img
          src='https://beeth0ven.github.io/RxSwift-Chinese-Documentation/assets/Rx_Logo_M.png'
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
          src='https://beeth0ven.github.io/RxSwift-Chinese-Documentation/assets/Rx_Logo_M.png'
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