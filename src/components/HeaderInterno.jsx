import Logo from '../assets/logo.png';
import UserIcon from '../assets/Profile.png'; // ou o ícone que estiver usando

function HeaderInterno() {
  return (
    <header className="w-full bg-[#44576D] flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
        <span className="text-lg font-semibold text-white">Acolher</span>
      </div>
      <img src={UserIcon} alt="Usuário" className="h-10 w-10 rounded-full" />
    </header>
  );
}

export default HeaderInterno;