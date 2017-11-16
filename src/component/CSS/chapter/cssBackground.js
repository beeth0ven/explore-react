import React from 'react';
import './cssBackground.css'

const examples = [
  {
    header: 'Background Color',
    render: (
      <div>
        <p style={{backgroundColor: 'yellow'}}>
          This text has a yellow background color.
        </p>
      </div>
    ),
    code: `
        <p style={{backgroundColor: 'yellow'}}>
          This text has a yellow background color.
        </p>
    `
  },
  {
    header: 'Background Image',
    render: (
      <div className='cssBackgroundBody'>
        <h1>Hello World!</h1>
      </div>
    ),
    code: `
      // HTML
      <div className='cssBackgroundBody'>
        <h1>Hello World!</h1>
      </div>
      
      // CSS
      .cssBackgroundBody {
        background-image: url("https://img.buzzfeed.com/buzzfeed-static/static/2016-02/8/13/enhanced/webdr15/original-9577-1454955166-3.jpg?downsize=715:*&output-format=auto&output-quality=auto");
        height: 200px;
      }
    `
  },
  {
    header: 'Repeat Background Image',
    render: (
      <div className='cssBackgroundRepeatImageBody'>
        <h1>Hello World!</h1>
      </div>
    ),
    code: `
      // HTML
      <div className='cssBackgroundRepeatImageBody'>
        <h1>Hello World!</h1>
      </div>
      
      // CSS
      .cssBackgroundRepeatImageBody {
        background-image: url("https://img.buzzfeed.com/buzzfeed-static/static/2016-02/8/13/enhanced/webdr15/original-9577-1454955166-3.jpg?downsize=715:*&output-format=auto&output-quality=auto");
        background-repeat: repeat;
        height: 200px;
      }
    `
  },
  {
    header: 'Background Image Position',
    render: (
      <div className='cssBackgroundImagePosintionBody'>
        <h1>Hello World!</h1>
      </div>
    ),
    code: `
      // HTML
      <div className='cssBackgroundImagePosintionBody'>
        <h1>Hello World!</h1>
      </div>
      
      // CSS
      .cssBackgroundImagePosintionBody {
        background-image: url("https://img.buzzfeed.com/buzzfeed-static/static/2016-02/8/13/enhanced/webdr15/original-9577-1454955166-3.jpg?downsize=715:*&output-format=auto&output-quality=auto");
        background-position: 100px 200px;
        height: 200px;
      }
    `
  },
  {
    header: 'Background Attachment',
    render: (
      <div className='cssBackgroundAttachment'>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
      </div>
    ),
    code: `
      // HTML
      <div className='cssBackgroundAttachment'>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
      </div>
      
      // CSS
      .cssBackgroundAttachment {
        background-image: url("https://img.buzzfeed.com/buzzfeed-static/static/2016-02/8/13/enhanced/webdr15/original-9577-1454955166-3.jpg?downsize=715:*&output-format=auto&output-quality=auto");
        background-repeat: no-repeat;
        background-attachment: fixed;
        overflow-y: scroll;
        height: 300px;
      }
    `
  },
  {
    header: 'Background Attachment Scroll',
    render: (
      <div className='cssBackgroundAttachment'>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
      </div>
    ),
    code: `
      // HTML
      <div className='cssBackgroundAttachmentScroll'>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
      </div>
      
      // CSS
      .cssBackgroundAttachment {
        background-image: url("https://img.buzzfeed.com/buzzfeed-static/static/2016-02/8/13/enhanced/webdr15/original-9577-1454955166-3.jpg?downsize=715:*&output-format=auto&output-quality=auto");
        background-repeat: no-repeat;
        background-attachment: fixed;
        overflow-y: scroll;
        height: 300px;
      }
    `
  }
];

export const cssBackground = {
  header: 'CSS - Background',
  examples
};