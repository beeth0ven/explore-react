import React from 'react';

const examples = [
  {
    header: 'Bold Text Example',
    render: (
      <div>
        <p>The following word uses a <b>bold</b> typeface.</p>
      </div>
    )
  },
  {
    header: 'Italic Text Example',
    render: (
      <div>
        <p>The following word uses a <i>italicized</i> typeface.</p>
      </div>
    )
  },
  {
    header: 'Underlined Text Example',
    render: (
      <div>
        <p>The following word uses a <u>underlined</u> typeface.</p>
      </div>
    )
  },
  {
    header: 'Strike Text Example',
    render: (
      <div>
        <p>The following word uses a <strike>strike through</strike> typeface.</p>
      </div>
    )
  },
  {
    header: 'Monospaced Font Example',
    render: (
      <div>
        <p>The following word uses a <tt>monospaced</tt> typeface.</p>
      </div>
    )
  },
  {
    header: 'Superscript Example',
    render: (
      <div>
        <p>The following word uses a <sup>superscript</sup> typeface.</p>
      </div>
    )
  },
  {
    header: 'Subscript Example',
    render: (
      <div>
        <p>The following word uses a <sub>subscript</sub> typeface.</p>
      </div>
    )
  },
  {
    header: 'Deleted And Inserted Text Example',
    render: (
      <div>
        <p>I want to drink <del>cola</del> <ins>wine</ins></p>
      </div>
    )
  },
  {
    header: 'Larger Text Example',
    render: (
      <div>
        <p>The following word uses a <big>big</big> typeface.</p>
      </div>
    )
  },
  {
    header: 'Small Text Example',
    render: (
      <div>
        <p>The following word uses a <small>small</small> typeface.</p>
      </div>
    )
  },
  {
    header: 'Div Tag Example',
    render: (
      <div>
        <div id = 'menu' align='middle'>
          <a href='#'>HOME</a> |
          <a href='#'>CONTACT</a> |
          <a href='#'>ABOUT</a>
        </div>

        <div id='content' align='left' bgcolor='white'>
          <h5>Content Articles</h5>
          <p>Actual content goes here.....</p>
        </div>
      </div>
    )
  },
  {
    header: 'Span Tag Example',
    render: (
      <div>
        <p>This is the example of <span style={{color:'green'}}>span tag</span>
          &nbsp;and the <span style={{color:'red'}}>div tag</span> along with CSS.</p>
      </div>
    )
  }
];

export const htmlFormatting = {
  header: 'HTML - Formatting',
  examples: examples
};

