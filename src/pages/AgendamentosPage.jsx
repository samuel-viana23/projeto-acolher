import { useState } from 'react';
import { Link } from 'react-router-dom';

import HeaderInterno from '../components/HeaderInterno';
import Footer from '../components/Footer';

import Logo from '../assets/logo.png';
import UserIcon from '../assets/Profile.png';

import { FaUserMd, FaCalendarAlt, FaClipboardList, FaCommentDots } from 'react-icons/fa';

function AgendamentosPage() {
  const [especialidade, setEspecialidade] = useState('');
  const [profissional, setProfissional] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const handleAgendar = (e) => {
    e.preventDefault();
    alert('Consulta agendada com sucesso!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#DFEBF6]">
      <HeaderInterno logo={Logo} userIcon={UserIcon} />

      <main className="flex-1 px-6 py-10 flex flex-col items-center gap-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#44576D] text-center">
          Agende sua Consulta
        </h1>

        {/* Ícones ilustrativos */}
        <div className="flex gap-6 flex-wrap justify-center">
          <FaUserMd className="text-[#44576D] text-4xl" />
          <FaCalendarAlt className="text-[#44576D] text-4xl" />
          <FaClipboardList className="text-[#44576D] text-4xl" />
          <FaCommentDots className="text-[#44576D] text-4xl" />
        </div>

        {/* Formulário */}
        <form onSubmit={handleAgendar} className="bg-white w-full max-w-md rounded-lg shadow-md p-6 flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="especialidade" className="text-sm text-[#44576D] mb-1">Especialidade</label>
            <select
              id="especialidade"
              value={especialidade}
              onChange={(e) => setEspecialidade(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D] text-black"
              required
            >
              <option value="">Selecione</option>
              <option value="Psicologia">Psicologia</option>
              <option value="Psiquiatria">Psiquiatria</option>
              <option value="Terapia Ocupacional">Terapia Ocupacional</option>
              <option value="Fonoaudiologia">Fonoaudiologia</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="profissional" className="text-sm text-[#44576D] mb-1">Profissional (opcional)</label>
            <input
              type="text"
              id="profissional"
              placeholder="Nome do profissional"
              value={profissional}
              onChange={(e) => setProfissional(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="data" className="text-sm text-[#44576D] mb-1">Data</label>
            <input
              type="date"
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D] text-black"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="hora" className="text-sm text-[#44576D] mb-1">Horário</label>
            <input
              type="time"
              id="hora"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D] text-black"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="observacoes" className="text-sm text-[#44576D] mb-1">Observações</label>
            <textarea
              id="observacoes"
              placeholder="Informações adicionais..."
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#44576D] text-black"
              rows={3}
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