import React, { Component } from 'react'
import ProjectItem from '../components/ProjectItem'
import ProjectBanner from '../components/ProjectBanner'
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
        <ProjectBanner />
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
