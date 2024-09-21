function Footer() {
  return (
    <footer className="w-full py-4 bg-[#2c3e50] text-[#ecf0f1]">
      <div className="container mx-auto text-center">
        {/* Center Content: Social Media and Contact Info */}
        <div className="mb-2">
          <p>Follow us on social media</p>
          <div className="flex justify-center space-x-6 mb-2">
            <a href="#" className="text-[#ecf0f1] hover:text-[#e74c3c]">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                {/* SVG path */}
              </svg>
            </a>
            {/* Add other icons similarly */}
          </div>
          <p>
            Contact us:{' '}
            <a href="mailto:info@carpetworld.com" className="text-[#e74c3c]">
              christaron091@gmail.com
            </a>
          </p>
        </div>

        {/* Left Side: Powered by KimTech Limited */}
        <div className="mt-4">
          <p>
            Powered by{' '}
            <a href="mailto:elijahkimani1293@gmail.com" className="text-[#e74c3c]">
              KimTech Limited
            </a>
          </p>
        </div>

        {/* Right Side: Copyright Information */}
        <div>
          <p>&copy; {new Date().getFullYear()} Gaia's Domain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
