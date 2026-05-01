import React from 'react';
import './Skills.css';
import bearImg from '../../assets/bear.png';
import adobeImg from '../../assets/tools/adobe.png';
import figmaImg from '../../assets/tools/figma.png';
import canvaImg from '../../assets/tools/canva.png';
import githubImg from '../../assets/tools/git.png';
import vscodeImg from '../../assets/tools/vscode.png';
import vercelImg from '../../assets/tools/vercel.png';
import supabaseImg from '../../assets/tools/supabase.png';
import illustratorImg from '../../assets/tools/illustrator.png';

const Skills = () => {
    const technicalSkills = [
        { name: 'Color Theory', percentage: '80%', color: '#ff4d94', icon: '🎨' },
        { name: 'Visual Storytelling', percentage: '95%', color: '#ffcc00', icon: '📚' },
        { name: 'Wireframing & Prototyping', percentage: '90%', color: '#00ccff', icon: '✏️' },
        { name: 'Layout & Composition', percentage: '85%', color: '#66cc33', icon: '📐' },
        { name: 'Social Media Design', percentage: '90%', color: '#3366ff', icon: '📱' },
        { name: 'UI Basics', percentage: '80%', color: '#9933ff', icon: '🖥️' },
        { name: 'Typography', percentage: '85%', color: '#ff9933', icon: '✍️' },
        { name: 'Design Systems', percentage: '75%', color: '#0066ff', icon: '🧩' },
    ];


    const softSkills = [
        'Problem Solving',
        'Creative Thinking',
        'Time Management',
        'Attention to Detail',
        'Team Collaboration',
        'Adaptability',
        'Continuous Learning',
    ];

    const tools = [
        { name: 'Adobe Photoshop', icon: adobeImg, isImage: true },
        { name: 'Figma', icon: figmaImg, isImage: true },
        { name: 'Canva', icon: canvaImg, isImage: true },
        { name: 'GitHub', icon: githubImg, isImage: true },
        { name: 'VS Code', icon: vscodeImg, isImage: true },
        { name: 'Vercel', icon: vercelImg, isImage: true },
        { name: 'Supabase', icon: supabaseImg, isImage: true },
        { name: 'Illustrator', icon: illustratorImg, isImage: true },
    ];

    return (
        <section className="skills-section" id="skills">
            <header className="skills-header">
                <h2 className="skills-title">MY SKILLS</h2>
                <p className="skills-subtitle">A blend of creativity, logic & endless curiosity.</p>
            </header>

            <div className="skills-grid-container">
                {/* Main Row: Technical and Soft Skills */}
                <div className="skills-main-row">
                    {/* Technical Skills Box */}
                    <div className="skills-box technical-skills-card">
                        <div className="box-header">
                            <h3 className="box-badge pink-badge">SKILLS</h3>
                        </div>
                        <div className="technical-list">
                            {technicalSkills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-icon-wrap">{skill.icon}</span>
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-percentage">{skill.percentage}</span>
                                    </div>
                                    <div className="progress-bar-bg">
                                        <div
                                            className="progress-bar-fill"
                                            style={{ width: skill.percentage, backgroundColor: skill.color }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills Box */}
                    <div className="skills-box soft-skills-card">
                        <div className="box-header">
                            <h3 className="box-badge yellow-badge">SOFT SKILLS</h3>
                        </div>
                        <ul className="soft-skills-list">
                            {softSkills.map((skill, index) => (
                                <li key={index} className="soft-skill-item">
                                    <span className="star-icon">⭐</span> {skill}
                                </li>
                            ))}
                        </ul>
                        <div className="bear-mascot-container">
                            <img src={bearImg} alt="Cute Bear" className="bear-mascot" />
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Tools and Learning */}
                <div className="skills-bottom-row">
                    {/* Tools Box */}
                    <div className="skills-box tools-card">
                        <div className="box-header">
                            <h3 className="box-badge tool-badge">TOOLS & TECHNOLOGIES</h3>
                        </div>
                        <div className="tools-list">
                            {tools.map((tool, index) => (
                                <div key={index} className="tool-item">
                                    <div className="tool-icon-circle">
                                        {tool.isImage ? (
                                            <img src={tool.icon} alt={tool.name} className="tool-icon-img" />
                                        ) : (
                                            tool.icon
                                        )}
                                    </div>
                                    <span className="tool-name">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Always Learning Box */}
                    <div className="learning-card-container">
                        <div className="learning-card-inner">
                            <h3 className="learning-title">ALWAYS LEARNING</h3>
                            <p className="learning-text">
                                I love exploring new technologies<br />
                                and turning ideas into real<br />
                                world magic. ✨
                            </p>
                            <svg className="learning-heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12.3 21.3C9.2 19.1 2 13.6 2.5 8.2c.3-3.3 2.8-5 5.4-4.8 2.1.2 3.6 1.7 4.1 3 .6-1.5 2.2-2.8 4.6-2.8 3.1 0 5.7 2.2 5.4 5.8-.4 4.5-5.9 9.6-9.7 11.9z"></path>
                            </svg>
                        </div>
                        <svg className="learning-clip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
