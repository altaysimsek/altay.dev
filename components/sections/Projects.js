import React from "react";
const Projects = () => {
  return (
    <section>
      <h2 className="text-white underline decoration-[#F2FE67] underline-offset-2
 text-4xl font-bold tracking-wider">Projects</h2>
      <div className="flex flex-wrap justify-center " >
        <div
          className="w-80 h-80 flex m-4 justify-center items-center flex-col relative"
          style={{ backgroundColor: "#F2FE67" }}
        >
          <div>
            <img
              src="/kesylogow.png"
              alt="Kesy.me"
              width="122px"
              height="47px"
            />
          </div>
          <p>Kesy is URL shortener.</p>
        </div>
        <div
          className="w-80 h-80 flex m-4 justify-center items-center flex-col relative"
          style={{ backgroundColor: "#fff", }}
        >
          <div>
            <img
              src="/phohipologo.png"
              alt="Phohipo"
              width="122px"
              height="47px"
            />
          </div>
          <p>Phohipo is a Unsplash client.</p>
        </div>
        <div
          className="w-80 h-80 flex m-4 justify-center items-center flex-col relative"
          style={{ backgroundColor: "#220FD5", color: "#F2FE67" }}
        >
          <div>
            <img
              src="/klimalogo.png"
              alt="Kesy.me"
              width="122px"
              height="47px"
            />
          </div>
          <p>Klima is a weather app.</p>
        </div>

        <div
          className="w-80 h-80 flex m-4 justify-center items-center flex-col relative"
          style={{ backgroundColor: "#834eff", color: "#fff" }}
        >
          <div>
            <img
              src="/moviuplogo.png"
              alt="MovieUP"
              width="122px"
              height="47px"
            />
          </div>
          <p>MovieUP is an IMDB client.</p>
        </div>
      </div>
    </section >
  );
};

export default Projects;
