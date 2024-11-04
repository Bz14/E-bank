import {
  FaUniversity,
  FaPiggyBank,
  FaWallet,
  FaChartLine,
} from "react-icons/fa";

const FeaturesOverview = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-mainRed mb-8">
          Our Key Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaUniversity className="text-4xl text-mainRed mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Online Banking</h3>
            <p className="text-gray-600">
              Manage your accounts and transactions anytime, anywhere.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaPiggyBank className="text-4xl text-mainRed mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Savings Accounts</h3>
            <p className="text-gray-600">
              Secure and grow your savings with competitive interest rates.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaWallet className="text-4xl text-mainRed mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Loans</h3>
            <p className="text-gray-600">
              Flexible loan options to meet your financial goals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaChartLine className="text-4xl text-mainRed mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Investment Options</h3>
            <p className="text-gray-600">
              Explore our investment solutions to grow your wealth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
