import { useState } from 'react';
import axios from 'axios';

const MessageForm = ({ onMessageSent }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = localStorage.getItem('username');

        await axios.post('http://localhost:5000/messages', { username, message });

        setMessage('');
        if (onMessageSent) {
            onMessageSent();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="message-form-container">
            <div className="message-form">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="message-input"
                    placeholder="Type a message..."
                    required
                />
                <button type="submit" className="send-button">Send</button>
            </div>
        </form>
    );
};

export default MessageForm;
