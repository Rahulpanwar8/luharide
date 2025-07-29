import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

// Variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

// Variants for individual items
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Variants for technologies
const techVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const Experience = () => {
  return (
    <div className="p-4">
      {/* Section Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      {/* Experience List */}
      <motion.div
        className="experience-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            variants={itemVariants}
          >
            {/* Year */}
            <motion.div
              className="w-full lg:w-1/4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
            </motion.div>

            {/* Role and Description */}
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              variants={itemVariants}
            >
              {/* Role and Company */}
              <h3 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-stone-500">{experience.company}</span>
              </h3>

              {/* Description */}
              <p className="mb-4 text-stone-400">{experience.description}</p>

              {/* Technologies */}
              <motion.div
                className="tech-container flex flex-wrap"
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
              >
                {experience.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                    variants={techVariants}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
