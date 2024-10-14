import React, { useEffect, useState } from 'react';
import './Projects.css'; // Länka till din CSS-fil för Projects

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const githubUsername = 'OlssonMartin'; // Sätt ditt GitHub-användarnamn här

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [githubUsername]);
    // Exempel på filtrering
    const allowedProjects = ['mat-app-react', 'ChatApp', 'Weather-app', 'react-app-portfolio'] ; // Ersätt med dina repo-namn
    const filteredProjects = projects.filter(project => 
        allowedProjects.includes(project.name)
    );

    return (
        <section id="projects" className="projects-section">
            <h3>Projects</h3>
            {loading ? (
                <p>Loading projects...</p>
            ) : (
                <div className="projects-container">
                    {filteredProjects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <h4>{project.name}</h4>
                            <p>{project.description || 'No description available.'}</p>
                            <a href={project.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Projects;