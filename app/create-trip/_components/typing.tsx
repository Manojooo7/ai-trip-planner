import React from 'react';

export default function Typing() {
  return (
    <div className="flex items-center space-x-2 p-2">
      <div className="typing-animation">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <style jsx>{`
        .typing-animation {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .dot {
          width: 8px;
          height: 8px;
          background-color: #666;
          border-radius: 50%;
          animation: bounce 1.4s infinite;
        }
        
        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}