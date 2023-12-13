const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-blue-900 to-gray-800 px-8">
      <div className="flex items-center justify-between py-4">
        <h3 className="text-white text-xl font-extrabold">© 2023 Sharkbots</h3>
        <div className="flex">
          <a target="_blank" href="https://www.instagram.com/ftc14903/?hl=en"><img className="h-8 w-8 mr-4 rounded" src="/Instagram.png" alt="Instagram" /></a>
          <a target="_blank" href="https://www.youtube.com/@14903"><img className="h-8 w-8 mr-4 rounded" src="/Youtube.png" alt="Youtube" /></a>
          <a href="mailto:bessin.raphael@gmail.com"><img className="h-8 w-8 rounded" src="/Mail.png" alt="Email" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;