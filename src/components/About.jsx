import React from "react";

const about = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm a full stack developer from Portugal, I’m a very communicative and
          sociable person, with good power of argumentation who loves to talk.
          I'm always looking forward to new learning experiences. I have always
          had a curiosity about the tech world, for example, I’ve always asked
          myself “how does a website work?”, “How can people make websites”.
          This curiosity increased with time plus the fact that I have friends
          working in this area who told me to try. In 2022 I decided to join
          Ironhack, and make a Web Development Bootcamp.
        </p>
        <br />
        <p className="text-xl">
          With this bootcamp I expanded my knowledge in both backend and
          frontend technologies. I also acquired some SCRUM skills during the
          bootcamp.
        </p>
        <br />
        <p className="text-xl">
          - Frontend: React JS | JavaScript (ES6) | HTML5 | CSS3 | Bootstrap |
          Handlebars | DOM Manipulation <br />- Backend: ExpressJS | NodeJS |
          MongoDB | Mongoose | Axios | API Integration | NPM Packages - Tools:
          MongoDB Compass | Visual Code Studio | Postman | GitHub
        </p>
        <br />
        <p className="text-xl">
          WORK EXPERIENCE 🧑🏼‍💻 I worked at a motorcycle shop in the parts
          department for almost two years, and then I got a job in the delivery
          area, delivering meat at a butcher shop. Thanks to these experiences I
          got really good at communicating with people and working with
          timelines.
        </p>
        <br />
        <p className="text-xl">
          {" "}
          INTERESTS 🛫 I love football, cars, motorcycles, and travel.
        </p>
      </div>
    </div>
  );
};

export default about;
