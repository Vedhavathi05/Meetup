import RegistrationContext from '../../context/RegistrationContext'
import {Container} from './styledComponents'

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

const Register = props => {
  const {history} = props
  return (
    <RegistrationContext.Consumer>
      {value => {
        const {
          changeRegistrationStatus,
          changeUsername,
          changeTopic,
          username,
          changeErrorMessage,
          showError,
          topic,
        } = value

        const changeName = event => {
          changeUsername(event.target.value)
        }

        const changeValue = event => {
          changeTopic(event.target.value)
        }

        const formSubmitted = event => {
          event.preventDefault()
          if (username === '') {
            changeErrorMessage(true)
          } else {
            changeRegistrationStatus()
            history.replace('/')
          }
        }

        return (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
            <Container>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
              </div>
              <form onSubmit={formSubmitted}>
                <h1>Let us Join</h1>
                <label htmlFor="name">NAME</label>
                <br />
                <input
                  type="text"
                  placeholder="Your Name"
                  id="name"
                  onChange={changeName}
                  value={username}
                />
                <br /> <br />
                <label htmlFor="selectOption">TOPICS</label> <br />
                <select id="selectOption" value={topic} onChange={changeValue}>
                  {topicsList.map(each => (
                    <option value={each.id} key={each.id}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
                <br /> <br />
                <button type="submit">Register Now</button>
                {showError && <p>Please enter your name</p>}
              </form>
            </Container>
          </div>
        )
      }}
    </RegistrationContext.Consumer>
  )
}

export default Register
