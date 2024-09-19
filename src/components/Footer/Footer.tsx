import { Footer as FlowbiteFooter } from "flowbite-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <FlowbiteFooter container className="bg-gray-800 p-4 text-white">
      <FlowbiteFooter.Copyright href="#" by="Navi™" year={2024} />
      <FlowbiteFooter.LinkGroup>
        <FlowbiteFooter.Link href="#">About Me</FlowbiteFooter.Link>
        <FlowbiteFooter.Link href="#">Contact</FlowbiteFooter.Link>
      </FlowbiteFooter.LinkGroup>
      <div className="flex gap-4 mt-4">
        <a href="https://www.instagram.com/naaav_s/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.facebook.com/TheNaaav/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={24} />
        </a>
        <a href="https://www.linkedin.com/in/naruebet-singsathon-7b8337158/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={24} />
        </a>
        <a href="https://github.com/TheNaaav" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
      </div>
    </FlowbiteFooter>
  );
}

export default Footer;
