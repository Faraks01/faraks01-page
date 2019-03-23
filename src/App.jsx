import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setSiteUrl } from './actions/setSiteUrl.js'


import NavbarBootstrap from './components/NavbarBootstrap.jsx'
import Footer from './components/Footer.jsx'

import Homepage from './components/homepage/Homepage.jsx'
import EduMaterials from './components/educational_materials/EduMaterials.jsx'
import MyProjects from './components/my_projects/MyProjects.jsx'
import FeedbackPage from './components/feedback/FeedbackPage.jsx'
import AboutMe from './components/about_me/AboutMe.jsx'
import Admin from './components/admin/Admin.jsx'
// import Notifications from './components/notifications/Notifications.jsx'

class App extends Component {
  componentDidMount() {
    this.props.setSiteUrl(window.location.origin);
  }

  render() {
    return (
      <div className="App">
        <NavbarBootstrap/>
        {/*<Notifications/>*/}
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/educational_materials" component={EduMaterials}/>
          <Route exact path="/my_projects" component={MyProjects}/>
          <Route exact path="/feedback" component={FeedbackPage}/>
          <Route exact path="/about_me" component={AboutMe}/>
          <Route path="/admin" component={Admin}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		setSiteUrl: (url) => {
			dispatch(setSiteUrl(url))
		}
	}
}

export default withRouter(
  connect(null, mapDispatchToProps)(App)
)
