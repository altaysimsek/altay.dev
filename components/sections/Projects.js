import React from "react";
const Projects = () => {
  return (
    <section>
      <h2 className="text-white text-4xl font-bold tracking-wider">Projects</h2>
      <div className="flex flex-wrap">
        <div
          className="w-96 h-96 flex m-4 justify-center items-center flex-col relative"
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
          className="w-96 h-96 flex m-4 justify-center items-center flex-col relative"
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
      </div>
    </section>
  );
};

export default Projects;
