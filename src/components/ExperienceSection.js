// src/components/ExperienceSection.js
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import mslm from '../assets/images/mslm.png';
import astech from '../assets/images/astech.png';
import oppz from '../assets/images/oppz.png';

const theme = createTheme({
  components: {
    MuiTimelineItem: {
      styleOverrides: {
        root: {
          '&:before': {
            display: 'none',
          },
        },
      },
    },
  },
});

const ExperienceSection = () => (
    <section>
        <div class="d-flex align-items-center justify-content-between mb-4">
            <h2 class="text-secondary fw-bolder mb-4">Experience</h2>
            <a class="btn btn-primary" target="_blank" href="https://www.dropbox.com/scl/fi/lhsox8trcpfy0sc2e8ofn/ameer_hamza_resume.pdf?rlkey=bwm2dffcjxjfdw1z9dn18ausp&st=p5zym1zs&dl=0">
                <div class="d-inline-block bi bi-download me-2"></div>
                Download Resume
            </a>
        </div>
        <div class="card shadow border-0 rounded-4 mb-5">
            <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <a href="https://www.oppz.ai/" style={{ textDecoration: 'none' }}>
                            <div className="bg-light p-4 rounded-4 d-flex align-items-center">
                                <img 
                                src={oppz} 
                                alt="Mslm Logo" 
                                style={{ width: '60px', height: '60px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px' }} 
                                />
                                <div>
                                    <div className="text-primary fw-bolder mb-2">2023 - 2024</div>
                                    <div className="mb-2">
                                        <div className="small fw-bolder">Full Stack Engineer</div>
                                        <div className="small text-muted">Oppz</div>
                                    </div>
                                    <div className="fst-italic">
                                        <div className="small text-muted">Lahore Pakistan</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-8">
                        <div>
                            <ThemeProvider theme={theme}>
                                <Timeline>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                        Contributed to the development of an AI-powered no-code automation platform enabling users to design automations
                                        using drag-and-drop nodes and dynamic branching logic.
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                        Designed and implemented AI nodes (e.g., text summarization, text extraction, sentiment analysis) leveraging LangChain
                                        and LLMs for generative AI-powered automations.
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                        Developed and maintained backend services using FastAPI, integrating third-party platforms (e.g., Gmail, Discord,
                                            Reddit) through REST APIs, OAuth2, and webhooks.
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                        Built reusable frameworks for no-code workflow orchestration, including custom triggers (cron, interval, event-based) and
                                        task queues using Celery.
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                        <TimelineDot />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                        Performed dynamic application scans and security reviews to support Google CASA certification, enhancing platform
                                        compliance and security posture.
                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Experience Card 1--> */}
        <div class="card shadow border-0 rounded-4 mb-5">
            <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <a href="https://mslm.io/" style={{ textDecoration: 'none' }}>
                            <div className="bg-light p-4 rounded-4 d-flex align-items-center">
                                <img 
                                src={mslm} 
                                alt="Mslm Logo" 
                                style={{ width: '60px', height: '60px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px' }} 
                                />
                                <div>
                                    <div className="text-primary fw-bolder mb-2">2023 - 2024</div>
                                    <div className="mb-2">
                                        <div className="small fw-bolder">Software Engineer</div>
                                        <div className="small text-muted">Mslm</div>
                                    </div>
                                    <div className="fst-italic">
                                        <div className="small text-muted">Lahore Pakistan</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-8">
                        <div>
                            <ThemeProvider theme={theme}>
                                <Timeline>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            Performed data analysis on VPN privacy dataset of IPINFO using Google BQ to intelligently assign
                                             relavent providers to different VM buckets with respect to churn rate and IP differences.
                                            {/* Used Google BQ for analyzing VPN privacy dataset and improved system performance by query optimization. */}
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            Incorporated scripts using Python and Shell Script(Bash) to scrap different VPN 
                                            extensions and configs to add new IP data points.
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            Explored ways to visualize and send a daily report of results against IP churn and IP differences
                                            to change the buckets of different providers.
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                        <TimelineDot />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            Developed a Golang application for WhatsApp campaign management using 
                                            WhatsApp Business API. The scope of the application is to be used, for marketing and utility-based campaigns via different messaging templates.
                                            Added B2B functionalities for working as a Business Service Provider (BSP) and Tech Provider.
                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Experience Card 2--> */}
        <div class="card shadow border-0 rounded-4 mb-5">
            <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <a href="https://www.linkedin.com/company/astechware/posts/?feedView=all" style={{ textDecoration: 'none' }}>
                        <div className="bg-light p-4 rounded-4 d-flex align-items-center">
                            <img 
                            src={astech} 
                            alt="Mslm Logo" 
                            style={{ width: '70px', height: '70px', objectFit: 'contain', marginRight: '10px', borderRadius: '50px' }} 
                            />
                            <div>
                                <div className="text-primary fw-bolder mb-2">2020 - 2022</div>
                                <div className="mb-2">
                                    <div className="small fw-bolder">Associate Software Engineer</div>
                                    <div className="small text-muted">A'sTechware</div>
                                </div>
                                <div className="fst-italic">
                                    <div className="small text-muted">Lahore Pakistan</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    </div>
                    <div class="col-lg-8">
                        <div>
                        <Timeline>
                            <TimelineItem
                            sx={{
                                '&:before': {
                                    display: 'none', // Hides the ::before pseudo-element
                                },
                                }}
                            >
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    Leveraged my skills as an ASE, specializing in Ruby on Rails (RoR) development, 
                                    to deliver robust and scalable solutions that have successfully met the needs 
                                    of various projects and clients.
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem
                            sx={{
                                '&:before': {
                                    display: 'none', // Hides the ::before pseudo-element
                                },
                                }}
                            >
                                <TimelineSeparator>
                                <TimelineDot />
                                </TimelineSeparator>
                                <TimelineContent>
                                    Full-stack developer - Wrote and reviewed code for rails applications, with expertise in both frontend templating engines (ERB, HAML, Slim) and backend Ruby development.
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default ExperienceSection;