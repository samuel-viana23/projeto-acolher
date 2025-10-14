import Logo from '../assets/logo.png';

function Header() {
  return (
    <header className="w-full min-h-[10vh] bg-[#44576D] flex items-center px-6 md:px-10">
      <div className="flex items-center text-white gap-2 w-1/2">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
        <span className="text-lg font-semibold">Acolher</span>
      </div>
      <nav className="flex justify-end items-center text-white gap-6 w-1/2">
        <p className="cursor-pointer hover:text-gray-300">Sobre</p>
        <p className="cursor-pointer hover:text-gray-300">Contato</p>
      </nav>
    </header>
  );
}

export default Header;