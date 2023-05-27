const Theme = () => {
  return (
    <div className="switch-mode-box">
      <button className="light-mode-btn">
        <span className="nav-icon material-symbols-rounded">light_mode</span>claro
      </button>
      <button className="dark-mode-btn">
        <span className="nav-icon material-symbols-rounded">dark_mode</span>oscuro
      </button>
    </div>
  )
}

export default Theme;
