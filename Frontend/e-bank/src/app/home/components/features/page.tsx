import {
  FaUniversity,
  FaPiggyBank,
  FaWallet,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";

const FeaturesOverview = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-mainRed mb-8">
          Our Key Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <FaUniversity className="text-4xl text-mainRed mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Online Banking</h3>
            <p className="text-gray-600">
              Manage your accounts and transactions anytime, anywhere.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <FaChartLine className="text-4xl text-mainRed mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Investment Options</h3>
            <p className="text-gray-600">
              Explore our investment solutions to grow your wealth.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <FaPiggyBank className="text-4xl text-mainRed mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Savings Accounts</h3>
            <p className="text-gray-600">
              Secure and grow your savings with competitive interest rates.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <FaWallet className="text-4xl text-mainRed mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Loans</h3>
            <p className="text-gray-600">
              Flexible loan options to meet your financial goals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
