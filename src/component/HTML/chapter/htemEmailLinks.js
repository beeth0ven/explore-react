import React from 'react';

const examples = [
  {
    header: 'Email Link Example',
    render: (
      <div>
        <a href='mailto: abc@company,.com'>Send Email</a>
      </div>
    )
  },
  {
    header: 'Email Content Example',
    render: (
      <div>
        <a href='mailto: abc@company.com?subject=Feedback&body=MessageBody'>
          Send Email
        </a>
      </div>
    )
  }
];

export const htmlEmailLinks = {
  header: 'HTML - Email Links',
  examples
};