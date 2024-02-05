import React from 'react';
import './showInfo.css';
import CatGallery from './CatGallery';

function ShowInfo({ activeSection }) {
    return (
        <>
        {activeSection === 'aboutme' && (
            <section id="about" className="fade-in">  
                <h2>About Me</h2>
                <p>This is a section where I will write something about myself</p>
            </section>
        )}
        {activeSection === 'projects' && (
            <section id="projects" className="fade-in">
                <h2>My Projects</h2>
                <p>This is a section where I will showcase my projects</p>
            </section>
        )}
        {activeSection === 'contactme' && (
            <section id="contact" className="fade-in">
                <h2>Contact Me</h2>
                <p>This is a section where I will provide my contact information</p>
            </section>
        )}
        {activeSection === 'catpictures' && (
            <section id="cat" className="fade-in">
                <h2>Cat Pictures</h2>
                <CatGallery />
            </section>
        )}
        </>
    );
}

export default ShowInfo;