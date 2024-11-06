const SignUp = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 mb-12 max-w-md mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Create an Account
        </h3>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-left text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-left text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-left text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-left text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-mainRed text-white p-2 rounded mt-2 hover:bg-red-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-mainRed font-semibold hover:underline"
          >
            Log in
          </a>
        </p>

        <div className="flex items-center mt-6 mb-2">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button className="w-full flex items-center justify-center bg-white border border-gray-300 p-2 rounded hover:bg-gray-100 transition duration-300">
          <img
            src="/path-to-google-icon.png"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign Up with Google
        </button>
      </div>
      ;
    </>
  );
};

export default SignUp;
