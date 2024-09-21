function Footer() {
    return (
      <footer className="w-full py-4 bg-[#2c3e50] text-[#ecf0f1]">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-2">
            <a href="#" className="text-[#ecf0f1] hover:text-[#e74c3c]">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                {/* SVG path */}
              </svg>
            </a>
            {/* Add other icons similarly */}
          </div>
          <div className="mb-2">
            <p>Follow us on social media</p>
          </div>
          <div className="mb-2">
            <p>Contact us: <a href="mailto:info@carpetworld.com" className="text-[#e74c3c]">christaron091@gmail.com</a></p>
          </div>
          <div className="mt-4">
            <p>&copy; {new Date().getFullYear()} Gaia's Domain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  