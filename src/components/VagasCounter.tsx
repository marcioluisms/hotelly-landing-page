import React from 'react';

const TOTAL_VAGAS = 10;

export default function VagasCounter() {
  const preenchidas = Math.min(
    Math.max(Number(import.meta.env.VITE_VAGAS_PREENCHIDAS) || 0, 0),
    TOTAL_VAGAS
  );
  const percentual = (preenchidas / TOTAL_VAGAS) * 100;

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">🎯</span>
        <span className="text-white font-bold text-lg">
          Apenas {TOTAL_VAGAS} vagas para o Preço de Inauguração
        </span>
      </div>
      <div
        className="w-full h-3 bg-gray-700 rounded-full overflow-hidden"
        role="progressbar"
        aria-label={`${preenchidas} de ${TOTAL_VAGAS} vagas preenchidas`}
        aria-valuenow={preenchidas}
        aria-valuemin={0}
        aria-valuemax={TOTAL_VAGAS}
      >
        <div
          className="h-full bg-brand-amber rounded-full transition-all duration-500"
          style={{ width: `${percentual}%` }}
        />
      </div>
      <div className="flex justify-between items-center mt-1.5">
        <span className="text-white font-bold text-sm">
          {preenchidas} de {TOTAL_VAGAS} vagas preenchidas
        </span>
        <span className="text-sm text-gray-400">
          Você ainda pode entrar. Mas quando as {TOTAL_VAGAS} se preencherem, encerra.
        </span>
      </div>
    </div>
  );
}
