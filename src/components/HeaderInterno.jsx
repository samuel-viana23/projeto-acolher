import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

function HeaderInterno() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); 
    navigate("/login"); 
  };


  return (
    <header className="w-full bg-[#44576D] flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
        <span className="text-lg font-semibold text-white">Acolher</span>
      </div>
      <button
        onClick={handleLogout}
        className="text-white hover:text-red-300 cursor-pointer px-4 py-2 rounded-lg transition"
      >
        Sair
      </button>
    </header>
  );
}

export default HeaderInterno;
