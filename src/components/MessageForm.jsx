import { useState } from 'react';
// import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = () => {
    const [value, setValue] = useState('');

    const handleSubmit = () => {
 
    }

    const handleChange = (event) => {
        // setValue(event.target.value);

        // isTyping(props, chatId);
    }


    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input 
                className="message-input"
                placeholder="Send a message"
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </form>
    )
}

export default MessageForm;