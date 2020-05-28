import React from 'react';
import dynamic from 'next/dynamic';

import banana from '../public/banana.jpg';

const Modal = dynamic(() => import('pwa-add-home-ios'), {
  ssr: false,
});

const Home = () => (
  <div className="container">
    <div className="content">
      <h1>Ola</h1>
    </div>
    <Modal
      title="Adicionar banana à página inicial"
      image={banana}
      onClickBanner={() => alert('hey bro')}
    />

    <style jsx>{`
      .content {
        height: 2000px;
        background-color: red;
      }
    `}</style>
  </div>
);

export default Home;
