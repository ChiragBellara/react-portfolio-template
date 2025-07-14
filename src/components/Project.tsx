import React from "react";
import project1 from '../assets/images/project_1.png';
import project2 from '../assets/images/project_2.png';
import project3 from '../assets/images/project_3.png';
import project4 from '../assets/images/project_4.png';
import project5 from '../assets/images/project_5.png';
import project6 from '../assets/images/project_6.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={project1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>ViXlate</h2></a>
                <p><b>Tech:</b> Python, TensorFlow, Keras, Flask, JavaScript</p>
                <p>A video translation platform that turns sign language into spoken English using deep learning. I built the backend with TensorFlow + Flask, and handled the full-stack logic using Flask and JavaScript that makes the model accessible through a sleek web interface. Basically: making accessibility a little more... accessible.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={project2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Bias Detection & Mitigation in LLMs</h2></a>
                <p><b>Tech:</b> Python, Hugging Face, LLMs, LaTeX</p>
                <p>This project is my deep dive into the world of LLM fairness. I explored how different prompts, models, and sampling techniques affect bias in model output. I built tools to quantify, compare, and visualize bias, and proposed mitigation strategies that actually made a difference. It’s part code, part research, part nerdy justice mission.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={project3} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Crime Rate Analysis in Toronto</h2></a>
                <p><b>Tech:</b> Python, R, Excel, Shiny</p>
                <p>Pulled years of crime data from open sources and used machine learning to analyze trends. Built a Shiny dashboard for interactive exploration and pattern discovery. If you're wondering which neighborhood saw what kind of crime — this app had answers.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={project4} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Plastic Waste Profiling</h2></a>
                <p><b>Tech:</b> Python, TensorFlow, Keras, Django, JavaScript, OpenCV</p>
                <p>Used deep learning to detect and identify branded plastic waste in images of garbage. The goal? Hold companies accountable by profiling the top waste producers. The model was extremely good at spotting and identifying logos in crushed packaging with an average accuracy of ~88%.</p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={project5} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>Street Quality Mapper</h2></a>
                <p><b>Tech:</b> Python, Raspberry Pi, Arduino, C++, JavaScript</p>
                <p>Built a system that detects potholes using accelerometer + GPS data and maps them to a web dashboard. Used a Raspberry Pi + Arduino setup on a bike for data collection. Published the project in IEEE — because roads deserve better too.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={project6} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>BrainKey</h2></a>
                <p><b>Tech:</b> ElectronJS, Python, EEG, Signal Processing</p>
                <p>Built a brain-interfaced keyboard using NeuroSky’s Mindwave EEG headset. Users with severe physical disabilities could blink to type, erase, or trigger alarms. Signal noise was a nightmare, but the final prototype worked — and it still blows people’s minds when I demo it.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;