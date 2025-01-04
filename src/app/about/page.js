import React from "react";

const AboutUs = () => {
  return (
    <div className="py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-white mb-8">About Us</h1>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          We are a file-sharing platform dedicated to making it easy, secure,
          and fast for you to store and share your files with anyone, anywhere.
        </p>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Mission Section */}
          <div className="p-6 bg-white rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-indigo-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg">
              Our mission is to provide an easy-to-use, secure platform for file
              sharing. We are committed to helping individuals and organizations
              share important files efficiently, with fast upload speeds and
              powerful security features.
            </p>
          </div>

          {/* Vision Section */}
          <div className="p-6 bg-white rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-indigo-600 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg">
              We envision a future where file sharing is seamless, with no
              limitations or barriers. Our platform aims to support diverse use
              cases, from personal file storage to team collaboration, ensuring
              that your files are always safe and accessible.
            </p>
          </div>

          {/* Values Section */}
          <div className="p-6 bg-white rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold text-indigo-600 mb-4">
              Our Values
            </h3>
            <p className="text-gray-700 text-lg">
              We value privacy, security, and ease of use. These values guide
              everything we do at our company. We are committed to creating a
              platform that users can trust to store and share their files
              safely.
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-xl text-gray-300">
            Our goal is to provide you with an easy-to-use platform for file
            storage and sharing, backed by powerful security measures to keep
            your data safe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
