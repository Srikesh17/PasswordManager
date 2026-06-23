import './index.css'
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import Password from '../Password'

class PasswordManager extends Component {
  state = {
    domain: '',
    username: '',
    password: '',
    searchInput: '',
    passwords: [],
    showPassword: false,
  }

  onAddPassword = event => {
    event.preventDefault()
    const {domain, username, password, passwords} = this.state
    const newPassword = {id: uuidv4(), domain, username, password}
    this.setState({
      domain: '',
      username: '',
      password: '',
      passwords: [...passwords, newPassword],
    })
  }

  onDeletePassword = id => {
    const {passwords} = this.state
    const newPasswords = passwords.filter(each => each.id !== id)
    this.setState({passwords: newPasswords})
  }

  addNewPassword = () => {
    const {domain, username, password} = this.state
    return (
      <div className="add-password-container">
        <h1>Add New Password</h1>
        <form>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              className="input-bar-img"
              alt="website"
            />
            <input
              type="text"
              className="input-bar"
              placeholder="Enter Website"
              value={domain}
              onChange={event => {
                this.setState({domain: event.target.value})
              }}
            />
          </div>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              className="input-bar-img"
              alt="username"
            />
            <input
              type="text"
              className="input-bar"
              placeholder="Enter Username"
              value={username}
              onChange={event => {
                this.setState({username: event.target.value})
              }}
            />
          </div>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              className="input-bar-img"
              alt="password"
            />
            <input
              type="password"
              className="input-bar"
              placeholder="Enter Password"
              value={password}
              onChange={event => {
                this.setState({password: event.target.value})
              }}
            />
          </div>
          <div className="add-btn-container">
            <button
              className="add-btn"
              onClick={this.onAddPassword}
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }

  yourPasswords = () => {
    const {searchInput, passwords, showPassword} = this.state
    const filteredPasswords = passwords.filter(each =>
      each.domain.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const noPasswordsView = filteredPasswords.length === 0
    return (
      <div className="your-passwords-container">
        <div className="your-password-card-header">
          <div className="your-password-head">
            <h1>Your Passwords</h1>
            <p className="no-of-passwords">{filteredPasswords.length}</p>
          </div>
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              className="search-img"
              alt="search"
            />
            <input
              type="search"
              className="search-bar"
              value={searchInput}
              placeholder="Search"
              onChange={event => {
                this.setState({searchInput: event.target.value})
              }}
            />
          </div>
        </div>
        <hr className="hr-line" />
        <div className="showPasswords-container">
          <input
            type="checkbox"
            className="checkbox"
            id="showPassword"
            onChange={event => {
              this.setState({showPassword: event.target.checked})
            }}
          />
          <label className="showPassword-label" htmlFor="showPassword">
            Show Passwords
          </label>
        </div>
        {noPasswordsView ? (
          <div className="no-passwords-view">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              className="no-passwords-img"
              alt="no passwords"
            />
            <p className="no-password-text">No Passwords</p>
          </div>
        ) : (
          <ul className="passwords-list-container">
            {filteredPasswords.map(each => (
              <Password
                key={each.id}
                passwordItem={each}
                showPassword={showPassword}
                onDeletePassword={this.onDeletePassword}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }

  render() {
    const passwordManagerImg =
      window.innerWidth > 768
        ? 'https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png '
        : 'https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png'

    return (
      <div className="app-container">
        <div className="app-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="app-logo"
            alt="app logo"
          />
        </div>
        <div className="password-manager-container">
          <img
            src={passwordManagerImg}
            alt="password manager"
            className="password-manager-img"
          />
          {this.addNewPassword()}
        </div>
        {this.yourPasswords()}
      </div>
    )
  }
}

export default PasswordManager
