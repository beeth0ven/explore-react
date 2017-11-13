import React from 'react';

const examples = [
  {
    header: 'Hyperlink Example',
    render: (
      <div>
        <p>Click following link</p>
        <a
          href='https://beeth0ven.github.io/RxSwift-Chinese-Documentation/'
          target='_self'>
          RxSwift Chinese Documentation
        </a>
      </div>
    )
  },
  {
    header: 'Hyperlink Target Example',
    render: (
      <div>
        <p>Click following link</p>
        <a
          href='https://beeth0ven.github.io/RxSwift-Chinese-Documentation/'
          target='_blank'>
          Open in Blank
        </a> |&nbsp;
        <a
          href='https://beeth0ven.github.io/RxSwift-Chinese-Documentation/'
          target='_self'>
          Open in Self
        </a> |&nbsp;
        <a
          href='https://beeth0ven.github.io/RxSwift-Chinese-Documentation/'
          target='_parent'>
          Open in Parent
        </a> |&nbsp;
        <a
          href='https://beeth0ven.github.io/RxSwift-Chinese-Documentation/'
          target='_top'>
          Open in Top
        </a>
      </div>
    )
  },
  // {
  //   header: 'Hyperlink Base Example',
  //   render: (
  //     <div>
  //       <p>Click following link</p>
  //       <base href='https://beeth0ven.github.io'/>
  //       <a
  //         href='/RxSwift-Chinese-Documentation/'
  //         target='_blank'>
  //         RxSwift Chinese Documentation
  //       </a>
  //     </div>
  //   )
  // },
  {
    header: 'Hyperlink Download Links Example',
    render: (
      <div>
        <p>Click following link</p>
        <a
          href='https://beeth0ven.github.io/RxSwift-Chinese-Documentation/'
          target='_self'>
          Download PDF File
        </a>
      </div>
    )
  }
];

export const htmlTextLinks = {
  header: 'HTML - Text Links',
  examples
};