import React from 'react';
import '../Pages/Navbar/Navbar.css'

const Banar = () => {
    
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url("https://cdn.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej.png")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 color font-serif text-6xl font-bold">Social media</h1>
                    <p className="mb-5 font-bold">Social media is a collective term for websites and applications that focus on communication, community-based input, interaction, content-sharing and collaboration.</p>
                    <button className="btn btn-primary">join now</button>
                </div>
            </div>
        </div>
    );
};

export default Banar;