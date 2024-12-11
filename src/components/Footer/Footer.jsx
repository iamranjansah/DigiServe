import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'services' },
    { id: 3, link: 'about' },
    { id: 4, link: 'portfolio' },
    { id: 5, link: 'contact' },
  ];

  const socialLinks = [
    { id: 1, icon: <FaGithub />, href: '#' },
    { id: 2, icon: <FaLinkedin />, href: '#' },
    { id: 3, icon: <FaTwitter />, href: '#' },
    { id: 4, icon: <FaInstagram />, href: '#' },
  ];

  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">DigiServe</h3>
            <p className="text-gray-400 mb-4">
              Transforming businesses through innovative digital solutions.
              Your success is our priority.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ id, icon, href }) => (
                <a
                  key={id}
                  href={href}
                  className="text-gray-400 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map(({ id, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    className="text-gray-400 hover:text-primary cursor-pointer transition-colors"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>iamranjansah@gmail.com</li>
              <li>7324002***</li>
              <li>Kolkata, West Bengal</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} DigiServe. All rights reserved.</p>
          <p className="mt-2">
            Website by{' '}
            <a
              href="https://rsah.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors"
            >
              RSAH
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;