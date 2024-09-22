"use client";

import { BackgroundGradientAnimation } from "@/components/ui/bg-gradient";
import Image from "next/image";
import { motion } from "framer-motion"; 
import icon from "../../public/icon/verified.png";
import instagramIcon from "../../public/icon/instagram.png";
import whatsappIcon from "../../public/icon/whatsapp.png"; 
import arrowIcon from "../../public/icon/arrow-right.png"; 
import { TextGenerateEffect } from "@/components/ui/text";

const words = `Keindahan alam yang bisa ditemukan di setiap sudut dunia
`;

const Datasosmed = [
  {
    id: 1,
    name: "Instagram",
    url: "https://www.instagram.com/abassstravel/",
    icon: instagramIcon,
  },
  {
    id: 2,
    name: "WhatsApp",
    url:
      "https://api.whatsapp.com/send?phone=6281312048683&text=" +
      encodeURIComponent(
        "Halo Abasstravel! Saya sangat tertarik dengan layanan perjalanan Anda. Apakah ada paket khusus yang dapat Anda tawarkan? Saya berharap dapat mendengar lebih banyak tentang keindahan yang ditawarkan!"
      ),
    icon: whatsappIcon,
  },
];

const buttons = [
  { id: 1, name: "Button 1", icon: instagramIcon, url: "#" },
  { id: 2, name: "Button 2", icon: whatsappIcon, url: "#" },
  { id: 3, name: "Button 3", icon: instagramIcon, url: "#" },
  { id: 4, name: "Button 4", icon: whatsappIcon, url: "#" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.4, // Delay untuk setiap item
    },
  }),
};

export default function Home() {
  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-72 relative overflow-hidden">
        <BackgroundGradientAnimation />
      </div>
      <div className="w-full h-full bg-black/85 bg-cover relative">
        <Image
          src="/noise.png"
          width={400}
          height={400}
          alt="noise"
          objectFit="cover"
          className="w-full h-full opacity-60"
        />
      </div>
      <motion.div 
        className="absolute inset-0 m-auto h-full flex flex-col top-96 items-center" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }} 
      >
        <div className="relative w-44 h-44 animate-spin-slow bg-[conic-gradient(rgba(0,0,255,0),rgba(0,0,255,0),rgba(209,0,234,0.8),#7F00EA)] rounded-full">
          <div className="absolute inset-0 m-auto w-[168px] h-[168px] bg-black rounded-full"></div>
        </div>

        <div className="mt-4 text-white text-lg w-full text-center px-4">
          <div className="flex gap-2 items-center justify-center">
            <p className="font-semibold text-[24px] sm:text-[20px]">
              Travel with Abassstravel
            </p>
            <div>
              <Image src={icon} alt="icon" width={32} height={32} />
            </div>
          </div>
          <div className="mt-2">
            <a href="#" className="text-blue-600 text-sm sm:text-base">
              https://example.com
            </a>
          </div>
          <div className="font-normal text-sm">
            <TextGenerateEffect words={words} />
          </div>

          {/* Munculnya media sosial */}
          <div className="mt-4 gap-3 flex justify-center">
            {Datasosmed.map((sosmed, index) => (
              <motion.a
                key={sosmed.id}
                href={sosmed.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black text-xs font-semibold bg-white rounded-lg p-2 m-2"
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                custom={index}
              >
                <Image src={sosmed.icon} alt={sosmed.name} width={20} height={20} className="mr-2" />
                {sosmed.name}
              </motion.a>
            ))}
          </div>

          {/* Tombol yang muncul setelah media sosial */}
          <div className="w-full mt-8 px-[26rem] max-lg:px-60 max-sm:px-5 max-md:px-0">
            {buttons.map((button, index) => (
              <motion.a
                key={button.id}
                href={button.url}
                className="flex items-center justify-between w-full bg-white rounded-lg p-3 mb-2 hover:bg-gray-200"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { 
                      delay: (Datasosmed.length + index) * 0.4 // Delay untuk tombol setelah media sosial
                    }
                  }
                }}
                custom={index}
              >
                <div className="flex items-center">
                  <Image src={button.icon} alt={button.name} width={20} height={20} className="mr-2" />
                  <span className="text-black font-semibold">{button.name}</span>
                </div>
                <Image src={arrowIcon} alt="arrow" width={16} height={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
