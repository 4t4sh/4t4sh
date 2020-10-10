import React, { FC } from "react";
import Head from "next/head";

const Home: FC<{}> = () => (
  <div>
    <Head>
      <title>Hi there! I'm 4t4sh</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="md:flex bg-white rounded-lg p-24 justify-center">
      <img
        className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        src="photo_4t4sh.jpg"
      />
      <div className="text-center md:text-left">
        <h2 className="text-lg">Ata Sánchez (4t4sh)</h2>
        <div className="text-purple-500">Software Engineer</div>
        <div className="text-gray-600">Twitter: @4t4sh</div>
        <div className="text-gray-600">www.4t4.sh</div>
      </div>
    </main>
  </div>
);

export default Home;
