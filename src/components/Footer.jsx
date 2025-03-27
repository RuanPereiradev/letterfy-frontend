import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Ícones de redes sociais

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-white py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <motion.h2
            className="text-3xl font-semibold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Conecte-se com a gente
          </motion.h2>

          <motion.div
            className="flex space-x-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-3xl hover:text-blue-600 transition duration-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-3xl hover:text-blue-400 transition duration-300" />
            </a>
            <a
              href="https://www.instagram.com/ruanpereira__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl hover:text-pink-500 transition duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/ruan-pereira-do-nascimento-ab6a45228"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl hover:text-blue-700 transition duration-300" />
            </a>
          </motion.div>

          <motion.p
            className="mt-4 text-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            &copy; 2025 Sua Empresa. Todos os direitos reservados.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
