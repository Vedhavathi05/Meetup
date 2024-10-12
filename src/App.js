import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import RegistrationContext from './context/RegistrationContext'

import Home from './components/Home'
import NotFound from './components/NotFound'
import Register from './components/Register'

class App extends Component {
  state = {
    isRegistered: false,
    username: '',
    topic: 'ARTS_AND_CULTURE',
    showError: false,
  }

  changeRegistrationStatus = () => {
    this.setState({isRegistered: true})
  }

  changeUsername = value => {
    this.setState({username: value})
  }

  changeTopic = value => {
    this.setState({topic: value})
  }

  changeErrorMessage = () => {
    this.setState({showError: true})
  }

  render() {
    const {isRegistered, username, topic, showError} = this.state

    return (
      <RegistrationContext.Provider
        value={{
          isRegistered,
          changeRegistrationStatus: this.changeRegistrationStatus,
          username,
          topic,
          changeUsername: this.changeUsername,
          changeTopic: this.changeTopic,
          changeErrorMessage: this.changeErrorMessage,
          showError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </RegistrationContext.Provider>
    )
  }
}

export default App
