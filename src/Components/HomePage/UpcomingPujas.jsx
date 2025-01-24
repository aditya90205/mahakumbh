import { motion } from "framer-motion";
import image3 from "../../assets/image3.avif";
import image4 from "../../assets/image4.avif";
import image5 from "../../assets/image5.avif";
import image6 from "../../assets/image6.avif";

const UpcomingPujas = () => {
  const pujas = [
    {
      title: "Shri Mahakaleshwar Jyotirlinga",
      subtitle: "श्री महाकालेश्वर ज्योतिर्लिंग",
      buttonText: "BOOK PUJA NOW",
      image: `${image3}`,
    },
    {
      title: "Debt Relief Vishesha Puja",
      subtitle: "कर्ज मुक्ति विशेष पूजा",
      buttonText: "BOOK PUJA NOW",
      image: `${image4}`,
    },
    {
      title: "Gathbandhan Vishesha Puja",
      subtitle: "गठबंधन विशेष पूजा",
      buttonText: "BOOK PUJA NOW",
      image: `${image5}`,
    },
    {
      title: "Tarapith Vishesha Puja",
      subtitle: "तारापीठ विशेष पूजा",
      buttonText: "BOOK PUJA NOW",
      image: `${image6}`,
    },
  ];

  return (
    <div className="bg-orange-500 py-12 px-6 lg:px-56">
      {/* Heading */}
      <motion.h2
        className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Upcoming Pujas
      </motion.h2>

      {/* Pujas Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {pujas.map((puja, index) => (
          <div
            key={index}
            className="relative w-92 h-52 md:w-96 rounded-xl overflow-hidden shadow-lg"
          >
            {/* Image */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${puja.image})` }}
            ></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default UpcomingPujas;


