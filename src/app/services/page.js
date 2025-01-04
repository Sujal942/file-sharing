import React from "react";

const Services = () => {
  return (
    <div className="py-16 px-4 md:px-12 ">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-white mb-8">Our Services</h1>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          We offer a variety of file-sharing solutions designed to meet the
          needs of individuals and businesses alike. Our platform is fast,
          secure, and easy to use, providing you with the tools you need to
          share and store your files efficiently.
        </p>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
          {/* File Upload Service */}
          <div className="p-6 bg-white rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-teal-600 mb-4">
              File Upload
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Easily upload and share your files with anyone, anywhere. Our
              platform supports various file formats and provides a simple,
              intuitive interface for seamless uploading.
            </p>
            <ul className="text-gray-600">
              <li className="flex items-center mb-2">
                <span className="text-teal-500">✔</span> Drag-and-drop support
              </li>
              <li className="flex items-center mb-2">
                <span className="text-teal-500">✔</span> Fast upload speeds
              </li>
              <li className="flex items-center mb-2">
                <span className="text-teal-500">✔</span> Multi-file upload
              </li>
            </ul>
          </div>

          {/* Secure File Sharing */}
          <div className="p-6 bg-white rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-teal-600 mb-4">
              Secure File Sharing
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Share your files securely with the people who matter. We provide
              end-to-end encryption to ensure that your data is always safe.
            </p>
            <ul className="text-gray-600">
              <li className="flex items-center mb-2">
                <span className="text-teal-500">✔</span> End-to-end encryption
              </li>
              <li className="flex items-center mb-2">
                <span className="text-teal-500">✔</span> Share via links
              </li>
              <li className="flex items-center mb-2">
                <span className="text-teal-500">✔</span> Secure access control
              </li>
            </ul>
          </div>

          {/* File Storage */}
          <div className="p-6 bg-white rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-teal-600 mb-4">
              File Storage
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Store your files with confidence. Our cloud storage solution
              offers reliable and scalable storage for all your files.
            </p>
            <ul className="text-gray-600">
              <li className="flex items-center mb-2">
                <span className="text-teal-500">✔</span> Unlimited storage
              </li>
              <li className="flex items-center mb-2">
                <span className="text-teal-500">✔</span> Easy file retrieval
              </li>
              <li className="flex items-center mb-2">
                <span className="text-teal-500">✔</span> 24/7 access
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-xl text-gray-300">
            Whether you're an individual looking for a secure way to store your
            personal files, or a business needing an efficient file-sharing
            platform, we have the right solution for you. Get started with our
            services today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
