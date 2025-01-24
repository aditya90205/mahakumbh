// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
// const Footer = () => {
//   return (
//     <footer className="bg-orange-500 text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
//           {/* Left Section */}
//           <div className="space-y-4">
//             <h2 className="text-2xl font-bold">divineConnect</h2>
//             <p className="text-sm md:w-10/12 lg:w-8/12">
//               Explore our spiritual services, including Pujas, Chadhava, and
//               Prasad delivery, designed to enrich your spiritual journey. Embrace tradition and deepen your connection with the divine through our offerings.
//             </p>
//             <div className="flex space-x-4">
//               {/* Social Media Icons */}
//               <a
//                 href="#"
//                 className="text-white hover:text-gray-300"
//                 aria-label="Facebook"
//               >
//                   <FontAwesomeIcon icon={faFacebookF} size="lg" />
//               </a>
//               <a
//                 href="#"
//                 className="text-white hover:text-gray-300"
//                 aria-label="Instagram"
//               >
//                 <FontAwesomeIcon icon={faInstagram} size="lg" />
//               </a>
//               <a
//                 href="#"
//                 className="text-white hover:text-gray-300"
//                 aria-label="YouTube"
//               >
//                <FontAwesomeIcon icon={faYoutube} size="lg" />
//               </a>
//             </div>
//             <p className="text-xs">© 2025. All rights reserved.</p>
//           </div>
//           {/* Right Section */}
//           <div>
//             <h3 className="text-lg font-semibold">Contact Us</h3>
//             <p className="text-sm">+91 98123 45678</p>
//             <p className="text-sm">support@divineconnect.com</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start off-screen (below)
          animate={{ opacity: 1, y: 0 }} // End at original position
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            {/* Left Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">divineConnect</h2>
              <p className="text-sm md:w-10/12 lg:w-8/12">
                Explore our spiritual services, including Pujas, Chadhava, and
                Prasad delivery, designed to enrich your spiritual journey.
                Embrace tradition and deepen your connection with the divine
                through our offerings.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <a
                  href="#"
                  className="text-white hover:text-gray-300"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300"
                  aria-label="YouTube"
                >
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </a>
              </div>
              <p className="text-xs">© 2024. All rights reserved.</p>
            </div>
            {/* Right Section */}
            <div>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <p className="text-sm">+91 98123 45678</p>
              <p className="text-sm">support@divineconnect.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

