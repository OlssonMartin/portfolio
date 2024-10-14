import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiBootstrap, SiFigma, SiNpm, SiMongodb, SiTailwindcss } from 'react-icons/si';
import './Skills.css';

const skillsData = [
    { name: 'HTML5', level: 'Competent', icon: <FaHtml5 /> },
    { name: 'CSS3', level: 'Competent', icon: <FaCss3Alt /> },
    { name: 'JavaScript', level: 'Competent', icon: <FaJs /> },
    { name: 'React.js', level: 'Competent', icon: <FaReact /> },
    { name: 'Git', level: 'Competent', icon: <FaGitAlt /> },
    { name: 'GitHub', level: 'Competent', icon: <FaGithub /> },
    { name: 'Bootstrap', level: 'competent', icon: <SiBootstrap /> },
    { name: 'Figma', level: 'Competent', icon: <SiFigma /> },
    { name: 'NPM', level: 'Competent', icon: <SiNpm /> },
    { name: 'MongoDB', level: 'Beginner', icon: <SiMongodb /> },
    { name: 'Tailwind', level: 'Beginner', icon: <SiTailwindcss /> },
];

const Skills = () => {
    return (
        <section id="skills" className="section">
            <h3>Main Skills</h3>
            <div className="skills-container">
                {skillsData.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div className="icon">{skill.icon}</div>
                        <h4>{skill.name}</h4>
                        <p>{skill.level}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;