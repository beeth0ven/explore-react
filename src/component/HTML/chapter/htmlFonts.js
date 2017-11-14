import React from 'react';

const examples = [
  {
    header: 'Setting Font Size',
    render: (
      <div>
        <font size='1'>Font size = '1'</font><br/>
        <font size='2'>Font size = '2'</font><br/>
        <font size='3'>Font size = '3'</font><br/>
        <font size='4'>Font size = '4'</font><br/>
        <font size='5'>Font size = '5'</font><br/>
        <font size='6'>Font size = '6'</font><br/>
        <font size='7'>Font size = '7'</font>
      </div>
    ),
    code:
`<font size='1'>Font size = '1'</font><br/>
<font size='2'>Font size = '2'</font><br/>
<font size='3'>Font size = '3'</font><br/>
<font size='4'>Font size = '4'</font><br/>
<font size='5'>Font size = '5'</font><br/>
<font size='6'>Font size = '6'</font><br/>
<font size='7'>Font size = '7'</font>`
  },
  {
    header: 'Relative Font Size',
    render: (
      <div>
        <font size='-1'>Font size = '-1'</font><br/>
        <font size='+1'>Font size = '+1'</font><br/>
        <font size='+2'>Font size = '+2'</font><br/>
        <font size='+3'>Font size = '+3'</font><br/>
        <font size='+4'>Font size = '+4'</font>
      </div>
    ),
    code:
`<font size='-1'>Font size = '-1'</font><br/>
<font size='+1'>Font size = '+1'</font><br/>
<font size='+2'>Font size = '+2'</font><br/>
<font size='+3'>Font size = '+3'</font><br/>
<font size='+4'>Font size = '+4'</font>`
  },
  {
    header: 'Font Face',
    render: (
      <div>
        <font face='Times New Roman' size='5'>Times New Roman</font><br/>
        <font face='Verdana' size='5'>Verdana</font><br/>
        <font face='Comic sans MS' size='5'>Comic sans MS</font><br/>
        <font face='WildWest' size='5'>WildWest</font><br/>
        <font face='Bedrock' size='5'>Bedrock</font>
      </div>
    ),
    code:
`<font face='Times New Roman' size='5'>Times New Roman</font><br/>
<font face='Verdana' size='5'>Verdana</font><br/>
<font face='Comic sans MS' size='5'>Comic sans MS</font><br/>
<font face='WildWest' size='5'>WildWest</font><br/>
<font face='Bedrock' size='5'>Bedrock</font>`
  },
  {
    header: 'Setting Font Color',
    render: (
      <div>
        <font color='#FF00FF'>This text is in pink</font><br/>
        <font color='red'>This text is red</font>
      </div>
    ),
    code:
`<font color='#FF00FF'>This text is in pink</font><br/>
<font color='red'>This text is red</font>`
  },
  {
    header: 'Setting Basefont Color',
    render: (
      <div>
        <basefont face='arial, verdana, sans-serif' size='2' color='#ff0000'/>
        <p>This is the page's default font.</p>
        <h2>Example of the &lt;basefont&gt; Element</h2>

        <p><font size='+2' color='#a9a9a9'>
          This is darkgray text with two sizes larger
        </font>
        </p>

        <p><font face='courier' size='-1' color='#000000'>
          It is a courier font, a size smaller and black in color.
        </font>
        </p>
      </div>
    ),
    code:
`<basefont face='arial, verdana, sans-serif' size='2' color='#ff0000'/>
<p>This is the page's default font.</p>
<h2>Example of the &lt;basefont&gt; Element</h2>

<p><font size='+2' color='#a9a9a9'>
  This is darkgray text with two sizes larger
</font>
</p>

<p><font face='courier' size='-1' color='#000000'>
  It is a courier font, a size smaller and black in color.
</font>
</p>`
  }
];

export const htmlFonts = {
  header: 'HTML - Fonts',
  examples
};