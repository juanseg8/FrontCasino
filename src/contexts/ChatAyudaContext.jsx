import React, { createContext, useContext, useState } from "react";

const HelpChatContext = createContext();

export const HelpChatProvider = ({ children }) => {
  const [isHelpChatOpen, setHelpChatOpen] = useState(false);

  return (
    <HelpChatContext.Provider value={{ isHelpChatOpen, setHelpChatOpen }}>
      {children}
    </HelpChatContext.Provider>
  );
};

export const useHelpChat = () => useContext(HelpChatContext);
