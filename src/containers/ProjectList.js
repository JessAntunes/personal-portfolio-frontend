import React, { Component } from 'react'
import ProjectItem from '../components/ProjectItem'
import { connect } from 'react-redux'
import { fetchProjects } from '../actions/index'


export class ProjectList extends Component {
  componentDidMount(){
    this.props.fetchProjects()
  }

  render() {
    const projects = this.props.projects.map(( project, i ) => <ProjectItem key={i} project={ project } />)
    return (
      <div>
        <h3>Projects</h3>
        <ul className="collection">
          { projects }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects
  }
}


export default connect(mapStateToProps, { fetchProjects })(ProjectList)
