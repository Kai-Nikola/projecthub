import React from  'react'
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom'

const projectList = ({ projects }) => {
    return (
      <div className="project-list section">
        {
          projects && projects.map(project => {
            return (
              <Link to={"/projecthub/project/" + project.id} key={project.id}>
                <ProjectSummary project={project} />
              </Link>
            );
          })
        }
      </div>
    );
}

export default projectList