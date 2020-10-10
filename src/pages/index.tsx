import React, { FC } from "react";
import Head from "next/head";

const Home: FC<{}> = () => (
  <>
    <Head>
      <title>Hi there! I'm 4t4sh</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-full"
            alt="hero"
            src="images/photo_4t4sh.jpg"
          />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">
              Ata Sanchez (@4t4sh)
            </h1>
            <p className="mb-8 leading-relaxed">
              Hola! Soy un Mobile Software Engineer viviendo en Córdoba,
              Argentina y trabajando remoto para el mundo 🧙🏼‍♂️. A menudo asisto a
              eventos tech y conduzco algunos otros, disfruto construyendo MVPs,
              creando contenido con amigos y de vez en cuando toco música en mi
              tiempo libre.
            </p>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default Home;
