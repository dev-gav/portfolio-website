import React from "react";
import "./skills.css";

const skillsData = [
  {
    title: "Languages",
    description: "Core programming languages I use for building applications and services.",
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "PHP" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", alt: "C#" },
    ],
  },
  {
    title: "Front-End",
    description: "Technologies I use to build responsive interfaces and web experiences.",
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
    ],
  },
  {
    title: "Back-End",
    description: "Frameworks and databases I use to build scalable APIs and services.",
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", alt: "Laravel" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", alt: "Django" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", alt: "GraphQL" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
    ],
  },
  {
    title: "Tools",
    description: "Development tools and platforms I use for infrastructure and deployment.",
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg", alt: "Docker" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", alt: "Unity" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
    ],
  },
];

function Skills() {
  return (
    <div className="skills">
      {skillsData.map((skill) => (
        <div className="skill" key={skill.title}>
          <h2>{skill.title}</h2>

          <div className="image-grid">
            {skill.icons.map((icon) => (
              <img key={icon.alt} src={icon.src} alt={icon.alt} />
            ))}
          </div>

          <p>{skill.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Skills;