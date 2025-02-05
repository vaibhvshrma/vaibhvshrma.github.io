import React, { Component } from "react";
import ReactGA from "react-ga";
import { userDetails } from "../../constants";

export class About extends Component {
  constructor() {
    super();
    this.screens = {};
    this.state = {
      screen: () => {},
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    };
  }

  componentDidMount() {
    this.screens = {
      about: <AboutOverview />,
      education: <Education />,
      skills: <Skills />,
      // projects: <Projects />,
      resume: <Resume />,
    };

    let lastVisitedScreen = localStorage.getItem("about-section");
    if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
      lastVisitedScreen = "about";
    }

    // focus last visited screen
    this.changeScreen(document.getElementById(lastVisitedScreen));
  }

  changeScreen = (e) => {
    const screen = e.id || e.target.id;

    // store this state
    localStorage.setItem("about-section", screen);

    // google analytics
    ReactGA.pageview(`/${screen}`);

    this.setState({
      screen: this.screens[screen],
      active_screen: screen,
    });
  };

  showNavBar = () => {
    this.setState({ navbar: !this.state.navbar });
  };

  renderNavLinks = () => {
    return (
      <div>
        <div
          id="about"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "about"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="about Vaibhav"
            src="./themes/Yaru/status/about.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
        </div>
        <div
          id="education"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "education"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Vaibhav's education"
            src="./themes/Yaru/status/education.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
        </div>
        <div
          id="skills"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "skills"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Vaibhav's skills"
            src="./themes/Yaru/status/skills.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
        </div>
        {/* <div
          id="projects"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "projects"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Vaibhav's projects"
            src="./themes/Yaru/status/projects.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
        </div> */}
        <div
          id="resume"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "resume"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Vaibhav's resume"
            src="./themes/Yaru/status/download.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
        <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
          {this.renderNavLinks()}
        </div>
        <div
          onClick={this.showNavBar}
          className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
        >
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className=" w-3.5 border-t border-white"
            style={{ marginTop: "2pt", marginBottom: "2pt" }}
          ></div>
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className={
              (this.state.navbar
                ? " visible animateShow z-30 "
                : " invisible ") +
              " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"
            }
          >
            {this.renderNavLinks()}
          </div>
        </div>
        <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen ubuntu-font">
          {this.state.screen}
        </div>
      </div>
    );
  }
}

export default About;

export const displayAbout = () => {
  return <About />;
};

function AboutOverview() {
  return (
    <>
      <div className="w-20 md:w-28 my-4 bg-white rounded-full">
        <img className="w-full" src="./images/logos/bitmoji.png" alt="Logo" />
      </div>
      <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
        <div>
          my name is <span className="font-bold">{userDetails.fullName}</span>,
        </div>
        <div className="font-normal ml-1">
          I'm a{" "}
          <span className="text-pink-600 font-bold">Software Engineer!</span>
        </div>
      </div>
      <div className=" my-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <ul className="leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4">
        <li>
          I currently work as a {userDetails.currentCompany.designation} @{" "}
          <a
            href={userDetails.currentCompany.website}
            target="_blank"
            rel="noreferrer"
            className="underlined"
          >
            {userDetails.currentCompany.name}
          </a>
        </li>
        <li>
          I have a B.Tech in Computer Science (2020) from Manipal University
        </li>
        <li className="mt-3">
          {" "}
          I enjoy building awesome software that solves problems.
        </li>
        <li className="mt-3">
          Check out my{" "}
          <a href={userDetails.recentProject} className="underlined">
            most recent project here.
          </a>
        </li>
      </ul>
    </>
  );
}

function Education() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Education
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
        <li className="list-disc">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            B. Tech - Manipal University Jaipur
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2016 - 2020</div>
          <div className=" text-sm md:text-base">
            Computer Science &amp; Engineering
          </div>
          <div className="text-sm text-gray-300 font-bold mt-1">
            CGPA &nbsp; 9.63
          </div>
        </li>
        <li className="list-disc mt-5">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            Class 12<sup>th</sup> - Delhi Public School
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2015</div>
          <div className=" text-sm md:text-base">
            Physics, Chemistry, Maths &amp; IP
          </div>
          <div className="text-sm text-gray-300 font-bold mt-1">89.8 %</div>
        </li>
      </ul>
    </>
  );
}

function Skills() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Technical Skills
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          My most valuable skills -irrespective of tool/language/framework- are
          and always will be
          <ul className="title-case">
            <li>problem solving</li>
            <li>system designing</li>
            <li>clean code</li>
            <li>unit testing</li>
          </ul>
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            My areas of expertise in Back-end Development are{" "}
            <strong className="text-ubt-gedit-orange">
              <ul className="title-case">
                <li>Django-Python</li>
                <li>MySQL</li>
                <li>Django Rest Framework</li>
              </ul>
            </strong>
            <br />I have also dabbled in Front-end using React.js &amp;
            JavaScript!
          </div>
        </li>
      </ul>
      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Languages &amp; Tools
        </div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Frameworks &amp; Libraries
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="http://img.shields.io/badge/-Python-3776AB?style=plastic&logo=python&logoColor=ffffff"
              alt="python"
            />
            <img
              className="m-1"
              src="http://img.shields.io/badge/-MySQL-4479A1?style=plastic&logo=mysql&logoColor=ffffff"
              alt="django"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A"
              alt="javascript"
            />
            <img
              src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff"
              alt="git"
              className="m-1"
            />
            <img
              src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff"
              alt="linux"
              className="m-1"
            />
            <a
              href="https://www.google.com/search?q=is+html+a+language%3F"
              target="_blank"
              rel="noreferrer"
            >
              <img
                title="yes it's a language!"
                className="m-1"
                src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff"
                alt="HTML"
              />
            </a>
            <img
              src="https://img.shields.io/badge/-Stylus-333333?style=flat&logo=stylus&logoColor=ffffff"
              alt="stylus"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff"
              alt="firebase"
              className="m-1"
            />
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="http://img.shields.io/badge/-Django-092E20?style=plastic&logo=django&logoColor=ffffff"
              alt="django"
            />
            <img
              className="m-1"
              src="http://img.shields.io/badge/-Django_Rest_Framework-092E20?style=plastic&logo=django&logoColor=ffffff"
              alt="django"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=000000"
              alt="react"
            />
            <img
              src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=node-dot-js&logoColor=ffffff"
              alt="node.js"
              className="m-1"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white"
              alt="redux"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Projects() {
  const project_list = [
    {
      name: "economist.com Unlocked",
      date: "Mar 2021",
      link: "https://github.com/vivek9patel/economist.com-unlocked",
      description: [
        "A chrome extension to read Paid Articles for Free & with no Ads, no subscription, no memberships!",
      ],
      domains: ["javascript", "chrome-extension"],
    },
    {
      name: "Flutter banking app",
      date: "Jan 2021",
      link: "https://github.com/vivek9patel/flutter-banking-app",
      description: [
        "A Flutter & Firebase project for creating transactions between different Users and displaying the history of transactions done by all.",
      ],
      domains: ["flutter", "firestore", "dart", "firebase auth"],
    },
    {
      name: "CPU scheduling application",
      date: "Dec 2020",
      link: "https://github.com/vivek9patel/CPU-Scheduling-APP-React-Native",
      description: [
        "React Native Application to visualize the CPU Scheduling algorithms with different Processes and Animations with gannt chart.",
      ],
      domains: ["react-native", "javascript"],
    },
    {
      name: "Meditech Healthcare WebApp",
      date: "Nov 2020",
      link: "https://github.com/vivek9patel/Meditech-Healthcare",
      description: [
        "Developed Web Application to predict and diagnose diseases from x-ray images.",
      ],
      domains: ["javascript", "html5", "sass", "firebase", "tensorflow"],
    },
    {
      name: "Problem Recommendation System",
      date: "Sep 2020",
      link: "https://github.com/vivek9patel/Improve-Codeforces",
      description: [
        "Django web application to suggest practice problems from the areas in which the user struggles to get pass in code-forces.",
      ],
      domains: ["django", "python", "codeforces-api", "javascript"],
    },
    {
      name: "Cleanliness Automation",
      date: "Dec 2019",
      link: "https://github.com/vivek9patel/CPU-Scheduling-APP-React-Native",
      description: [
        "Developed Web Applications to automate Garbage collection and extraction systems for SSIP hackathon",
      ],
    },
  ];

  const tag_colors = {
    javascript: "yellow-300",
    firebase: "red-600",
    firestore: "red-500",
    "chrome-extension": "yellow-400",
    flutter: "blue-400",
    dart: "blue-500",
    "react-native": "purple-500",
    html5: "pink-600",
    sass: "pink-400",
    tensorflow: "yellow-600",
    django: "green-600",
    python: "green-200",
    "codeforces-api": "gray-300",
  };

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Projects
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      {project_list.map((project, index) => {
        return (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex w-full flex-col px-4"
          >
            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
              <div className="flex flex-wrap justify-between items-center">
                <div className=" text-base md:text-lg">
                  {project.name.toLowerCase()}
                </div>
                <div className="text-gray-300 font-light text-sm">
                  {project.date}
                </div>
              </div>
              <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                {project.description.map((desc, index) => {
                  return (
                    <li key={index} className="list-disc mt-1 text-gray-100">
                      {desc}
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-wrap items-start justify-start text-xs py-2">
                {project.domains
                  ? project.domains.map((domain, index) => {
                      let tag_color = tag_colors[domain];
                      return (
                        <span
                          key={index}
                          style={{ borderWidth: "1pt" }}
                          className={`px-1.5 py-0.5 w-max border-${tag_color} text-${tag_color} m-1 rounded-full`}
                        >
                          {domain}
                        </span>
                      );
                    })
                  : null}
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
}
function Resume() {
  return (
    <iframe
      className="h-full w-full"
      src={userDetails.resume}
      title="Vaibhav Sharma resume"
      frameBorder="0"
      width="640" height="480"
    ></iframe>
  );
}
