import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Instagram, ChevronDown } from 'lucide-react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  
  return createPortal(
    <div 
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] flex items-center justify-center overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="my-8 mx-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl w-full max-w-xl relative animate-[slideIn_0.3s_ease-out] shadow-[0_8px_32px_rgba(59,130,246,0.2)]"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

const CardMember = ({ 
  name, 
  role, 
  shortName, 
  backgroundImage, 
  profileImage, 
  instagramLink 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card component */}
      <div 
        onClick={() => setIsOpen(true)}
        className=" group cursor-pointer relative w-auto h-[27rem] rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_32px_rgba(59,130,246,0.3)] transition-all duration-500"
      >
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute group-hover:grayscale-0 grayscale inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className='bg-white z-20 w-28 h-[0.25rem] rounded-2xl absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_3px_rgba(255,255,255,0.7)] transition-all duration-500 group-hover:w-32 group-hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.9),0_0_30px_10px_rgba(59,130,246,0.5)] group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-blue-200 group-hover:to-white'></div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#3b82f6] via-[#3b82f662] to-[#3b82f628]" />

        <div className="relative h-full flex flex-col justify-between items-center p-8">
          <div className="flex flex-col items-center space-y-2 text-white text-3xl mt-8">
            {shortName.split('').map((letter, index) => (
              <span key={index} className="hover:scale-110 transition-transform duration-200">
                {letter}
              </span>
            ))}
            <div className="flex flex-col items-center mt-8 absolute bottom-6">
              <ChevronDown className="w-6 h-6 text-white animate-bounce relative top-4" />
              <ChevronDown className="w-6 h-6 text-white animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
 <div className="flex flex-col bg-[#021011] rounded-2xl overflow-hidden p-5">
   {/* Image Section */}
   <div className="relative w-full h-[450px] rounded-xl overflow-hidden">
     <img
       src={profileImage}
       alt={name}
       className="w-full h-full object-cover"
     />
     
     {/* Gradient Overlay - Smoother & more sophisticated */}
     <div className="absolute inset-0 bg-gradient-to-t from-[#021011] via-[#021011]/70 to-transparent" />
     
     {/* Close button */}
     <button 
       onClick={() => setIsOpen(false)}
       className="absolute right-6 top-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md p-2.5 rounded-full border border-white/10 transition-all duration-300 group"
     >
       <X className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" />
     </button>

     {/* Enhanced Title Section with better typography and layout */}
     <div className="absolute bottom-0 left-0 right-0 p-8">
       <div className="">
         {/* Status Badge & Role - Improved spacing and hierarchy */}
         <div className="flex items-center space-x-3">
          
           <div className="flex items-center gap-1">
           <span className="font-semibold text-white tracking-wide">{role}</span>
           <span className="font-semibold text-white tracking-wide">Dacinzz</span>
             <span className="font-bold text-blue-500">Class</span>
           </div>
           {/* Decorative line with enhanced gradient */}
           <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-500/80 via-blue-500/30 to-transparent rounded-full"></div>
         </div>
         
         {/* Name with enhanced styling */}
         <div className="relative">
           {/* Subtle glow effect behind text */}
           <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-blue-500/10 to-transparent blur-2xl"></div>
           <h2 className="relative text-5xl font-bold text-white tracking-tight leading-tight relativ right-[1px]">
             {name}
           </h2>
         </div>
       </div>
     </div>
   </div>

   {/* Enhanced Instagram Button Section with gradient fade */}
   <div className="pt-6 relative">
     {/* Gradient fade effect */}
     <div className="absolute -top-20 left-0 right-0 h-20 bg-gradient-to-t from-[#021011] to-transparent"></div>
     
     <a 
       href={instagramLink}
       target="_blank"
       rel="noopener noreferrer"
       className="group flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] 
                  hover:from-[#60a5fa] hover:to-[#93c5fd] py-4 rounded-full transition-all duration-300
                  shadow-[0_4px_20px_rgba(59,130,246,0.2)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.4)]"
     >
       <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
       <span className="text-white font-medium text-lg tracking-wide">Follow on Instagram</span>
     </a>
   </div>
 </div>
</Modal>

      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default CardMember;