// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       {/* Top bar with Hindi text */}
//       <div className="bg-white text-black text-center text-sm md:text-lg font-medium py-3">
//         इस महाकुंभ, पायें गंगाजल सीधे त्रिवेणी संगम से !!
//       </div>

//       {/* Main Navbar */}
//       <nav className="sticky top-0 bg-orange-500 text-white shadow-md z-50">
//         <div className="container mx-auto flex justify-between items-center px-4 py-8">
//           {/* Logo */}
//           <div className="text-2xl md:text-4xl font-bold flex items-center">
//             <img src="/divineConnectLogo.png" alt="logo" className="h-20" />
//             <h1 className="ml-2">divineConnect</h1>
//           </div>

//           {/* Menu items for large screens */}
//           <div className="hidden md:flex space-x-8 text-lg">
//             <a href="#" className="hover:underline">
//               Home
//             </a>
//             <a href="#" className="hover:underline">
//               Puja
//             </a>
//             <a href="#" className="hover:underline">
//               Chadhava
//             </a>
//             <a href="#" className="hover:underline">
//               Prasad
//             </a>
//           </div>

//           {/* Hamburger icon for small screens */}
//           <button
//             className="md:hidden text-3xl focus:outline-none"
//             onClick={toggleMenu}
//           >
//             {isOpen ? "✕" : "☰"}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {isOpen && (
//           <div className="md:hidden bg-orange-500 text-white absolute top-25 left-0 w-full h-[] z-40 transition-transform duration-300">
//             <div className="flex flex-col items-start space-y-4 px-6 py-4 text-lg">
//               <a href="#" className="hover:underline" onClick={toggleMenu}>
//                 Home
//               </a>
//               <a href="#" className="hover:underline" onClick={toggleMenu}>
//                 Puja
//               </a>
//               <a href="#" className="hover:underline" onClick={toggleMenu}>
//                 Chadhava
//               </a>
//               <a href="#" className="hover:underline" onClick={toggleMenu}>
//                 Prasad
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;



import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Top bar with Hindi text */}

      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-orange-500 text-white shadow-md z-50">
      <div className="bg-white text-black text-center text-sm md:text-lg font-medium py-3">
        इस महाकुंभ, पायें गंगाजल सीधे त्रिवेणी संगम से !!
      </div>
        <div className="container mx-auto flex justify-between items-center px-4 py-8">
          {/* Logo */}
          <div className="text-2xl md:text-4xl font-bold flex items-center">
            <img src="/divineConnectLogo.png" alt="logo" className="h-20" />
            <h1 className="ml-2">divineConnect</h1>
          </div>

          {/* Menu items for large screens */}
          <div className="hidden md:flex space-x-8 text-lg">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Puja
            </a>
            <a href="#" className="hover:underline">
              Chadhava
            </a>
            <a href="#" className="hover:underline">
              Prasad
            </a>
          </div>

          {/* Hamburger icon for small screens */}
          <button
            className="md:hidden text-3xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-orange-500 text-white absolute top-25 left-0 w-full h-[] z-40 transition-transform duration-300">
            <div className="flex flex-col items-start space-y-4 px-6 py-4 text-lg">
              <a href="#" className="hover:underline" onClick={toggleMenu}>
                Home
              </a>
              <a href="#" className="hover:underline" onClick={toggleMenu}>
                Puja
              </a>
              <a href="#" className="hover:underline" onClick={toggleMenu}>
                Chadhava
              </a>
              <a href="#" className="hover:underline" onClick={toggleMenu}>
                Prasad
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

