import { MaterialIcon } from '@/lib/icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { href: "#about", text: "About" },
    { href: "#research", text: "Research" },
    { href: "#publications", text: "Publications" },
    { href: "#projects", text: "Projects" },
    { href: "#workshops", text: "Workshops" }
  ];

  const contactLinks = [
    {
      icon: "email",
      content: "manish.phy.math@gmail.com",
      href: "mailto:manish.phy.math@gmail.com",
      isLink: true
    },
    {
      icon: "phone",
      content: "(+977) 9742400662",
      isLink: false
    },
    {
      icon: "location_on",
      content: "Mahendranagar, Nepal",
      isLink: false
    }
  ];

  const socialLinks = [
    { icon: "school", href: "#" },
    { icon: "link", href: "#" },
    { icon: "code", href: "#" }
  ];

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary">
                <span className="font-heading font-bold">MP</span>
              </div>
              <span className="text-white font-heading font-semibold text-xl">Manish Pandey</span>
            </div>
            <p className="text-neutral-300 mb-6 max-w-md">
              Physics researcher specializing in plasma physics, quantum computing, and space science.
              Passionate about scientific discovery and innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-white hover:text-neutral-300 transition-colors"
                  aria-label={`Social link ${index + 1}`}
                >
                  <MaterialIcon name={link.icon} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              {contactLinks.map((link, index) => (
                <li key={index} className="flex items-center">
                  <MaterialIcon name={link.icon} className="text-sm mr-2" />
                  {link.isLink ? (
                    <a 
                      href={link.href} 
                      className="text-neutral-300 hover:text-white transition-colors"
                    >
                      {link.content}
                    </a>
                  ) : (
                    <span className="text-neutral-300">{link.content}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-neutral-700 text-center">
          <p className="text-neutral-400">
            &copy; {currentYear} Manish Pandey. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
