import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Termos() {
  return (
    <div className="min-h-screen bg-brand-navy text-brand-offwhite font-sans selection:bg-brand-sky/30">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center text-brand-sky hover:text-brand-sky/80 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para a página inicial
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 text-white">Termos de Uso — Hotelly</h1>
        
        <div className="prose prose-invert max-w-none text-white/80 space-y-6">
          <p className="text-sm text-white/50">Última atualização: 14 de março de 2026</p>
          
          <p>Estes Termos de Uso regem a utilização do software de gestão hoteleira Hotelly. Ao utilizar nossa plataforma, você concorda com as condições abaixo.</p>

          <div>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Natureza do Serviço</h2>
            <p>O Hotelly é uma plataforma SaaS (Software as a Service) voltada para a gestão de reservas, automação de processos e concierge virtual para o mercado de hospitalidade independente.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Planos e Limites</h2>
            <p>O uso do sistema é limitado de acordo com o plano contratado:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Essencial:</strong> Limite de até 20 quartos.</li>
              <li><strong>Maestro:</strong> Limite de até 50 quartos.</li>
              <li><strong>Rede:</strong> Condições sob medida para múltiplas unidades ou acima de 50 quartos.</li>
            </ul>
            <p className="mt-2 text-white/70">O abuso ou tentativa de burlar esses limites poderá resultar em suspensão da conta.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Oferta de Inauguração (Benefício de Fundador)</h2>
            <p>Hoteleiros que contratarem o Hotelly durante a fase inaugural garantem um desconto de 50% vitalício sobre o valor de tabela do plano. Esse percentual de desconto será mantido enquanto o contrato permanecer ativo, mesmo havendo reajustes anuais padrão de mercado nos valores de tabela.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Responsabilidades do Usuário</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>O usuário é responsável pela veracidade dos dados inseridos.</li>
              <li>O usuário deve manter suas credenciais de acesso seguras.</li>
              <li>O uso da IA (Concierge) deve respeitar as diretrizes éticas e de cadastro da plataforma.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Disponibilidade e Suporte</h2>
            <p>Buscamos manter uma disponibilidade de 99,8% (SLA). O suporte é oferecido via chat e e-mail de acordo com a prioridade estabelecida em cada plano.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Cancelamento</h2>
            <p>O hoteleiro pode cancelar a assinatura a qualquer momento através do painel. Não há taxa de fidelidade, exceto se especificado em contratos customizados para o plano Rede.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Propriedade Intelectual</h2>
            <p>O Hotelly, seu código, marca e algoritmos de IA são de propriedade exclusiva da marca.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
