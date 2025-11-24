import Logo from '../assets/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.erro || "Credenciais inválidas");
        return;
      }

      // Salva o usuário no localStorage
      localStorage.setItem("usuario", JSON.stringify(result.usuario));

      alert("Login realizado com sucesso!");

      navigate("/home");

    } catch (error) {
      alert("Erro ao conectar ao servidor");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-[#DFEBF6] px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg overflow-hidden">
        
        <div className="bg-[#44576D] flex justify-center items-center gap-2 py-4">
          <img src={Logo} alt="Logo Acolher" className="h-10 w-auto" />
          <span className="text-lg font-semibold text-white">Acolher</span>
        </div>

        <form className="px-6 py-8 flex flex-col gap-4 text-black" onSubmit={handleLogin}>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-[#44576D] mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm text-[#44576D] mb-1">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D]"
              required
            />
          </div>

          <div className="text-right text-sm">
            <Link to="/recuperar-senha" className="text-[#44576D] hover:underline">
              Esqueceu sua senha?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#44576D] text-white py-3 rounded hover:bg-[#2f3f52] transition-colors cursor-pointer"
          >
            Entrar
          </button>

          <Link to="/cadastro">
            <button
              type="button"
              className="w-full bg-white border border-[#44576D] text-[#44576D] py-3 rounded hover:bg-[#f0f4f8] transition-colors cursor-pointer"
            >
              Criar conta
            </button>
          </Link>

        </form>
      </div>
    </div>
  );
}

export default LoginPage;
