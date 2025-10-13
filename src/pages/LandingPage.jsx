import Logo from '../assets/logo.png';
import Meditation from '../assets/meditation.png';
import IconAgendamentos from '../assets/icon-agendamentos.png';
import IconSeguranca from '../assets/Lock.png';
import IconComunicacao from '../assets/Comments.png';

function LandingPage() {
    return (
        <div className="h-screen w-screen bg-[#DFEBF6] flex flex-col">

            {/* Cabeçalho */}
            <div className="w-full h-[15vh] bg-[#44576D] flex items-center">
                <div className="flex flex-row items-center text-white gap-2 w-1/2 ml-10">
                    <img src={Logo} alt="Logo" className="h-10 w-auto" />
                    <div>Acolher</div>
                </div>
                <div className="flex flex-row items-center justify-around text-white gap-2 w-1/2 ml-10">
                    <p className="cursor-pointer hover:text-gray-300">Sobre</p>
                    <p className="cursor-pointer hover:text-gray-300">Contato</p>
                </div>
            </div>

            {/* Corpo com altura dinâmica */}
            <div className="flex-1 flex flex-col items-center justify-center">

                {/* primeira parte*/}
                <div className='flex-1 flex items-center justify-btween w-full'>
                    {/* ENTRAR*/}
                    <div className='flex-1 flex flex-col items-center flex-wrap justify-center'>
                        <h1 className="text-4x1 font-bold mb-4 text-center text-[#44576D] max-w-[60%]">Bem-vindo ao Acolher</h1>
                        <p className="text-lg mb-6 text-center px-4 text-[#44576D] max-w-[60%]">
                            Sua plataforma para conectar pessoas e oferecer suporte emocional.
                        </p>
                        <button className="bg-[#44576D] text-white px-6 py-3 rounded hover:bg-gray-700">
                            Entrar
                        </button>
                    </div>
                    {/* IMAGEM*/}
                    <div className='flex-1 flex justify-center items-center'>
                        <img src={Meditation} alt="Imagem de boas-vindas" className="ml-10" />
                    </div>
                </div>

                {/* segunda parte*/}
                <div className='bg-white w-full flex-1 flex'>
                    <div className='flex items-center justify-around w-full'>
                        <div className='flex flex-col items-center justify-center'>
                            <img src={IconAgendamentos} alt="" className='h-10 w-10 mb-2' />
                            <h4 className="text-lg font-bold mb-2 text-center text-[#44576D]">Agendamentos</h4>
                            <p className='text-[#44576D] flex-wrap max-w-[60%] text-center'>
                                Faça agendamentos de maneira descomplicada
                            </p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <img src={IconSeguranca} alt="" className='h-10 w-10 mb-2' />
                            <h4 className="text-lg font-bold mb-2 text-center text-[#44576D]">Segurança</h4>
                            <p className='text-[#44576D] flex-wrap max-w-[60%] text-center'>
                                Seus dados protegidos com total confidencialidade
                            </p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <img src={IconComunicacao} alt="" className='h-10 w-10 mb-2' />
                            <h4 className="text-lg font-bold mb-2 text-center text-[#44576D]">Comunicação</h4>
                            <p className='text-[#44576D] flex-wrap max-w-[60%] text-center'>
                                Conecte-se com empatia e escuta ativa
                            </p>
                        </div>


                    </div>
                </div>

            </div>

            {/* Rodapé fixo com 10% da tela */}
            <div className="w-full h-[10vh] bg-[#44576D] flex items-center justify-center text-white">
                <p>© 2024 Acolher. Todos os direitos reservados.</p>
            </div>
        </div>
    );
}

export default LandingPage;