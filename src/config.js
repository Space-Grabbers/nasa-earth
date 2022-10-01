import { createChatBotMessage } from 'react-chatbot-kit';
import LinkToDoc from './components/LinkToDoc';
const botName = 'NASA Access Bot';



const config = {
    botName: botName,
    initialMessages: [createChatBotMessage(`Hi! I'm ${botName}.`), createChatBotMessage(`Do you mind helping NASA improve in Open Science. A reward of an exclusive NASA document awaits.`)],
    widgets: [
        {
            widgetName: 'linkToDoc',
            widgetFunc: (props) => <LinkToDoc {...props} />,
            props: {
                'link': "#",
                'title': "Access related exclusive document from here!"
            }
        },
    ],

};

export default config;