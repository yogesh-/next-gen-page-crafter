
const FooterSection = () => {
  return (
    <footer className="bg-luxury-900 text-white/60 py-12 border-t border-accent/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg mb-4">CONTACT US</h3>
            <p className="text-sm">Dubai, UAE</p>
            <p className="text-sm">+971 4 XXX XXXX</p>
            <p className="text-sm">info@example.com</p>
          </div>
          <div>
            <h3 className="text-white text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm hover:[&>li]:text-accent">
              <li className="transition-colors">About Us</li>
              <li className="transition-colors">Properties</li>
              <li className="transition-colors">Contact</li>
              <li className="transition-colors">Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg mb-4">FOLLOW US</h3>
            <ul className="space-y-2 text-sm hover:[&>li]:text-accent">
              <li className="transition-colors">Instagram</li>
              <li className="transition-colors">Facebook</li>
              <li className="transition-colors">Twitter</li>
              <li className="transition-colors">LinkedIn</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg mb-4">LEGAL</h3>
            <ul className="space-y-2 text-sm hover:[&>li]:text-accent">
              <li className="transition-colors">Privacy Policy</li>
              <li className="transition-colors">Terms & Conditions</li>
              <li className="transition-colors">Disclaimer</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-accent/10 text-center text-sm">
          © 2024 All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
