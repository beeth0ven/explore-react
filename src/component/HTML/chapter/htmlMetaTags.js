import React from 'react';

const examples = [
  {
    header: 'Meta Tags Example',
    render: (
      <div>
        <head>
          <title>Meta Tags Example</title>
          <meta name="keywords" content="HTML, Meta Tags, Metadata"/>
        </head>
        <body>
        <p>Hello HTML5!</p>
        </body>
      </div>
    )
  },
  {
    header: 'Meta Tags Example',
    render: (
      <div>
        <head>
          <title>Meta Tags Example</title>
          <meta name="keywords" content="HTML, Meta Tags, Metadata"/>
          <meta name="description" content="Learning about Meta Tags."/>
        </head>
        <body>
        <p>Hello HTML5!</p>
        </body>
      </div>
    )
  },
  {
    header: 'Meta Tags Example',
    render: (
      <div>
        <head>
          <title>Meta Tags Example</title>
          <meta name="keywords" content="HTML, Meta Tags, Metadata"/>
          <meta name="description" content="Learning about Meta Tags."/>
          <meta name="revised" content="Tutorial spoint, 3/7/2014"/>
        </head>
        <body>
        <p>Hello HTML5!</p>
        </body>
      </div>
    )
  },
  {
    header: 'Meta Tags Example',
    render: (
      <div>
        <head>
          <title>Meta Tags Example</title>
          <meta name="keywords" content="HTML, Meta Tags, Metadata"/>
          <meta name="description" content="Learning about Meta Tags."/>
          <meta name="revised" content="Tutorial spoint, 3/7/2014"/>
          {/*<meta httpEquiv="refresh" content="5"/>*/}
        </head>
        <body>
        <p>Hello HTML5!</p>
        </body>
      </div>
    )
  },
  {
    header: 'Meta Tags Example',
    render: (
      <div>
        <head>
          <title>Meta Tags Example</title>
          <meta name="keywords" content="HTML, Meta Tags, Metadata"/>
          <meta name="description" content="Learning about Meta Tags."/>
          <meta name="revised" content="Tutorialspoint, 3/7/2014"/>
          {/*<meta httpEquiv="refresh" content="5; url = http://www.tutorialspoint.com"/>*/}
        </head>
        <body>
        <p>Hello HTML5!</p>
        </body>
      </div>
    )
  },
  {
    header: 'Meta Tags Example',
    render: (
      <div>
        <head>
          <title>Meta Tags Example</title>
          <meta name="keywords" content="HTML, Meta Tags, Metadata"/>
          <meta name="description" content="Learning about Meta Tags."/>
          <meta name="revised" content="Tutorialspoint, 3/7/2014"/>
          <meta httpEquiv="cookie" content="userid=xyz;
            expires = Wednesday, 08-Aug-15 23:59:59 GMT;"/>
        </head>
        <body>
        <p>Hello HTML5!</p>
        </body>
      </div>
    )
  },
  {
    header: 'Meta Tags Example',
    render: (
      <div>
        <head>
          <title>Meta Tags Example</title>
          <meta name="keywords" content="HTML, Meta Tags, Metadata"/>
          <meta name="description" content="Learning about Meta Tags."/>
          <meta name="author" content="Mahnaz Mohtashim"/>
        </head>
        <body>
        <p>Hello HTML5!</p>
        </body>
      </div>
    )
  },
  {
    header: 'Meta Tags Example',
    render: (
      <div>
        <head>
          <title>Meta Tags Example</title>
          <meta name="keywords" content="HTML, Meta Tags, Metadata"/>
          <meta name="description" content="Learning about Meta Tags."/>
          <meta name="author" content="Mahnaz Mohtashim"/>
          <meta httpEquiv="Content-Type" content='text/html; charset=UTF-8'/>
        </head>
        <body>
        <p>Hello HTML5!</p>
        </body>
      </div>
    )
  },
  {
    header: 'Meta Tags Example',
    render: (
      <div>
        <head>
          <title>Meta Tags Example</title>
          <meta name="keywords" content="HTML, Meta Tags, Metadata"/>
          <meta name="description" content="Learning about Meta Tags."/>
          <meta name="author" content="Mahnaz Mohtashim"/>
          <meta httpEquiv='Content-Type' content='text/html; charset=Big5'/>
        </head>
        <body>
        <p>Hello HTML5!</p>
        </body>
      </div>
    )
  }
];

export const htmlMetaTags = {
  header: 'HTML - Meta Tags',
  examples
};