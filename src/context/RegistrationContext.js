import react from 'react'

const RegistrationContext = react.createContext({
  isRegistered: false,
  changeRegistrationStatus: () => {},
  username: '',
  topic: '',
  showError: false,
  changeUsername: () => {},
  changeTopic: () => {},
  changeErrorMessage: () => {},
})

export default RegistrationContext
