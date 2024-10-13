import React from "react";
import LinkedinIcon from './media/Linkedin.png';
import GithubIcon from './media/githubicon.png';
import ResumeIcon from './media/fileicon.png';

const Sidebar = () => {
    const Links = [
        {
            icon: LinkedinIcon,
            href: "https://Linkedin.com/in/lopez-eloy/",
            target: "_blank",
            rel: "noopener noreferrer",
        },
        {
            icon: GithubIcon,
            href: "https://github.com/LopezEloy",
            target: "_blank",
            rel: "noopener noreferrer",
        },
        {
            icon: ResumeIcon,
            href: `${process.env.PUBLIC_URL}/EloyLopezResume.pdf`, // Use PUBLIC_URL
            target: "_blank",
            rel: "noopener noreferrer",
        },
    ];

    return (
        <div className="sidebar">
            {Links.map((link, index) => (
                <div className="sidebar-item" key={index}>
                    <a href={link.href} target={link.target} rel={link.rel}>
                        <img src={link.icon} alt="Link Icon" />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
