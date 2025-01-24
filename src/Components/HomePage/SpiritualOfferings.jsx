import { motion } from "framer-motion";
import image1 from "../../assets/image1.avif";
import image2 from "../../assets/image2.avif";

const SpiritualOfferings = () => {
  const offerings = [
    {
      title: "Sacred Puja Services",
      description:
        "Experience personalized pujas tailored to your spiritual needs, performed by experienced priests for blessings.",
      image: `${image1}`,
    },
    {
      title: "Chadhava Offerings",
      description:
        "Choose from a variety of chadhava options to honor your loved deity and fulfill spiritual commitments.",
      image: `${image2}`,
    },
  ];

  return (
    <div className="bg-[#fde5c7] py-12 px-6 md:px-12">
      {/* Section Heading */}
      <div className="text-center mb-12 md:w-1/2 lg:w-4/12 m-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Spiritual Offerings
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-600" 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Explore our unique spiritual services designed to enhance your
          connection with the divine and community.
        </motion.p>
      </div>

      {/* Offerings */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-2 items-start"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
          >
            {/* Image */}
            <div
              className="w-full lg:w-[27rem] h-64 bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: `url(${offering.image})` }}
            ></div>

            {/* Content */}
            <div className="mt-4 lg:w-[60%]">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {offering.title}
              </h3>
              <p className="text-gray-600 ">{offering.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SpiritualOfferings;

