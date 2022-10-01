import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleHello = () => {
    const botMessage = createChatBotMessage('Do you mind helping NASA improve in Open Science. A reward of an exclusive NASA document awaits.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }

  const handleQtn1 = () => {
    const botMessage = createChatBotMessage(
      "To what extent do you think you have found what you were looking for on a scale of 1 - 5?",
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleQtn2 = () => {
    const botMessage = createChatBotMessage(
      "To what extent do you think you are going to use what you were looking for in your own work on a scale of 1 - 5?",
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleQtn3 = () => {
    const botMessage = createChatBotMessage(
      "Do you mind telling us where you come from?",
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleLast = () => {
    const botMessage = createChatBotMessage(
      "Thank you!",
      {
        widget: 'linkToDoc',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };



  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleQtn1,
            handleQtn2,
            handleQtn3,
            handleLast,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider