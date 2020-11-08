import React from "react";
import ProjectCard from "./../components/ProjectCard";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <ProjectCard
          title="CampLit"
          app="https://camplit.herokuapp.com/"
          github="https://github.com/nbkim89/Project-2"
          note="Clean and intuitive flashcard application"
        />
        <ProjectCard
          title="Cheetah Check-in"
          app="https://nbkim89.github.io/Project-1-Time-Card/Folder-1/index.html"
          github="https://github.com/nbkim89/Project-1-Time-Card"
          note="Time card app with current COVID-19 news"
        />
        <ProjectCard
          title="Day Planner"
          app="https://nbkim89.github.io/day-planner/"
          github="https://github.com/nbkim89/day-planner"
          note="Day planner powered by jQuery"
        />
        <ProjectCard
          title="Note Taker"
          app="https://nbkim89.github.io/new-note-taker/"
          github="https://github.com/nbkim89/new-note-taker/"
          note="Note taking app utiilizing express"
        />
        <ProjectCard
          title="Burger Time"
          app="https://nbkim89.github.io/burger/"
          github="https://github.com/nbkim89/burger/"
          note="MVC model made with MySQL and ORM"
        />
        <ProjectCard
          title="Readme Generator"
          app="https://nbkim89.github.io/readme-generator"
          github="https://github.com/nbkim89/readme-generator/"
          note="Command line app using node.js"
        />
      </div>
    );
  }
}

export default Projects;