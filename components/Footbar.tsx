import Link from "next/link";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillRedditCircle,
} from "react-icons/ai";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://github.com/Rahul-Encoded",
    Icon: AiFillGithub,
    label: "GitHub",
  },
  {
    href: "https://x.com/rahulencoded",
    Icon: AiOutlineTwitter,
    label: "X (Twitter)",
  },
  {
    href: "https://www.linkedin.com/in/rahulstack/",
    Icon: AiFillLinkedin,
    label: "Linkedin",
  },
  { href: "https://instagram.com", Icon: AiFillInstagram, label: "Instagram" },
  {
    href: "https://www.reddit.com/user/Monrq/",
    Icon: AiFillRedditCircle,
    label: "Reddit",
  },
];

export const Footer = () => {
  return (
    <div className="backdrop-blur w-full">
      <footer className="py-8 max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col"
        >
          <p
            className="text-primary/20 group relative"
            data-hover-text="Thanks for stopping by!"
          >
            <span className="group-hover:opacity-0 transition-opacity duration-300">
              © 2025. Created and Crafted with all the creativity by Rahul.
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-0 text-2xl text-purple-400 font-mono">
              THANKS FOR STOPPING BY!
            </span>
          </p>

          <ul className="flex gap-5 flex-wrap">
            {socialLinks.map(({ href, Icon, label }) => (
              <motion.li
                key={label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, rotate: "3deg" }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <Link
                  href={href}
                  aria-label={label}
                  className="text-primary/20 flex items-center justify-center w-10 h-10 rounded-full
                             hover:text-gray-400 hover:scale-150 transition-colors"
                >
                  <Icon size={30} />
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </footer>
    </div>
  );
};
