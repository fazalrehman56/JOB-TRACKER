const Header = ({ title, onMenuClick, onReset }) => {
  return (
    <header className="app-header">

      <div className="header-left">

        <button
          className="menu-toggle"
          onClick={onMenuClick}
          aria-label="Toggle sidebar"
        >
          ☰
        </button>

        <h1 className="header-title">
          {title}
        </h1>

      </div>

      <div className="header-right">

        <button
          className="btn-reset"
          onClick={onReset}
        >
          Reset
        </button>

        <div className="notification-bell">
          🔔
          <span className="notification-badge">
            2
          </span>
        </div>

        <div className="user-profile">

          <img
            src="https://i.pravatar.cc/40"
            alt="John Doe"
            className="user-avatar"
          />

          <span className="user-name">
            John Doe
          </span>

          <span className="dropdown-caret">
            ▾
          </span>

        </div>

      </div>

    </header>
  );
};

export default Header;