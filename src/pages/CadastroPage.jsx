import Logo from '../assets/Logo.png';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function CadastroPage() {
  const [confirm, setConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [perfil, setPerfil] = useState("PACIENTE");

  const [cpf, setCpf] = useState("");
  const [crm, setCrm] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const especialidadesPredefinidas = [
  { titulo: "Psiquiatria", descricao: "Especialidade médica focada no diagnóstico e tratamento de transtornos mentais." },
  { titulo: "Psicologia Clínica", descricao: "Atendimento psicológico individual para questões emocionais e comportamentais." },
  { titulo: "Psicanálise", descricao: "Abordagem terapêutica baseada na análise profunda do inconsciente." },
  { titulo: "Terapia Familiar e de Casal", descricao: "Atendimento baseado nas relações e na dinâmica familiar." },
  { titulo: "Terapia Ocupacional em Saúde Mental", descricao: "Atuação para autonomia e funcionalidade de pessoas com sofrimento psíquico." },
  { titulo: "Psicopedagogia", descricao: "Atendimento para dificuldades de aprendizagem relacionadas a fatores emocionais ou cognitivos." },
  { titulo: "Terapia Infantil", descricao: "Intervenção psicológica voltada ao desenvolvimento emocional de crianças." },
];


  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState(
    especialidadesPredefinidas[0].titulo
  );

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== confirm) {
      alert("As senhas não coincidem");
      return;
    }

    const payload = {
      email,
      senha,
      nome,
      perfil_id: perfil,
    };

    if (perfil === "PACIENTE") {
      payload.cpf = cpf;
        payload.dataNascimento = dataNascimento;
    } else {
      payload.crm = crm;
      payload.dataInscricao = dataNascimento;
      payload.especialidade = especialidadeSelecionada;
    }

    try {
      const response = await fetch("http://localhost:8080/usuario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.erro || "Erro ao cadastrar usuário");
        return;
      }
      if (perfil === "MEDICO") {
        const especialidadeObj = especialidadesPredefinidas.find(
          (e) => e.titulo === especialidadeSelecionada
        );

        const resEsp = await fetch("http://localhost:8080/especialidade", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(especialidadeObj),
        });

        if (!resEsp.ok) {
          const erroEsp = await resEsp.json();
          alert("Usuário criado, mas falha ao salvar especialidade: " + erroEsp.error);
        }
      }

      alert("Conta criada com sucesso!");
      navigate("/login");

    } catch (err) {
      alert("Erro ao conectar ao servidor");
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-[#DFEBF6] px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg overflow-hidden">
        
        <div className="bg-[#44576D] flex justify-center items-center gap-2 py-4">
          <img src={Logo} alt="Logo Acolher" className="h-10 w-auto" />
          <span className="text-lg font-semibold text-white">Acolher</span>
        </div>

        <form className="px-6 py-8 flex flex-col gap-4 text-black" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-[#44576D] text-center mb-2">Criar Conta</h2>

          <div className="flex flex-col">
            <label htmlFor="nome" className="text-sm text-[#44576D] mb-1">Nome completo</label>
            <input
              type="text"
              id="nome"
              placeholder="Digite seu nome"
              onChange={(e) => setNome(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D]"
              required
            />
          </div>

          {/* CPF / CRM */}
          {perfil === "PACIENTE" ? (
            <div className="flex flex-col">
              <label htmlFor="cpf" className="text-sm text-[#44576D] mb-1">CPF</label>
              <input
                type="text"
                id="cpf"
                placeholder="000.000.000-00"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D]"
                required
              />
            </div>
          ) : (
            <>
              <div className="flex flex-col">
                <label htmlFor="crm" className="text-sm text-[#44576D] mb-1">CRM</label>
                <input
                  type="text"
                  id="crm"
                  placeholder="Digite seu CRM"
                  value={crm}
                  onChange={(e) => setCrm(e.target.value)}
                  className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D]"
                  required
                />
              </div>

              {/* ESPECIALIDADE */}
              <div className="flex flex-col">
                <label htmlFor="especialidade" className="text-sm text-[#44576D] mb-1">Especialidade</label>
                <select
                  id="especialidade"
                  value={especialidadeSelecionada}
                  onChange={(e) => setEspecialidadeSelecionada(e.target.value)}
                  className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D]"
                  required
                >
                  {especialidadesPredefinidas.map((esp) => (
                    <option key={esp.titulo} value={esp.titulo}>{esp.titulo}</option>
                  ))}
                </select>
              </div>
            </>
          )}

          <div className="flex flex-col">
            <label className="text-sm text-[#44576D] mb-1">
              {perfil === "PACIENTE" ? "Data de Nascimento" : "Data de Inscrição"}
            </label>
            <input
              type="date"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-[#44576D] mb-1">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="Digite seu email"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="perfil" className="text-sm text-[#44576D] mb-1">Tipo de usuário</label>
            <select
              id="perfil"
              value={perfil}
              onChange={(e) => setPerfil(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D]"
              required
            >
              <option value="PACIENTE">Paciente</option>
              <option value="MEDICO">Médico</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm text-[#44576D] mb-1">Senha</label>
            <input
              type="password"
              onChange={(e) => setSenha(e.target.value)}
              id="password"
              placeholder="Crie uma senha"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="text-sm text-[#44576D] mb-1">Confirmar senha</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Repita a senha"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#44576D] text-white py-3 rounded hover:bg-[#2f3f52] transition-colors cursor-pointer"
          >
            Cadastrar
          </button>

          <Link to="/login">
            <button
              type="button"
              className="w-full bg-white border border-[#44576D] text-[#44576D] py-3 rounded hover:bg-[#f0f4f8] transition-colors cursor-pointer"
            >
              Já tenho uma conta
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CadastroPage;
