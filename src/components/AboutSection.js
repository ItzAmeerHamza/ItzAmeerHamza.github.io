// src/components/AboutSection.js
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import HelloGif from '../assets/images/hello-gif-14.gif';

import dc from '../assets/images/deepcrowd.png';
import de1 from '../assets/images/de1.png';
import de2 from '../assets/images/de2.png';
import model from '../assets/images/model.png';
import uniformity from '../assets/images/uniformity.png';
import rd1 from '../assets/images/rd1.png';
import rd2 from '../assets/images/rd2.png';
import rd3 from '../assets/images/rd3.png';
import rd4 from '../assets/images/rd4.png';
import rd5 from '../assets/images/rd5.png';
import rd6 from '../assets/images/rd6.png';
import crmslogo from '../assets/images/crmslogo.svg';
import crmsIcon from '../assets/images/crms_icon.png';
import ip from '../assets/images/ipinfo.png';
import oppz from '../assets/images/oppz.png';

const AboutSection = () => {
    const webProjects = [
        // {
        //     id: 1,
        //     title: "Oppz AI",
        //     description: "AI Automation Platform for no code automations",
        //     images: [oppz],
        //     tech: ["Python", "FastAPI", "React", "Postgress"]
        // },
        {
          id: 2,
          title: "Campaign Management System",
          description: "A CRM for user campaign management. CRMS can be used for businesses to run their online campaings using one of the most Professional tools like email and WhatsApp.",
          images: [crmslogo, crmsIcon , crmsIcon],
          tech: ["Go", "TypeScript", "PostgreSQL", "WhatsApp Business API"]
        },
        {
            id: 3,
            title: "IPinfo.io",
            description: "IP address API: geolocation, VPN detection, company data and more. Serving over 40 billion API requests a month for 500,000+ businesses and developers.",
            images: [ip, rd1, rd2, rd3, rd4, rd5, rd6],
            tech: ["Google BQ", "Google Cloud Plateform", "Python", "Shell", "JavaScript", "Retool"]
        },
        {
            id: 4,
            title: "DeepCrowd",
            description: "An application that leverages computer vision and deep learning techniques to enable efficient crowd behavioral analysis, including anomaly detection and crowd density estimation.",
            images: [dc, model, de1, de2, uniformity],
            tech: ["Python", "PyTorch", "OpenCV", "PyQt"]
        },
    ]

    return (
    <>
    <section className="bg-light">
        <div className="container px-5">
            <div className="row gx-5 justify-content-center">
                <div className="col-xxl-8">
                    <div className="text-center my-5">
                        <h2 className="display-5 fw-bolder">
                            <span className="text-gradient d-inline">About Me</span>
                        </h2>
                        <p className="mt-5">
                            <img src={HelloGif} alt="Hello GIF" style={{ width: '150px', height: '150px' }} />
                        </p>
                        <p className="text-muted lead fw-light mb-4">
                            I am Ameer Hamza and I help businesses to go online by automating 🔧 business operations using cutting-edge technologies.
                        </p>
                        {/* <p className="text-muted">
                            I turn ideas into reality using engineering principles and magic of artificial intelligence. I help businesses to streamline and automate their workflows and earn more money using internet. 
                        </p> */}
                        <p className="text-muted">
                            As a passionate software engineer with expertise in full-stack development and a strong interest in machine learning and artificial intelligence. I thrive on creating robust, scalable applications by combining modern web technologies like React and Go with the power of AI-driven solutions. My portfolio showcases projects where I’ve implemented innovative machine learning models, crafted seamless user experiences, and optimized backend systems for performance and reliability. With a commitment to staying at the forefront of technology, I aim to bridge the gap between cutting-edge AI and practical software applications to solve real-world problems
                        </p>
                        <h4 className="text-muted">Let's connect 🤝</h4>
                        <div className="d-flex justify-content-center fs-2 gap-4" id='contect-section'>
                            <a className="text-gradient" href="mailto:ameer.hamza.nu@gmail.com" title="Send an email to Ameer Hamza"><i className="bi bi-envelope"></i></a>
                            <a className="text-gradient" href="https://www.linkedin.com/in/contact-ameer-hamza/" title="Connect with me on LinkedIn"><i className="bi bi-linkedin"></i></a>
                            <a className="text-gradient" href="https://github.com/ItzAmeerHamza" title="Follow me on Github"><i className="bi bi-github"></i></a>
                            <a className="text-gradient" href="https://www.instagram.com/am33r_ham2a/" title="Reach out to me on Instagram"><i className="bi bi-instagram"></i></a>
                            <a className="text-gradient" href="https://twitter.com/Am33rHam2a" title="Say Hi to me on Twitter"><i className="bi bi-twitter"></i></a>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center fs-2 gap-4">
                    <h2 className="display-5 fw-bolder">
                        <span className="text-gradient d-inline">Some glimpses of my work</span>
                    </h2>
                </div>
                <div className="row py-3">
                    {webProjects.map((project) => (
                    <div key={project.id} className="col-lg-4 mb-4" 
                    data-bs-toggle="modal"
                    data-bs-target="#projectModal"
                    >
                    <div
                        className="card overflow-hidden shadow rounded-4 border-0 h-100 hover-effect"
                        style={{ height: '150px' }}
                    >
                        <div className="card-body p-0">
                            <div className="d-flex align-items-center flex-row">
                            <div className="p-3" style={{ flex: 1 }}>
                                <h2 className="fw-bolder">{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                            <div
                                style={{
                                width: '200px',
                                height: '150px',
                                borderRadius: '10%',
                                overflow: 'hidden',
                                marginRight: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: '#f0f0f0',
                                }}
                            >
                                <img
                                className="img-fluid"
                                src={project.images[0]}
                                alt="DeepCrowd"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'fill',
                                }}
                                />
                            </div>
                            </div>

                            <div className="p-3">
                                {
                                project.tech.map((t) => (
                                    <span className="badge border me-2 primary-border me-2 mb-1">{t}</span>

                                ))
                                }
                            </div>
                        </div>
                    </div>
                    </div>
                    ))}
            </div>
            </div>
        </div>
    </section>
    <section className="py-5 bg-gradient-primary-to-secondary text-white">
        <div className="container px-5 my-5">
            <div className="text-center">
                <h2 className="display-4 fw-bolder">Have any project in mind?</h2>
                <p>
                    Innovative, creative, and daring - let's craft a project that embodies these qualities and more!
                </p>
                <Link className="btn btn-outline-light btn-lg fs-6 fw-bolder" to="/projects"><span>All Projects <i class="bi bi-box-arrow-up-right"></i></span></Link>
            </div>
        </div>
    </section>
    </>
)};

export default AboutSection;