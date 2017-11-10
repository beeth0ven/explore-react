import React from 'react';

const examples = [
  {
    header: 'Heading Chapter',
    render: (
      <div>
        <h1>This is heading 1</h1>
        <h2>This is heading 2</h2>
        <h3>This is heading 3</h3>
        <h4>This is heading 4</h4>
        <h5>This is heading 5</h5>
        <h6>This is heading 6</h6>
      </div>
    )
  },
  {
    header: 'Paragraph Chapter',
    render: (
      <div>
        <p>Here is first paragraph of text.</p>
        <p>Here is second paragraph of text.</p>
        <p>Here is third paragraph of text.</p>
      </div>
    )
  },
  {
    header: 'Line Break Chapter',
    render: (
      <div>
        <p>
          Hello<br/>
          You delivered your assignment on time.<br/>
          Thanks<br/>
          Mary
        </p>
      </div>
    )
  },
  {
    header: 'Centring Content Chapter',
    render: (
      <div>
        <p>This text is not in the center.</p>
        <p align='center'>This text is in the center.</p>
      </div>
    )
  },
  {
    header: 'Horizontal Line Chapter',
    render: (
      <div>
        <p>This is paragraph one and should be on top</p>
        <hr/>
        <p>This is paragraph two and should be at bottom</p>
      </div>
    )
  },
  {
    header: 'Preserve Formatting Chapter',
    render: (
      <div>
        <pre>{`
          function testFunction(text) {
            alert(text)
          }
        `}</pre>
      </div>
    )
  },
  {
    header: 'Non breaking Spaces Chapter',
    render: (
      <div>
        <p>An example of this technique appears in the movie "12&nbsp;Angry&nbsp;Men."</p>
      </div>
    )
  },
];

export const htmlBasicTags = {
  header: 'HTML - Basic Tags',
  examples: examples
};

