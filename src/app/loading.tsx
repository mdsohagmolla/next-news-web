

const LoadingPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-50"> {/* Spinner */} <div className="w-12 h-12 border-4 border-red-200 border-t-red-600 rounded-full animate-spin"></div> {/* Loading text */} <p className="mt-5 text-lg font-semibold text-red-600"> Loading... </p> <p className="mt-2 text-sm text-gray-500"> Please wait a moment </p> </div>
    );
};

export default LoadingPage;