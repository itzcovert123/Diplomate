import React, { useState } from "react";
import "./chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const newMessage = { role: "user", content: inputText };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputText("");
    setIsLoading(true);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: "Bearer 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",
          "HTTP-Referer": "https://your-site.com",
          "X-Title": "DiploGuide",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat-v3-0324:free",
          messages: [{ role: "user", content: inputText }],
        }),
      });

      const data = await response.json();
      const botReplyContent = data?.choices?.[0]?.message?.content || "Sorry, I couldn't understand that.";
      const botReply = { role: "bot", content: botReplyContent };

      setMessages((prevMessages) => [...prevMessages, botReply]);
    } catch (error) {
      console.error("Error fetching API:", error);
      const botReply = { role: "bot", content: "Oops! Something went wrong. Please try again." };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    }

    setIsLoading(false);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setInputText(voiceText);
    };

    recognition.onerror = (err) => {
      alert("Speech recognition error: " + err.error);
    };

    recognition.start();
  };

  return (
    <div className="chatbot">
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.role === "bot" ? (
              <div className="bot-message-wrapper">
                <div className="bot-message-content">
                  {msg.content.split("\n").map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
                <button className="copy-button" onClick={() => handleCopy(msg.content)}>
                  Copy
                </button>
              </div>
            ) : (
              msg.content.split("\n").map((line, idx) => <p key={idx}>{line}</p>)
            )}
          </div>
        ))}
        {isLoading && (
          <div className="message bot loading">
            <div className="dot-flashing"></div>
          </div>
        )}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button onClick={handleVoiceInput}>🎙</button>
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
