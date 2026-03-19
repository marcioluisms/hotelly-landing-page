import { useState } from 'react';
import ChatToggleButton from './ChatToggleButton';
import ChatWindow from './ChatWindow';
import { useChat } from './useChat';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const {
    messages,
    isLoading,
    turnCount,
    maxTurns,
    maxInputLength,
    sendMessage,
    resetSession,
  } = useChat();

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    if (!hasOpened) setHasOpened(true);
  };

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <ChatWindow
        isOpen={isOpen}
        messages={messages}
        isLoading={isLoading}
        turnCount={turnCount}
        maxTurns={maxTurns}
        maxInputLength={maxInputLength}
        onSend={sendMessage}
        onClose={handleClose}
        onReset={resetSession}
      />
      <ChatToggleButton isOpen={isOpen} onClick={handleToggle} hasUnread={!hasOpened} />
    </>
  );
}
