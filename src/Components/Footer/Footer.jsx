import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-600 hover:text-gray-800 transition duration-200">
            <FaFacebookF size="1.5em" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-600 hover:text-gray-800 transition duration-200">
            <FaInstagram size="1.5em" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-gray-600 hover:text-gray-800 transition duration-200">
            <FaTwitter size="1.5em" />
          </a>
          <a
            href="#"
            aria-label="Github"
            className="text-gray-600 hover:text-gray-800 transition duration-200">
            <FaGithub size="1.5em" />
          </a>
        </div>
        <p className="text-gray-600">&copy; 2023 All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
