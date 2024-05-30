import { useEffect, useState } from 'react';
import axios from 'axios';
import TheirMessage from './TheirMessage';
import MyMessage from './MyMessage';
import MessageForm from './MessageForm';

const ChatFeed = () => {
    const [messages, setMessages] = useState([]);

    const fetchMessages = async () => {
        const response = await axios.get('http://localhost:5000/messages');
        setMessages(response.data);
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const renderMessages = () => {
        const username = localStorage.getItem('username');
        let lastMessage = null;

        return messages.map((message, index) => {
            const isMyMessage = message.username === username;
            const messageProps = { message, lastMessage };

            lastMessage = message;

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    {isMyMessage ? (
                        <MyMessage {...messageProps} />
                    ) : (
                        <TheirMessage {...messageProps} />
                    )}
                </div>
            );
        });
    };

    return (
        <div className="chat-feed">
            <div className="messages">
                {renderMessages()}
            </div>
            <MessageForm onMessageSent={fetchMessages} />
        </div>
    );
};

export default ChatFeed;
