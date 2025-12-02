import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'Blog'],
    Services: ['Recruitment', 'HR Solutions', 'Consulting', 'Training'],
    Resources: ['Documentation', 'Help Center', 'Privacy Policy', 'Terms of Service'],
  };

  return (
    <footer id="contact" className="bg-[#f7f7f5] text-gray-800 white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">NIFTY</h3>
            <p className="text-gray-800/80 mb-6">
              Transforming businesses through innovative HR solutions and exceptional talent management.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Subscribe to our Newsletter</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border-gray-800/20 text-gray-800 placeholder:text-white/50"
                />
                <Button variant="secondary">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-lg mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-800/70 hover:text-gray-800 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-800/60 text-sm">
            © 2025 Nifty. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="p-2 hover:bg-gray-800/10 rounded-full transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 hover:bg-gray-800/10 rounded-full transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 hover:bg-gray-800/10 rounded-full transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 hover:bg-gray-800/10 rounded-full transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
