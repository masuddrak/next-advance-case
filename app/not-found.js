import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center mt-40">
      <div>
        <h2 className="text-4xl text-center">Not Found This Page Currently</h2>
        <p className="text-center mt-4">
          <Link
            href="/"
            className="text-xl text-black bg-primary font-semibold px-3 py-1 rounded-sm"
          >
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
