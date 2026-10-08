
'use client'
import Link from "next/link";


const NotFound = () => {
    return (
       <div className="min-h-screen flex items-center justify-center bg-red-50 px-5 container mx-auto"> <div className="text-center"> <p className="text-red-600 font-semibold text-lg mb-3"> 404 ERROR </p> <h1 className="text-6xl md:text-8xl font-bold text-red-700"> Page Not Found </h1> <p className="text-gray-600 text-lg mt-5"> Sorry, the page you are looking for does not exist. </p> <Link href="/" className="inline-block mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold" > Back to Home </Link> </div> </div>
    );
};

export default NotFound;