// components/Footer.js
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex text-center items-center justify-center py-3 "> {/* Kurangi padding vertikal */}
      <div className="container mx-auto text-center">
        <p className="text-sm">
          ©2024 / Abasstravel / Explore the World with Us
        </p>
      </div>
    </footer>
  );
};

export default Footer;
