import React from 'react';
import { Send, Phone, Video, MoreVertical, Smile, Paperclip, User, MessageCircle, Search } from 'lucide-react';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'other';
  time: string;
  avatar?: string;
}

interface Contact {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  avatar?: string;
  online?: boolean;
  unread?: number;
}

export function ChatSection() {
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState<Message[]>([
    { id: 1, text: 'Hey! How are you?', sender: 'other', time: '10:30 AM' },
    { id: 2, text: 'I\'m doing great! Thanks for asking 😊', sender: 'user', time: '10:32 AM' },
    { id: 3, text: 'That\'s wonderful! Did you check out the new Liquid Glass design system?', sender: 'other', time: '10:33 AM' },
    { id: 4, text: 'Yes! The glassmorphism effects are absolutely stunning!', sender: 'user', time: '10:35 AM' },
    { id: 5, text: 'I love the backdrop blur and the gradient colors', sender: 'user', time: '10:35 AM' },
    { id: 6, text: 'Same here! The components are so polished and modern.', sender: 'other', time: '10:37 AM' },
  ]);

  const [selectedContact, setSelectedContact] = React.useState(1);
  const [showContacts, setShowContacts] = React.useState(true);

  const contacts: Contact[] = [
    { id: 1, name: 'Alex Johnson', lastMessage: 'Same here! The components...', time: '10:37 AM', online: true, unread: 0 },
    { id: 2, name: 'Sarah Williams', lastMessage: 'See you tomorrow!', time: '9:15 AM', online: true, unread: 2 },
    { id: 3, name: 'Mike Chen', lastMessage: 'Thanks for the help', time: 'Yesterday', online: false, unread: 0 },
    { id: 4, name: 'Emma Davis', lastMessage: 'Let\'s catch up soon', time: 'Yesterday', online: true, unread: 0 },
    { id: 5, name: 'James Wilson', lastMessage: 'Perfect! That works for me', time: 'Tuesday', online: false, unread: 0 },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-white">Chat</h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Modern messaging interface with real-time chat, contact list, and glassmorphism design
        </p>
      </div>

      {/* Desktop Chat Container */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white text-center">Desktop View</h3>
        <div className="
          md:backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
          rounded-3xl
          overflow-hidden
          shadow-2xl
        ">
          <div className="flex h-[600px] md:h-[700px]">
            {/* Contacts Sidebar - Hidden on mobile when chat is open */}
            <div className={`
              ${showContacts ? 'w-full md:w-80' : 'hidden md:block md:w-80'}
              border-r border-white/10
              flex flex-col
              bg-white/5
            `}>
              {/* Contacts Header */}
              <div className="p-4 border-b border-white/10">
                <h3 className="text-white text-lg font-bold mb-3">Messages</h3>
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                  <input
                    type="text"
                    placeholder="Search contacts..."
                    className="
                      w-full pl-10 pr-4 py-2 
                      bg-[var(--glass-bg-light)] 
                      border border-[var(--glass-border)] 
                      rounded-xl
                      text-white placeholder-white/40
                      focus:outline-none focus:border-blue-400/50
                      transition-colors
                    "
                  />
                </div>
              </div>

              {/* Contacts List */}
              <div className="flex-1 overflow-y-auto scrollbar-hide">
                {contacts.map((contact) => (
                  <button
                    key={contact.id}
                    onClick={() => {
                      setSelectedContact(contact.id);
                      setShowContacts(false);
                    }}
                    className={`
                      w-full p-4 flex items-start gap-3
                      border-b border-white/5
                      transition-all duration-200
                      ${selectedContact === contact.id 
                        ? 'bg-[var(--glass-bg-light)] border-l-4 border-l-blue-400' 
                        : 'hover:bg-white/5'
                      }
                    `}
                  >
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-[var(--glass-border)]">
                        <User className="text-white/70" size={20} />
                      </div>
                      {contact.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900" />
                      )}
                    </div>

                    {/* Contact Info */}
                    <div className="flex-1 text-left min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-medium truncate">{contact.name}</span>
                        <span className="text-white/40 text-xs flex-shrink-0 ml-2">{contact.time}</span>
                      </div>
                      <p className="text-white/60 text-sm truncate">{contact.lastMessage}</p>
                    </div>

                    {/* Unread Badge */}
                    {contact.unread > 0 && (
                      <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{contact.unread}</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Window */}
            <div className={`
              ${showContacts ? 'hidden md:flex' : 'flex'}
              flex-1 flex-col
            `}>
              {/* Chat Header */}
              <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-3">
                  {/* Back Button - Mobile Only */}
                  <button
                    onClick={() => setShowContacts(true)}
                    className="md:hidden text-white/70 hover:text-white"
                  >
                    ←
                  </button>

                  {/* Contact Avatar */}
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-[var(--glass-border)]">
                      <User className="text-white/70" size={18} />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900" />
                  </div>

                  {/* Contact Name */}
                  <div>
                    <h4 className="text-white font-medium">
                      {contacts.find(c => c.id === selectedContact)?.name}
                    </h4>
                    <p className="text-white/60 text-xs">Online</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <button className="w-9 h-9 rounded-lg bg-[var(--glass-bg-light)] hover:bg-white/20 flex items-center justify-center transition-colors">
                    <Phone className="text-white/70" size={18} />
                  </button>
                  <button className="w-9 h-9 rounded-lg bg-[var(--glass-bg-light)] hover:bg-white/20 flex items-center justify-center transition-colors">
                    <Video className="text-white/70" size={18} />
                  </button>
                  <button className="w-9 h-9 rounded-lg bg-[var(--glass-bg-light)] hover:bg-white/20 flex items-center justify-center transition-colors">
                    <MoreVertical className="text-white/70" size={18} />
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-end gap-2 max-w-[80%] md:max-w-[70%]`}>
                      {msg.sender === 'other' && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-[var(--glass-border)] flex-shrink-0">
                          <User className="text-white/70" size={14} />
                        </div>
                      )}

                      <div className="flex flex-col gap-1">
                        <div className={`
                          px-4 py-2 rounded-2xl
                          md:backdrop-blur-md
                          ${msg.sender === 'user' 
                            ? 'bg-gradient-to-br from-blue-500/40 to-purple-500/40 border border-blue-400/30 rounded-br-sm' 
                            : 'bg-[var(--glass-bg-light)] border border-[var(--glass-border)] rounded-bl-sm'
                          }
                        `}>
                          <p className="text-white text-sm leading-relaxed">{msg.text}</p>
                        </div>
                        <span className={`text-white/40 text-xs ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                          {msg.time}
                        </span>
                      </div>

                      {msg.sender === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-500/30 flex items-center justify-center border border-[var(--glass-border)] flex-shrink-0">
                          <User className="text-white/70" size={14} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-white/10 bg-white/5">
                <div className="flex items-end gap-2">
                  {/* Attachment Button */}
                  <button className="w-10 h-10 rounded-xl bg-[var(--glass-bg-light)] hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0">
                    <Paperclip className="text-white/70" size={20} />
                  </button>

                  {/* Message Input */}
                  <div className="flex-1 relative">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type a message..."
                      rows={1}
                      className="
                        w-full px-4 py-3 pr-12
                        bg-[var(--glass-bg-light)]
                        border border-[var(--glass-border)]
                        rounded-xl
                        text-white placeholder-white/40
                        focus:outline-none focus:border-blue-400/50
                        transition-colors
                        resize-none
                        max-h-32
                      "
                    />
                    <button className="absolute right-3 bottom-3 text-white/70 hover:text-white transition-colors">
                      <Smile size={20} />
                    </button>
                  </div>

                  {/* Send Button */}
                  <button
                    onClick={handleSendMessage}
                    className="
                      w-10 h-10 rounded-xl
                      bg-gradient-to-br from-blue-500 to-purple-600
                      hover:from-blue-600 hover:to-purple-700
                      flex items-center justify-center
                      transition-all duration-200
                      flex-shrink-0
                      shadow-lg shadow-blue-500/30
                    "
                  >
                    <Send className="text-white" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="
          p-6 rounded-2xl
          backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
        ">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 flex items-center justify-center mb-4">
            <MessageCircle className="text-blue-300" size={24} />
          </div>
          <h3 className="text-white text-lg font-bold mb-2">Real-time Messaging</h3>
          <p className="text-white/60 text-sm">
            Send and receive messages instantly with smooth animations and transitions
          </p>
        </div>

        {/* Feature 2 */}
        <div className="
          p-6 rounded-2xl
          backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
        ">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-500/20 flex items-center justify-center mb-4">
            <User className="text-purple-300" size={24} />
          </div>
          <h3 className="text-white text-lg font-bold mb-2">Contact Management</h3>
          <p className="text-white/60 text-sm">
            Easily manage and search through your contacts with online status indicators
          </p>
        </div>

        {/* Feature 3 */}
        <div className="
          p-6 rounded-2xl
          backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-[var(--glass-border)]
        ">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400/20 to-purple-500/20 flex items-center justify-center mb-4">
            <Phone className="text-pink-300" size={24} />
          </div>
          <h3 className="text-white text-lg font-bold mb-2">Voice & Video Calls</h3>
          <p className="text-white/60 text-sm">
            Seamlessly switch from text to voice or video calls with one tap
          </p>
        </div>
      </div>

      {/* Mobile Responsive Note */}
      <div className="
        p-6 rounded-2xl
        backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10
        border border-blue-400/30
      ">
        <h3 className="text-white text-lg font-bold mb-2 flex items-center gap-2">
          <span className="text-2xl">📱</span>
          Mobile Responsive
        </h3>
        <p className="text-white/70">
          The chat interface automatically adapts between desktop and mobile views. On mobile devices, 
          the contact list and chat window switch between each other for optimal screen usage.
        </p>
      </div>

      {/* Mobile View Preview */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white text-center">Mobile View</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mobile - Contact List View */}
          <div className="
            backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
            border border-[var(--glass-border)]
            rounded-3xl
            overflow-hidden
            shadow-2xl
            max-w-sm mx-auto w-full
          ">
            <div className="flex flex-col h-[600px]">
              {/* Mobile Contacts Header */}
              <div className="p-4 border-b border-white/10 bg-white/5">
                <h3 className="text-white text-lg font-bold mb-3 text-center">Messages</h3>
                {/* Mobile Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                  <input
                    type="text"
                    placeholder="Search contacts..."
                    className="
                      w-full pl-10 pr-4 py-2 
                      bg-[var(--glass-bg-light)] 
                      border border-[var(--glass-border)] 
                      rounded-xl
                      text-white placeholder-white/40
                      focus:outline-none focus:border-blue-400/50
                      transition-colors
                    "
                  />
                </div>
              </div>

              {/* Mobile Contacts List */}
              <div className="flex-1 overflow-y-auto scrollbar-hide">
                {contacts.slice(0, 4).map((contact) => (
                  <div
                    key={contact.id}
                    className="
                      w-full p-4 flex items-start gap-3
                      border-b border-white/5
                      hover:bg-white/5
                      transition-all duration-200
                    "
                  >
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-[var(--glass-border)]">
                        <User className="text-white/70" size={20} />
                      </div>
                      {contact.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900" />
                      )}
                    </div>

                    {/* Contact Info */}
                    <div className="flex-1 text-left min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-medium truncate">{contact.name}</span>
                        <span className="text-white/40 text-xs flex-shrink-0 ml-2">{contact.time}</span>
                      </div>
                      <p className="text-white/60 text-sm truncate">{contact.lastMessage}</p>
                    </div>

                    {/* Unread Badge */}
                    {contact.unread > 0 && (
                      <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{contact.unread}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Label */}
              <div className="p-3 bg-white/5 border-t border-white/10">
                <p className="text-white/60 text-xs text-center">Contact List View</p>
              </div>
            </div>
          </div>

          {/* Mobile - Chat Window View */}
          <div className="
            backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
            border border-[var(--glass-border)]
            rounded-3xl
            overflow-hidden
            shadow-2xl
            max-w-sm mx-auto w-full
          ">
            <div className="flex flex-col h-[600px]">
              {/* Mobile Chat Header */}
              <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-3">
                  {/* Back Button */}
                  <button className="text-white/70 hover:text-white text-lg">
                    ←
                  </button>

                  {/* Contact Avatar */}
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-[var(--glass-border)]">
                      <User className="text-white/70" size={18} />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900" />
                  </div>

                  {/* Contact Name */}
                  <div>
                    <h4 className="text-white font-medium text-sm">Alex Johnson</h4>
                    <p className="text-white/60 text-xs">Online</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 rounded-lg bg-[var(--glass-bg-light)] hover:bg-white/20 flex items-center justify-center transition-colors">
                    <Phone className="text-white/70" size={16} />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[var(--glass-bg-light)] hover:bg-white/20 flex items-center justify-center transition-colors">
                    <Video className="text-white/70" size={16} />
                  </button>
                </div>
              </div>

              {/* Mobile Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                {/* Other's message */}
                <div className="flex justify-start">
                  <div className="flex items-end gap-2 max-w-[85%]">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-[var(--glass-border)] flex-shrink-0">
                      <User className="text-white/70" size={12} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="px-3 py-2 rounded-2xl md:backdrop-blur-md bg-[var(--glass-bg-light)] border border-[var(--glass-border)] rounded-bl-sm">
                        <p className="text-white text-sm">Hey! How are you?</p>
                      </div>
                      <span className="text-white/40 text-xs">10:30 AM</span>
                    </div>
                  </div>
                </div>

                {/* User's message */}
                <div className="flex justify-end">
                  <div className="flex items-end gap-2 max-w-[85%]">
                    <div className="flex flex-col gap-1">
                      <div className="px-3 py-2 rounded-2xl md:backdrop-blur-md bg-gradient-to-br from-blue-500/40 to-purple-500/40 border border-blue-400/30 rounded-br-sm">
                        <p className="text-white text-sm">I'm doing great! Thanks 😊</p>
                      </div>
                      <span className="text-white/40 text-xs text-right">10:32 AM</span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-500/30 flex items-center justify-center border border-[var(--glass-border)] flex-shrink-0">
                      <User className="text-white/70" size={12} />
                    </div>
                  </div>
                </div>

                {/* Other's message */}
                <div className="flex justify-start">
                  <div className="flex items-end gap-2 max-w-[85%]">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-[var(--glass-border)] flex-shrink-0">
                      <User className="text-white/70" size={12} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="px-3 py-2 rounded-2xl md:backdrop-blur-md bg-[var(--glass-bg-light)] border border-[var(--glass-border)] rounded-bl-sm">
                        <p className="text-white text-sm">The Liquid Glass design is amazing!</p>
                      </div>
                      <span className="text-white/40 text-xs">10:33 AM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Input Area */}
              <div className="p-3 border-t border-white/10 bg-white/5">
                <div className="flex items-center gap-2">
                  {/* Attachment Button */}
                  <button className="w-9 h-9 rounded-xl bg-[var(--glass-bg-light)] hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0">
                    <Paperclip className="text-white/70" size={18} />
                  </button>

                  {/* Message Input */}
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="
                        w-full px-3 py-2 pr-10
                        bg-[var(--glass-bg-light)]
                        border border-[var(--glass-border)]
                        rounded-xl
                        text-white text-sm placeholder-white/40
                        focus:outline-none focus:border-blue-400/50
                        transition-colors
                      "
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70">
                      <Smile size={18} />
                    </button>
                  </div>

                  {/* Send Button */}
                  <button className="
                    w-9 h-9 rounded-xl
                    bg-gradient-to-br from-blue-500 to-purple-600
                    flex items-center justify-center
                    flex-shrink-0
                    shadow-lg shadow-blue-500/30
                  ">
                    <Send className="text-white" size={18} />
                  </button>
                </div>
              </div>

              {/* Label */}
              <div className="p-3 bg-white/5 border-t border-white/10">
                <p className="text-white/60 text-xs text-center">Chat Window View</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code Block */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white text-center">Code Sample</h3>
        <CodeBlock code={sectionCodeSamples.chatSection} />
      </div>
    </div>
  );
}