import { useNavigate } from "react-router-dom";
export default function EmailResponse(props) {
const navigate = useNavigate();
    

    return (
       <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
     

      {/* Icon */}
      <div className="text-green-500  rounded-full text-6xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg></div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">
        Thank You!
      </h1>

      {/* Message */}
      <p className="text-gray-600 mb-6">
        Your request has been submitted successfully. We will contact you soon.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/")}
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        Go to Home
      </button>
    </div>
  );
}
