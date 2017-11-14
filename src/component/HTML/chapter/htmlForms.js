import React from 'react';

const examples = [
  {
    header: 'Text Input Control',
    render: (
      <div>
        <form>
          First name: <input type='text' name='first_name'/><br/>
          Last name: <input type='text' name='last_name'/>
        </form>
      </div>
    ),
    code:
`<form>
  First name: <input type='text' name='first_name'/><br/>
  Last name: <input type='text' name='last_name'/>
</form>`
  }
];

export const htmlForms = {
  header: 'HTML - Forms',
  examples
};