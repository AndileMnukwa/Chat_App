const MyMessage = ({ message }) => {
    return (
        <div className="message-row">
            {message?.attachments?.length > 0 ? (
                <img
                    src={message.attachments[0].file}
                    alt="message-attachment"
                    className="message-image"
                    style={{ float: 'right' }}
                />
            ) : (
                <div className="message" style={{ float: 'right', backgroundColor: '#3B2A50', color: 'white' }}>
                    {message.text}
                </div>
            )}
        </div>
    );
};

export default MyMessage;
