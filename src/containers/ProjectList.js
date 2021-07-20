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
      <>
        <div className="home-banner"></div>
        <div className="home-text">
          <h1>Projects</h1>
        </div>
        <ul className="collection">
          { projects }
        </ul>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects
  }
}


export default connect(mapStateToProps, { fetchProjects })(ProjectList)
