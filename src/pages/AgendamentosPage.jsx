import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderInterno from '../components/HeaderInterno';
import Footer from '../components/Footer';
import Logo from '../assets/Logo.png';
import UserIcon from '../assets/Profile.png';
import { FaUserMd, FaCalendarAlt, FaClipboardList, FaCommentDots } from 'react-icons/fa';

function AgendamentosPage() {
  const [especialidades, setEspecialidades] = useState([]);
  const [especialidade, setEspecialidade] = useState('');
  const [profissional, setProfissional] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  useEffect(() => {
    const fetchEspecialidades = async () => {
      try {
        const resp = await fetch("http://localhost:8080/especialidade");
        const data = await resp.json();

        if (data.error) {
          alert(data.error);
          return;
        }

        setEspecialidades(data);
      } catch (err) {
        console.error("Erro ao carregar especialidades:", err);
        alert("Não foi possível carregar as especialidades.");
      }
    };

    fetchEspecialidades();
  }, []);

  const medicosDaEspecialidade =
    especialidades.find(e => Number(e.id) === Number(especialidade))?.medicos || [];

  const handleAgendar = async (e) => {
    e.preventDefault();

    if (!especialidade || !data || !hora) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    const payload = {
      id_paciente: 1,
      id_medico: Number(profissional) || null,
      id_especialidade: Number(especialidade),
      id_horario: hora,
      data_consulta: data,
      status: "AGENDADO"
    };

    try {
      const response = await fetch("http://localhost:8080/agendamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok) {
        alert("Consulta agendada com sucesso!");
        window.location.href = "/home";
      } else {
        alert(result.error || result.erro || "Erro ao agendar consulta");
      }
    } catch (error) {
      alert("Falha ao conectar ao servidor.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#DFEBF6]">
      <HeaderInterno logo={Logo} userIcon={UserIcon} />

      <main className="flex-1 px-6 py-10 flex flex-col items-center gap-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#44576D] text-center">
          Agende sua Consulta
        </h1>

        <div className="flex gap-6 flex-wrap justify-center">
          <FaUserMd className="text-[#44576D] text-4xl" />
          <FaCalendarAlt className="text-[#44576D] text-4xl" />
          <FaClipboardList className="text-[#44576D] text-4xl" />
          <FaCommentDots className="text-[#44576D] text-4xl" />
        </div>

        <form onSubmit={handleAgendar} className="bg-white w-full max-w-md rounded-lg shadow-md p-6 flex flex-col gap-4">

          {/* Especialidade */}
          <div className="flex flex-col">
            <label className="text-sm text-[#44576D] mb-1">Especialidade</label>
            <select
              value={especialidade}
              onChange={(e) => {
                setEspecialidade(e.target.value);
                setProfissional("");
              }}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D] text-black"
              required
            >
              <option value="">Selecione</option>

              {especialidades.map((esp) => (
                <option key={esp.id} value={esp.id}>
                  {esp.titulo}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-[#44576D] mb-1">Profissional</label>

            <select
              value={profissional}
              onChange={(e) => setProfissional(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D]"
              required
              disabled={medicosDaEspecialidade.length === 0}
            >
              <option value="">
                {medicosDaEspecialidade.length > 0
                  ? "Selecione um profissional"
                  : "Nenhum médico disponível"}
              </option>

              {medicosDaEspecialidade.map((med) => (
                <option key={med.id} value={med.id}>
                  {med.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-[#44576D] mb-1">Data</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D] text-black"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-[#44576D] mb-1">Horário</label>
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D] text-black"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#44576D] text-white py-3 rounded hover:bg-[#2f3f52] transition-colors"
          >
            Confirmar Agendamento
          </button>

          <Link to="/home">
            <button
              type="button"
              className="w-full bg-white border border-[#44576D] text-[#44576D] py-3 rounded hover:bg-[#f0f4f8] transition-colors mt-2"
            >
              Voltar para Home
            </button>
          </Link>

        </form>
      </main>

      <Footer />
    </div>
  );
}

export default AgendamentosPage;
