import './index.css'

const Password = props => {
  const {passwordItem, showPassword, onDeletePassword} = props
  const {id, domain, username, password} = passwordItem
  const startLetter = domain.slice(0, 1).toUpperCase()
  return (
    <li className="passwordItem">
      <div className="passwordItem-container">
        <div className="passwordItem-Logo">{startLetter}</div>
        <div className="passwordItem-content">
          <p>{domain}</p>
          <p>{username}</p>
          {showPassword ? (
            <p>{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              className="hidden-pass-img"
              alt="stars"
            />
          )}
        </div>
        <div className="delete-container">
          <button
            className="delete-btn"
            data-testid="delete"
            type="button"
            onClick={() => {
              onDeletePassword(id)
            }}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="delete-img"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default Password
