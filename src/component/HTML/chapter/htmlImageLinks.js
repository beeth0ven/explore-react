import React from 'react';

const examples = [
  {
    header: 'Image Hyperlink Example',
    render: (
      <div>
        <p>Click following link</p>
        <a href='https://beeth0ven.github.io/RxSwift-Chinese-Documentation/' target='_blank'>
          <img
            src='https://beeth0ven.github.io/RxSwift-Chinese-Documentation/assets/Rx_Logo_M.png'
            width='100'
            height='100'
          />
        </a>
      </div>
    )
  },
  {
    header: 'USEMAP Image Hyperlink Example',
    render: (
      <div>
        <p>Click following link</p>
        <img
          src='https://beeth0ven.github.io/RxSwift-Chinese-Documentation/assets/Rx_Logo_M.png'
          alt='HTML Map'
          useMap='#html'
          width='100'
          height='100'
        />

        <map name='html'>
          <area
            shape='rect'
            coords='5,5,40,40'
            alt='Documentation'
            href='https://beeth0ven.github.io/RxSwift-Chinese-Documentation/'
          />
          <area
            shape='circle'
            coords='80,80,20'
            href='https://beeth0ven.github.io/'
            alt='Blog'
          />
        </map>

      </div>
    )
  }
];

export const htmlImageLinks = {
  header: 'HTML - Image Links',
  examples
};