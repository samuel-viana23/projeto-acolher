import React from 'react';

function ModalConsulta({ isOpen, onClose, meetLink }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-[#44576D] mb-4">Detalhes da Consulta</h2>
        <p className="text-[#44576D] mb-2"><strong>Profissional:</strong> Dr. Amanda Barreto</p>
        <p className="text-[#44576D] mb-2"><strong>Data:</strong> 17 Setembro</p>
        <p className="text-[#44576D] mb-4"><strong>Horário:</strong> 09:00</p>

        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-300 text-[#44576D] px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancelar
          </button>
          <a
            href={meetLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#44576D] text-white px-4 py-2 rounded hover:bg-[#2f3f52]"
          >
            Entrar na chamada
          </a>
        </div>
      </div>
    </div>
  );
}

export default ModalConsulta;