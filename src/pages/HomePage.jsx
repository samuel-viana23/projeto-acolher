import HeaderInterno from '../components/HeaderInterno';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import UserIcon from '../assets/Profile.png';
import CalendarIcon from '../assets/Calendar.png';
import IconAgendamentos from '../assets/icon-agendamentos.png';
import React, { useState, useEffect } from 'react';
import ModalConsulta from '../components/ModalConsulta';

function HomePage() {
  const [modalAberto, setModalAberto] = useState(false);
  const [agendamento, setAgendamento] = useState(null);
  const [erroAgendamento, setErroAgendamento] = useState(''); 
  const [carregando, setCarregando] = useState(true);
  const linkMeet = 'https://meet.google.com/';
  const user = JSON.parse(localStorage.getItem("usuario") || "{}");

  useEffect(() => {
    const fetchAgendamento = async () => {
      setCarregando(true);
      try {
        const response = await fetch(`http://localhost:8080/agendamento/${user.id}`);
        const data = await response.json().catch(() => ({}));

        if (response.status === 404) {
          setAgendamento(null);
          setErroAgendamento('Ainda não há sessão agendada — é preciso agendar.');
        } else if (!response.ok) {
          const msg = data.error || data.message || 'Erro ao buscar agendamento';
          setAgendamento(null);
          setErroAgendamento(msg);
        } else {
          setAgendamento(data);
          setErroAgendamento('');
        }
      } catch (err) {
        console.error(err);
        setAgendamento(null);
        setErroAgendamento('Falha ao buscar agendamento');
      } finally {
        setCarregando(false);
      }
    };

    if (user && user.id) {
      fetchAgendamento();
    } else {
      setCarregando(false);
      setErroAgendamento('Usuário não encontrado');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  return (
    <div className="min-h-screen min-w-screen flex flex-col bg-[#DFEBF6]">
      <HeaderInterno logo={Logo} userIcon={UserIcon} />

      <main className="flex-1 px-6 py-10 flex flex-col items-center gap-2 justify-center">

        <section className="text-start mb-6 w-full max-w-xl">
          <h1 className="text-2xl md:text-3xl font-bold text-[#44576D]">
            Bem Vindo(a), {user.nome || 'Usuário'}
          </h1>
        </section>

        <div className='flex flex-col items-center justify-center gap-4 w-full h-full'>

          {carregando ? (
            <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl flex items-center justify-center">
              <p className="text-[#44576D] font-medium">Carregando agendamento...</p>
            </section>
          ) : agendamento ? (
            <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl flex items-center justify-between gap-4">
              <div className='flex flex-col justify-between items-start gap-2'>
                <h2 className="text-lg font-semibold text-[#44576D] pb-2">Próxima sessão</h2>

                <p className="text-[#44576D] font-medium">{agendamento.medicoNome}</p>
                <p className="text-[#44576D]">{`${agendamento.dataConsulta} - ${agendamento.hora}`}</p>

                <button
                  onClick={() => setModalAberto(true)}
                  className={`py-2 px-4 rounded w-full transition
                    ${erroAgendamento
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-[#44576D] text-white hover:bg-[#2f3f52] cursor-pointer"
                    }`}
                  disabled={!!erroAgendamento}
                >
                  {erroAgendamento ? "Indisponível" : "Conectar"}
                </button>
              </div>

              <div>
                <img src={CalendarIcon} alt="Calendário" className="h-full" />
              </div>
            </section>
          ) : (
            <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl flex items-center justify-center">
              <p className="text-[#44576D] font-medium">
                {erroAgendamento || "Nenhuma sessão agendada"}
              </p>
            </section>
          )}

          <div className="w-full flex justify-center bg-red">
            <section className="flex gap-6 flex-wrap w-full max-w-xl">
              <Link 
                to="/agendamentos" 
                className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-[30%] hover:bg-[#f0f4f8] transition"
              >
                <img src={IconAgendamentos} alt="Agendamentos" className="h-10 w-10 mb-2" />
                <span className="text-[#44576D] font-semibold">Agendamentos</span>
              </Link>
            </section>
          </div>

        </div>

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
