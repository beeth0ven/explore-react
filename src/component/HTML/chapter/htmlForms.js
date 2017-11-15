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
    code: `
        <form>
          First name: <input type='text' name='first_name'/><br/>
          Last name: <input type='text' name='last_name'/>
        </form>
    `
  },
  {
    header: 'Multiple-Line Input Control',
    render: (
      <div>
        <form>
          Description: <br/>
          <textarea rows='5' cols='50' name='description'>
            Enter description here...
          </textarea>
        </form>
      </div>
    ),
    code: `
        <form>
          Description: <br/>
          <textarea rows='5' cols='50' name='description'>
            Enter description here...
          </textarea>
        </form>
    `
  },
  {
    header: 'Checkbox Control',
    render: (
      <div>
        <form>
          <input type='checkbox' name='maths' value='on'/> Math&nbsp;
          <input type='checkbox' name='physics' value='on'/> Physics
        </form>
      </div>
    ),
    code: `
        <form>
          <input type='checkbox' name='maths' value='on'/> Math&nbsp;
          <input type='checkbox' name='physics' value='on'/> Physics
        </form>
    `
  },
  {
    header: 'Radio Control',
    render: (
      <div>
        <form>
          <input type='radio' name='subject' value='math'/> Math&nbsp;
          <input type='radio' name='subject' value='physics'/> Physics
        </form>
      </div>
    ),
    code: `
        <form>
          <input type='radio' name='subject' value='math'/> Math&nbsp;
          <input type='radio' name='subject' value='physics'/> Physics
        </form>
    `
  },
  {
    header: 'Select Box Control',
    render: (
      <div>
        <form>
          <select name='subject'>
            <option value='Math' selected>Math</option>
            <option value='Physics'>Physics</option>
          </select>
        </form>
      </div>
    ),
    code: `
        <form>
          <select name='subject'>
            <option value='Math' selected>Math</option>
            <option value='Physics'>Physics</option>
          </select>
        </form>
    `
  },
  {
    header: 'File Upload Box',
    render: (
      <div>
        <form>
          <input type='file' name='fileupload' accept='images/*'/>
        </form>
      </div>
    ),
    code: `
          <input type='file' name='fileupload' accept='images/*'/>
    `
  },
  {
    header: 'Button Control',
    render: (
      <div>
        <form>
          <input type='submit' name='submit' value='Submit'/>
          <input type='reset' name='reset' value='Reset'/>
          <input type='button' name='button' value='Button'/>
          <input type='image' name='imagebutton'
                 width='100'
                 height='100'
                 src='https://beeth0ven.github.io/RxSwift-Chinese-Documentation/assets/Rx_Logo_M.png'
          />
        </form>
      </div>
    ),
    code: `
        <form>
          <input type='submit' name='submit' value='Submit'/>
          <input type='reset' name='reset' value='Reset'/>
          <input type='button' name='button' value='Button'/>
          <input type='image' name='imagebutton'
                 width='100'
                 height='100'
                 src='https://beeth0ven.github.io/RxSwift-Chinese-Documentation/assets/Rx_Logo_M.png'
          />
        </form>
    `
  },
  {
    header: 'Hidden Form Control',
    render: (
      <div>
        <form>
          <p>This is page 10</p>
          <input type='hidden' name='hidden' value='Hidden'/>
          <input type='submit' name='submit' value='Submit'/>
          <input type='reset' name='reset' value='Reset'/>
        </form>
      </div>
    ),
    code: `
        <form>
          <p>This is page 10</p>
          <input type='hidden' name='hidden' value='Hidden'/>
          <input type='submit' name='submit' value='Submit'/>
          <input type='reset' name='reset' value='Reset'/>
        </form>
    `
  }
];

export const htmlForms = {
  header: 'HTML - Forms',
  examples
};