// in MessageParser.jsx
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello') || message.includes('hi')) {
      actions.handleHello();
    }
    if (message.includes('okay') || message.includes('yes') || message.includes('yah')) {
      actions.handleQtn1();
    }

    if (message.includes('1')) {
      actions.handleQtn2();
    }

    if (message.includes('2')) {
      actions.handleQtn3();
    }
    if (!message.includes('hello') && !message.includes('okay') && !message.includes('1') && !message.includes('2') && !message.includes('yes') && !message.includes('yah')) {
      actions.handleLast();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;