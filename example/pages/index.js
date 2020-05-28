import React from 'react';
import dynamic from 'next/dynamic';

import banana from '../public/banana.jpg';

const Modal = dynamic(() => import('pwa-add-home-ios'), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      <div className="container">
        <div className="content">
          <h1>Bring this to your homepage!</h1>
        </div>
        <Modal
          title="Adicionar banana à página inicial"
          image={banana}
          onClickBanner={() => alert('hey bro')}
        />

        <style jsx>{`
          .content {
            height: 2000px;
            background-color: tomato;
          }

          h1 {
            margin: 0 auto;
            text-align: center;
            padding-top: 148px;
            color: #333;
          }
        `}</style>

        <style global jsx>{`
          body {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
            font-family: sans-serif;
          }
        `}</style>
      </div>
    </>
  );
};

export default Home;
