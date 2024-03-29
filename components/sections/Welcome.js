import React from "react";
import Contact from '../Contact'
import Image from 'next/image'

const Welcome = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row p-4">
      <div className="w-full lg:w-7/12 text-white p-4 flex flex-col">
        <h1 className="font-bold text-3xl mb-8">Hey there 👋<br />
          I am Altay Simsek, a <span className="text-[#F2FE67]">front-end developer</span>
        </h1>
        <p className="text-lg">I am currently working at <strong>Trendyol</strong> as Software Developer also graduated from <strong>Pamukkale University</strong> Computer Engineering. I am interested in front-end technologies and love working with <strong>JavaScript</strong>. Trying to contribute open-source projects and publishing my own projects on <strong>GitHub</strong>.</p>
        <div className="flex flex-col mt-auto">
          <p className="text-[#F2FE67] mb-2">Feel free to contact</p>
          <div>
            <Contact />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full lg:w-5/12 p-5">
        <div className="transition drop-shadow-[10px_10px_0px_rgba(242,254,0,1)] hover:drop-shadow-[20px_20px_0px_rgba(242,254,0,1)]">
          <Image src="/altay.jpg" alt="Altay Simsek" className={''} width={'300'} height={'489'} ></Image>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
