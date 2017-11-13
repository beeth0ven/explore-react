import React from 'react';

const examples =[
  {
    header: 'HTML Unordered List',
    render: (
      <div>
        <ul>
          <li>Observable</li>
          <li>Observer</li>
          <li>Operator</li>
          <li>Disposable</li>
          <li>Scheduler</li>
        </ul>
      </div>
    )
  },
  {
    header: 'HTML Unordered List - square',
    render: (
      <div>
        <ul type='square'>
          <li>Observable</li>
          <li>Observer</li>
          <li>Operator</li>
          <li>Disposable</li>
          <li>Scheduler</li>
        </ul>
      </div>
    )
  },
  {
    header: 'HTML Unordered List - disc',
    render: (
      <div>
        <ul type='disc'>
          <li>Observable</li>
          <li>Observer</li>
          <li>Operator</li>
          <li>Disposable</li>
          <li>Scheduler</li>
        </ul>
      </div>
    )
  },
  {
    header: 'HTML Unordered List - circle',
    render: (
      <div>
        <ul type='circle'>
          <li>Observable</li>
          <li>Observer</li>
          <li>Operator</li>
          <li>Disposable</li>
          <li>Scheduler</li>
        </ul>
      </div>
    )
  },
  {
    header: 'HTML Ordered List',
    render: (
      <div>
        <ol>
          <li>Observable</li>
          <li>Observer</li>
          <li>Operator</li>
          <li>Disposable</li>
          <li>Scheduler</li>
        </ol>
      </div>
    )
  },
  {
    header: 'HTML Ordered List - 1',
    render: (
      <div>
        <ol type='1'>
          <li>Observable</li>
          <li>Observer</li>
          <li>Operator</li>
          <li>Disposable</li>
          <li>Scheduler</li>
        </ol>
      </div>
    )
  },
  {
    header: 'HTML Ordered List - I',
    render: (
      <div>
        <ol type='I'>
          <li>Observable</li>
          <li>Observer</li>
          <li>Operator</li>
          <li>Disposable</li>
          <li>Scheduler</li>
        </ol>
      </div>
    )
  },
  {
    header: 'HTML Ordered List - i',
    render: (
      <div>
        <ol type='i'>
          <li>Observable</li>
          <li>Observer</li>
          <li>Operator</li>
          <li>Disposable</li>
          <li>Scheduler</li>
        </ol>
      </div>
    )
  },
  {
    header: 'HTML Ordered List - A',
    render: (
      <div>
        <ol type='A'>
          <li>Observable</li>
          <li>Observer</li>
          <li>Operator</li>
          <li>Disposable</li>
          <li>Scheduler</li>
        </ol>
      </div>
    )
  },
  {
    header: 'HTML Ordered List - a',
    render: (
      <div>
        <ol type='a'>
          <li>Observable</li>
          <li>Observer</li>
          <li>Operator</li>
          <li>Disposable</li>
          <li>Scheduler</li>
        </ol>
      </div>
    )
  },
  {
    header: 'HTML Ordered List - type: 1, start: 4',
    render: (
      <div>
        <ol type='1' start='4'>
          <li>Observable</li>
          <li>Observer</li>
          <li>Operator</li>
          <li>Disposable</li>
          <li>Scheduler</li>
        </ol>
      </div>
    )
  },
  {
    header: 'HTML Definition List',
    render: (
      <div>
        <dl>
          <dt><b>Observable</b></dt>
          <dd>Might be sync or async sequence.</dd>
          <dt><b>Observer</b></dt>
          <dd>React to sequence</dd>
        </dl>
      </div>
    )
  }
];

export const htmlLists = {
  header: 'HTML - Lists',
  examples
};