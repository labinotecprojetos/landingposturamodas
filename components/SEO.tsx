import React from 'react';

const SEO: React.FC = () => {
  return (
    <section className="sr-only">
        <h2>Postura Modas - O Clube da Moda Masculina</h2>
        <p>
            Mais do que uma loja de roupas, a Postura Modas é um conceito de autoridade e masculinidade.
            Especialistas em imagem pessoal para homens que buscam liderança e respeito.
        </p>
        <p>
            Baixe nosso aplicativo para ter acesso ao catálogo exclusivo de ternos, camisas sociais e acessórios de alto padrão.
            Localizada em {`São Paulo`}, oferecemos atendimento VIP via WhatsApp.
        </p>
        <h3>Estilo e Autoridade</h3>
        <ul>
            <li>Consultoria de Imagem Masculina</li>
            <li>Roupas para Advogados e Executivos</li>
            <li>Moda Masculina Premium</li>
            <li>Clube de Vantagens Postura Modas</li>
        </ul>
    </section>
  );
};

export default SEO;