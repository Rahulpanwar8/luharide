import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "📢 Apni Gadi Ka Advertisement Lagaye",
    description:
      "Car, taxi ya transport vehicle ko rent/booking ke liye list karein. Local customers tak turant pahunch banayein.",
  },
  {
    title: "🚌 Outstation Ride Available Hai?",
    description:
      "Outstation route par chalne wali gadi ko ad karein aur direct passengers paayein.",
  },
  {
    title: "🚛 Transport Vehicle ke Ads",
    description:
      "Goods ya loading vehicle promote karein. Vyapari aur dukandaar seedhe contact kar sakte hain.",
  },
  {
    title: "🚕 Daily Ride ya Pooling Gadi",
    description:
      "Daily route pr chalne wali gadi ko ride-sharing ke liye promote karein. Commuters tak easily pahunch banayein.",
  },
  {
    title: "📞 Ad Lagane ke liye Contact Karein - 7060618851",
    description:
      "Kisi bhi type ke vahan ka ad lagane ke liye contact karein. Hamari team aapki madad karegi.",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white flex flex-col items-center px-4 py-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl sm:text-4xl font-extrabold mb-10 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent"
      >
        🚨 Notice Board
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl p-6 space-y-6"
      >
        {PROJECTS.map((notice, index) => (
          <motion.div
            key={index}
            className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-1">{notice.title}</h3>
            <p className="text-white/90 text-sm">{notice.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
