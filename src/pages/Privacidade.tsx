import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacidade() {
  return (
    <div className="min-h-screen bg-brand-navy text-brand-offwhite font-sans selection:bg-brand-sky/30">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center text-brand-sky hover:text-brand-sky/80 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para a página inicial
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 text-white">Política de Privacidade — Hotelly</h1>
        
        <div className="prose prose-invert max-w-none text-white/80 space-y-6">
          <p className="text-sm text-white/50">Última atualização: 14 de março de 2026</p>
          
          <p>Bem-vindo ao Hotelly. A sua privacidade e a segurança dos dados dos seus hóspedes são nossa prioridade absoluta. Esta política descreve como coletamos, usamos, processamos e protegemos as informações em nossa plataforma.</p>

          <div>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Conformidade com a LGPD</h2>
            <p>O Hotelly foi construído seguindo os princípios de Privacy by Design. Estamos em plena conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), garantindo que os dados pessoais de hoteleiros e hóspedes sejam tratados com transparência e segurança.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Dados que Coletamos</h2>
            <p>Coletamos informações pessoais apenas quando estritamente necessário para fornecer nossos serviços. Isso inclui:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Dos Hoteleiros (nossos clientes):</strong> Dados cadastrais, informações de faturamento e credenciais de acesso ao Serpro/FNRH (criptografadas).</li>
              <li><strong>Dos Hóspedes (clientes dos hoteleiros):</strong> Informações necessárias para reservas e preenchimento da FNRH (Ficha Nacional de Registro de Hóspedes), como nome completo, CPF/Passaporte, e-mail, telefone, endereço, contato, datas de estadia e preferências de reserva.</li>
              <li><strong>Automáticos (Dados de Uso):</strong> Endereço IP, tipo de navegador e dados de interação com a plataforma para fins de segurança e melhoria contínua do serviço.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Uso das Informações</h2>
            <p>Utilizamos os dados coletados exclusivamente para:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Operar, fornecer e manter o sistema de gestão hoteleira (PMS).</li>
              <li>Automatizar o envio de dados obrigatórios (FNRH) ao Governo Federal (Serpro).</li>
              <li>Facilitar a comunicação via Concierge IA no WhatsApp (sempre de forma anonimizada e restrita ao contexto da sua pousada).</li>
              <li>Processar pagamentos e transações via gateways parceiros (ex: Mercado Pago/Stripe), além de enviar avisos relacionados (confirmações de reserva, faturas).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Proteção e Segurança dos Dados</h2>
            <p>Adotamos medidas de segurança de nível empresarial para proteger seus dados:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Criptografia:</strong> Dados sensíveis de governo (FNRH) e credenciais são protegidos com criptografia AES-256-GCM.</li>
              <li><strong>Controle de Acesso:</strong> Implementamos RBAC (Controle de Acesso Baseado em Perfis), garantindo que cada membro da equipe veja apenas o que precisa. Camareiras, por exemplo, não têm acesso a CPFs de hóspedes.</li>
              <li><strong>Redação de Logs:</strong> Dados PII (Informações Pessoalmente Identificáveis) são automaticamente omitidos de logs do sistema para evitar vazamentos acidentais.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Compartilhamento de Informações</h2>
            <p>O Hotelly não vende dados. Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto com parceiros estritamente essenciais para a operação do serviço (ex: Serpro, Instituições Financeiras, Meta para WhatsApp) e sob estrita necessidade legal ou funcional. Nossos parceiros também estão sujeitos a rigorosas políticas de privacidade.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Seus Direitos (LGPD)</h2>
            <p>Você e seus hóspedes têm o direito de solicitar o acesso, a correção, a anonimização ou a exclusão de seus dados pessoais armazenados em nossa plataforma, bem como revogar o consentimento para o tratamento de dados a qualquer momento, conforme previsto na LGPD, entrando em contato através do nosso canal de suporte.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Contato</h2>
            <p>Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através dos nossos canais oficiais de suporte.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
