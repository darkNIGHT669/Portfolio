import { Frameworks } from "../components/Frameworks";

const About = () => {
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-12 mt-12">
        {/* Grid 1: Intro */}
        <div className="grid-default-color grid-5 relative">
          <img
            src=""
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Harsh</p>
            <p className="subtext">
              I’m a passionate Software Developer and Full-Stack Engineer who loves building digital products that are not only functional but also delightfully user-friendly. With a strong foundation in C++, Data Structures & Algorithms, and hands-on expertise in the MERN stack (MongoDB, Express.js, React, Node.js), I bring both problem-solving skills and modern web development experience to the table.

💡 My journey has been a mix of electronics engineering concepts and software innovation, allowing me to bridge the gap between hardware and software when needed. I thrive on turning ideas into impactful projects—from crafting sleek, responsive frontends to designing scalable backends.

✨ When I’m not coding, you’ll find me solving logic puzzles, exploring new tech trends, or strategizing over a chessboard or football game.

🔗 I’m currently looking for opportunities to contribute to exciting software projects, collaborate with innovative teams, and grow into a versatile software engineer who makes a difference.



            </p>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

       {/* Grid 5: Tech Stack */}
<div className="grid-default-color grid-5 relative">
  <div className="z-10 w-full md:w-[50%] space-y-4">
    <p className="headText">Tech Stack</p>
    <div className="subtext space-y-2">
      <p><span className="font-semibold">💻 Languages:</span> C++, JavaScript (ES6+), Node.js, HTML5, CSS3</p>
      <p><span className="font-semibold">🛠 Frameworks:</span> React.js, Express.js, Tailwind CSS, Bootstrap</p>
      <p><span className="font-semibold">🗄 Databases:</span> MongoDB, MySQL</p>
      <p><span className="font-semibold">✅ Testing & QA:</span> Selenium, Jest, Postman, JUnit</p>
      <p><span className="font-semibold">🔧 Version Control:</span> Git, GitHub, GitLab</p>
      <p><span className="font-semibold">🚀 Other Skills:</span> REST APIs, Agile/Scrum, Deployment (Vercel, Netlify, Heroku), CI/CD pipelines</p>
      <p><span className="font-semibold">🔌 Embedded:</span> Arduino, Microcontrollers, C programming <span className="italic text-gray-400">(highlighted only for hardware/electronics roles)</span></p>
    </div>
  </div>
  <div className="absolute inset-y-0 md:inset-y-9 w-full md:start-[50%] md:scale-125">
    <Frameworks />
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
