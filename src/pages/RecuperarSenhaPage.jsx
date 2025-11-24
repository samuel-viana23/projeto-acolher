import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

function RecuperarSenhaPage() {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-[#DFEBF6] px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Cabeçalho com logo */}
        <div className="bg-[#44576D] flex justify-center items-center gap-2 py-4">
          <img src={Logo} alt="Logo Acolher" className="h-10 w-auto" />
          <span className="text-lg font-semibold text-white">Acolher</span>
        </div>

        {/* Formulário de recuperação */}
        <form className="px-6 py-8 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-[#44576D] text-center mb-2">Recuperar Senha</h2>

          <p className="text-sm text-[#44576D] text-center mb-4">
            Informe seu email cadastrado para receber instruções de redefinição.
          </p>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-[#44576D] mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#44576D] text-white py-3 rounded hover:bg-[#2f3f52] transition-colors cursor-pointer"
          >
            Enviar instruções
          </button>

          <Link to="/login">
            <button
              type="button"
              className="w-full bg-white border border-[#44576D] text-[#44576D] py-3 rounded hover:bg-[#f0f4f8] transition-colors cursor-pointer"
            >
              Voltar ao login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default RecuperarSenhaPage;