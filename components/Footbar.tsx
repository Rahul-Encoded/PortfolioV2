import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillInstagram,
	AiFillRedditCircle,
} from "react-icons/ai";


const socialLinks = [
  { href: "https://github.com/Rahul-Encoded", Icon: AiFillGithub, label: "GitHub" },
  { href: "https://x.com/rahulencoded", Icon: AiOutlineTwitter, label: "X (Twitter)" },
  { href: "https://www.linkedin.com/in/rahulstack/", Icon: AiFillLinkedin, label: "Linkedin" },
  { href: "https://instagram.com", Icon: AiFillInstagram, label: "Instagram" },
  { href: "https://www.reddit.com/user/Monrq/", Icon: AiFillRedditCircle, label: "Reddit" },
];

export const Footer = () => {
  return (
    <div className="backdrop-blur w-full">
			<footer className="py-8 max-w-[1200px] mx-auto px-4 z-100">
      <div className="mt-12 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="text-primary/20">© 2025. All rights reserved.</p>

        <ul className="flex gap-5 flex-wrap">
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-primary/20 flex items-center justify-center w-10 h-10 rounded-full
                         hover:text-gray-400 transition-colors"
            >
              <Icon size={30} />
            </a>
          ))}
        </ul>
      </div>
    </footer>
		</div>
  );
};
