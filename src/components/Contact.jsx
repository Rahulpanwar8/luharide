import { CONTACT } from "../constants";
import { motion } from "framer-motion";

// Motion effect with a smaller delay
const motionEffect = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.5 }, // Reduced delay to 0.5 seconds
  }),
};

const Contact = () => {
  return (
    <motion.div
      className="border-t border-stone-900 p-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="text-center tracking-tighter">
        {/* Contact Heading */}
        <motion.h2
          className="my-10 text-4xl"
          variants={motionEffect}
          custom={1}  // Custom delay argument
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Contact
        </motion.h2>

        {/* Address */}
        <motion.p className="my-4 text-lg" variants={motionEffect} custom={2}>
          {CONTACT.address}
        </motion.p>

        {/* Phone Number */}
        <motion.p className="my-4 text-lg" variants={motionEffect} custom={3}>
          {CONTACT.phoneNo}
        </motion.p>

        {/* Email */}
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className="relative inline-block text-lg text-stone-300 hover:text-stone-400"
          variants={motionEffect}
          custom={4}
        >
          {CONTACT.email}
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 w-0 bg-stone-300"
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          ></motion.span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Contact;
