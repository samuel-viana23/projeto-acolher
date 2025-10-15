import HeaderInterno from '../components/HeaderInterno';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.png';
import UserIcon from '../assets/Profile.png';
import CalendarIcon from '../assets/Calendar.png';
import IconAgendamentos from '../assets/icon-agendamentos.png';
import IconChat from '../assets/Comments.png';

import React, { useState } from 'react';
import ModalConsulta from '../components/ModalConsulta';

function HomePage() {

  const [modalAberto, setModalAberto] = useState(false);
  const linkMeet = 'https://meet.google.com/'

  return (
    <div className="min-h-screen min-w-screen flex flex-col bg-[#DFEBF6]">
      <HeaderInterno logo={Logo} userIcon={UserIcon} />

      {/* Conteúdo principal */}
      <main className="flex-1 px-6 py-10 flex flex-col items-center gap-2 justify-center">
        {/* Boas-vindas */}
        <section className="text-srart mb-6 w-full max-w-xl">
          <h1 className="text-2xl md:text-3xl font-bold text-[#44576D]">
            Bem Vindo(a), Samuel
          </h1>
        </section>

        {/* Próxima sessão */}
        <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl flex items-center justify-between gap-4">
          <div className='flex flex-col justify-between items-start gap-2'>
            <h2 className="text-lg font-semibold text-[#44576D] pb-2">Próxima sessão</h2>
            <p className="text-[#44576D] font-medium">Dr. Amanda Barreto</p>
            <p className="text-[#44576D]">17 Setembro - 09:00</p>
            <button
              onClick={() => setModalAberto(true)}
              className="bg-[#44576D] text-white py-2 px-4 rounded hover:bg-[#2f3f52] self-start w-full cursor-pointer transition"
            >
              Conectar
            </button>
          </div>
          <div>
            <img src={CalendarIcon} alt="Calendário" className="h-full" />
          </div>
        </section>

        {/* Ações rápidas */}
        <section className="flex gap-6 flex-wrap justify-between w-full max-w-xl">
          <Link to="/agendamentos" className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-[30%] hover:bg-[#f0f4f8] transition">
            <img src={IconAgendamentos} alt="Agendamentos" className="h-10 w-10 mb-2" />
            <span className="text-[#44576D] font-semibold">Agendamentos</span>
          </Link>

          <Link to="/home" className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-[30%] hover:bg-[#f0f4f8] transition">
            <img src='#' alt="#" className="h-10 w-10 mb-2" />
            <span className="text-[#44576D] font-semibold">#</span>
          </Link>

          <Link to="/home" className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-[30%] hover:bg-[#f0f4f8] transition">
            <img src={IconChat} alt="Chat" className="h-10 w-10 mb-2" />
            <span className="text-[#44576D] font-semibold">Chat</span>
          </Link>
        </section>

        <ModalConsulta
          isOpen={modalAberto}
          onClose={() => setModalAberto(false)}
          meetLink={linkMeet}
        />

      </main>

      <Footer />
    </div>
  );
}

export default HomePage;