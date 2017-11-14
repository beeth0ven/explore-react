import React from 'react';

const examples = [
  {
    header: 'Emphasized Text Example',
    render: (
      <div>
        <p>The following word uses a <em>emphasized</em> typeface.</p>
      </div>
    ),
    code: `<p>The following word uses a <em>emphasized</em> typeface.</p>`
  },
  {
    header: 'Marked Text Example',
    render: (
      <div>
        <p>The following word uses a <mark>marked</mark> typeface.</p>
      </div>
    ),
    code: `<p>The following word uses a <mark>marked</mark> typeface.</p>`
  },
  {
    header: 'Strong Text Example',
    render: (
      <div>
        <p>The following word uses a <strong>strong</strong> typeface.</p>
      </div>
    ),
    code: `<p>The following word uses a <strong>strong</strong> typeface.</p>`
  },
  {
    header: 'Text Abbreviation',
    render: (
      <div>
        <p>My best friend's name is <abbr title='ReactiveX'>Rx</abbr>.</p>
      </div>
    ),
    code: `<p>My best friend's name is <abbr title='ReactiveX'>Rx</abbr>.</p>`
  },
  {
    header: 'Acronym Example',
    render: (
      <div>
        <p>This chapter covers marking up text in <acronym>XHTML</acronym>.</p>
      </div>
    ),
    code: `<p>This chapter covers marking up text in <acronym>XHTML</acronym>.</p>`
  },
  {
    header: 'Text Direction Example',
    render: (
      <div>
        <p>This text go left to right.</p>
        <p><bdo dir='rtl'>This text go right to left.</bdo></p>
      </div>
    ),
    code:
`<p>This text go left to right.</p>
<p><bdo dir='rtl'>This text go right to left.</bdo></p>`
  },
  {
    header: 'Special Terms Example',
    render: (
      <div>
        <p>The following word is a <dfn>special</dfn> term.</p>
      </div>
    ),
    code: `<p>The following word is a <dfn>special</dfn> term.</p>`
  },
  {
    header: 'Block Quote Example',
    render: (
      <div>
        <p>The following description of XHTML is taken from the W3C Web site:</p>
        <blockquote>XHTML 1.0 is the W3C's first Recommendation for XHTML,following on
          from earlier work on HTML 4.01, HTML 4.0, HTML 3.2 and HTML 2.0.</blockquote>
      </div>
    ),
    code:
`<p>The following description of XHTML is taken from the W3C Web site:</p>
<blockquote>XHTML 1.0 is the W3C's first Recommendation for XHTML,following on
from earlier work on HTML 4.01, HTML 4.0, HTML 3.2 and HTML 2.0.</blockquote>`
  },
  {
    header: 'Double Quote Example',
    render: (
      <div>
        <p>Terry is in Spain, <q>I think I am wrong</q>.</p>
      </div>
    ),
    code: `<p>Terry is in Spain, <q>I think I am wrong</q>.</p>`
  },
  {
    header: 'Citations Example',
    render: (
      <div>
        <p>This HTML tutorial is derived from <cite>W3 Standard for HTML</cite>.</p>
      </div>
    ),
    code: `<p>This HTML tutorial is derived from <cite>W3 Standard for HTML</cite>.</p>`
  },
  {
    header: 'Computer Code Example',
    render: (
      <div>
        <p>Regular text. <code>This is code.</code> Regular text.</p>
      </div>
    ),
    code: `<p>Regular text. <code>This is code.</code> Regular text.</p>`
  },
  {
    header: 'Keyboard Text Example',
    render: (
      <div>
        <p>Regular text. <kbd>This is inside kbd element</kbd> Regular text.</p>
      </div>
    ),
    code: `<p>Regular text. <kbd>This is inside kbd element</kbd> Regular text.</p>`
  },
  {
    header: 'Variable Text Example',
    render: (
      <div>
        <p><code>document.write("<var>user-name</var>")</code></p>
      </div>
    ),
    code: `<p><code>document.write("<var>user-name</var>")</code></p>`
  },
  {
    header: 'Program Output Example',
    render: (
      <div>
        <p>Result produced by the program is <samp>Hello World!</samp></p>
      </div>
    ),
    code: `<p>Result produced by the program is <samp>Hello World!</samp></p>`
  },
  {
    header: 'Address Example',
    render: (
      <div>
        <address>388A, Road No 22, Jubilee Hills - Hyderabad</address>
      </div>
    ),
    code: `<address>388A, Road No 22, Jubilee Hills - Hyderabad</address>`
  }
];

export const htmlPhraseTags = {
  header: 'HTML - Phrase Tags',
  examples
};

