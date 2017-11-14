import React from 'react';

const examples = [
  {
    header: 'HTML div Tag',
    render: (
      <div>

        <div style={{color: 'red'}}>
          <h4>This is first group</h4>
          <p>Following is a list of vegetables</p>

          <ul>
            <li>Beetroot</li>
            <li>Ginger</li>
            <li>Potato</li>
            <li>Radish</li>
          </ul>
        </div>

        <div style={{color: 'green'}}>
          <h4>This is second group</h4>
          <p>Following is a list fruits</p>

          <ul>
            <li>Apple</li>
            <li>Banana</li>
            <li>Mango</li>
            <li>Strawberry</li>
          </ul>
        </div>

      </div>
    ),
    code:
`<div style={{color: 'red'}}>
  <h4>This is first group</h4>
  <p>Following is a list of vegetables</p>

  <ul>
    <li>Beetroot</li>
    <li>Ginger</li>
    <li>Potato</li>
    <li>Radish</li>
  </ul>
</div>

<div style={{color: 'green'}}>
  <h4>This is second group</h4>
  <p>Following is a list fruits</p>

  <ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Mango</li>
    <li>Strawberry</li>
  </ul>
</div>`
  },
  {
    header: 'HTML span Tag',
    render: (
      <div>
        <p>This is <span style={{color: 'red'}}>red</span> and this is&nbsp;
        <span style={{color: 'green'}}>green</span></p>
      </div>
    ),
    code:
`<p>This is <span style={{color: 'red'}}>red</span> and this is&nbsp;
<span style={{color: 'green'}}>green</span></p>`
  }
];

export const htmlBlocks = {
  header: 'HTML - Blocks',
  examples
};