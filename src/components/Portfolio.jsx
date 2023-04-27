import React from "react";
import IronClip from "../assets//portfolio/ironclip.jpg";
import JobCoach from "../assets//portfolio/jobcoach.jpg";
import NbaPedia from "../assets//portfolio/nbapedia.jpg";
import UXUIWebsite from "../assets/portfolio/UXUIWebsite.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: IronClip,
      demo: "https://goncaloarsenio.github.io/project_1_Game/",
      code: "https://github.com/goncaloarsenio/project_1_Game",
    },

    {
      id: 2,
      src: NbaPedia,
      demo: "https://nbapedia.cyclic.app/",
      code: "https://github.com/goncaloarsenio/project3-client",
    },
    {
      id: 3,
      src: JobCoach,
      demo: "https://ironhack-project3-client.netlify.app/",
      code: "https://github.com/goncaloarsenio/project_2",
    },

    {
      id: 4,
      src: UXUIWebsite,
      demo: "https://uxuimodernwebsite.netlify.app/",
      code: "https://github.com/goncaloarsenio/my-react-project-1",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {" "}
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
