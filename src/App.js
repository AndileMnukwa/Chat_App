import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="515dafbe-0670-4819-bcfd-2053e577bc2c"
            userName="reeman"
            userSecret="12345678"
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
            />
    );
}

export default App;