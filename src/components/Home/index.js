import {Link} from 'react-router-dom'

import RegistrationContext from '../../context/RegistrationContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Home = () => (
  <RegistrationContext.Consumer>
    {value => {
      const {username, topic, isRegistered} = value
      const filtered = topicsList.filter(each => each.id === topic)
      const text = filtered[0].displayText
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
          {isRegistered ? (
            <div>
              <h1>Hello {username}</h1>
              <p>Welcome to {text}</p>
            </div>
          ) : (
            <div>
              <h1>Welcome to Meetup</h1>
              <p>Please register for the topic</p>
              <Link to="/register">
                <button type="button">Register</button>
              </Link>
            </div>
          )}
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </div>
      )
    }}
  </RegistrationContext.Consumer>
)

export default Home
