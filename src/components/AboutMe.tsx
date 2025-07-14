import React from "react";
import '@fortawesome/free-regular-svg-icons';
import '../assets/styles/AbouteMe.scss';

const AboutMe = () => {
  return (
      <div className="container" id="aboutme">
        <div className="aboutme-container">
          <h1>About Me</h1>
          <div>
            <p>
              Hey there! I’m <strong>Chirag Bellara</strong> — developer, machine-learning nerd, and part-time philosopher on fairness in AI.
            </p>
            <p>
              I’m currently wrapping up my <strong>Master’s in Computer Science at Purdue</strong>, and when I’m not wrangling code, I’m probably overanalyzing anime plotlines or vibing to some really weirdly specific playlists.
            </p>
            <p>
              My thing? <strong>Building cool stuff</strong> — whether it’s a brain-powered keyboard, crime-predicting dashboards, or figuring out how to make large language models a little less biased and a lot more trustworthy.
            </p>
            <p>
              I’ve worked with <strong>Accenture</strong>, done research in <strong>Data Science labs</strong>, and shipped full-stack apps that solve real problems. I love sitting at the intersection of logic and creativity — from designing clean, scalable systems to writing code that doesn’t make my future self cry.
            </p>
            <p>
              I’m always up for a chat — whether it’s about <strong>LLMs</strong>, <strong>frontend frameworks</strong>, <strong>why TypeScript is amazing and annoying</strong>, or which anime deserves a second season.
            </p>
          </div>
        </div>
      </div>
  );
};

export default AboutMe;