import React from "react";
import Image from 'next/image'
const Projects = () => {
  return (
    <section className="mt-4">
      <h2 className="text-white underline decoration-[#F2FE67] underline-offset-2 p-3
 text-2xl font-bold tracking-wider">Projects</h2>
      <div className="flex flex-wrap justify-center lg:justify-between">
        <a
          className="w-80 h-80 transition ease-in-out hover:scale-105 flex m-4 justify-center items-center flex-col relative"
          style={{ backgroundColor: "#F2FE67" }}
          href="https://github.com/altaysimsek/Kesyme"
          target="_blank" rel="noreferrer"
        >
          <div>
            <Image
              src="/kesylogow.png"
              alt="Kesy.me"
              width="122px"
              height="47px"
            />
          </div>
          <p>Kesy is URL shortener.</p>
        </a>
        <a
          className="w-80 h-80 transition ease-in-out hover:scale-105 flex m-4 justify-center items-center flex-col relative"
          style={{ backgroundColor: "#fff", }}
          href="https://github.com/altaysimsek/phohipo"
          target="_blank" rel="noreferrer"
        >
          <div>
            <Image
              src="/phohipologo.png"
              alt="Phohipo"
              width="122px"
              height="47px"
            />
          </div>
          <p>Phohipo is a Unsplash client.</p>
        </a>
        <a
          className="w-80 h-80 transition ease-in-out hover:scale-105 flex m-4 justify-center items-center flex-col relative"
          style={{ backgroundColor: "#220FD5", color: "#F2FE67" }}
          href="https://github.com/altaysimsek/phohipo"
          target="_blank" rel="noreferrer"
        >
          <div>
            <Image
              src="/klimalogo.png"
              alt="Kesy.me"
              width="122px"
              height="47px"
            />
          </div>
          <p>Klima is a weather app.</p>
        </a>

        <a
          className="w-80 h-80 transition ease-in-out hover:scale-105 flex m-4 justify-center items-center flex-col relative"
          style={{ backgroundColor: "#834eff", color: "#fff" }}
          href="https://github.com/altaysimsek/MovieUP-Challange"
          target="_blank" rel="noreferrer"
        >
          <div>
            <Image
              src="/moviuplogo.png"
              alt="MovieUP"
              width="122px"
              height="47px"
            />
          </div>
          <p>MovieUP is an IMDB client.</p>
        </a>
      </div>
      <div className="flex justify-center text-white">
        <p>For more projects visit my <a href="https://github.com/altaysimsek" className="font-bold text-[#F2FE67]" target="_blank" rel="noreferrer">GitHub</a></p>
      </div>
    </section >
  );
};

export default Projects;
