const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (username && password) {
      setLoggedIn(true);
    }
  };
  return (
    <>
      <div className="App">
        {!loggedIn ? (
          <form onSubmit={handleLogin}>
            <div>
              <label>Tên đăng nhập:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Mật Khẩu: </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassWord(e.target.value)}
                required
              />
            </div>
            <button type="submit">Đăng Nhập</button>
          </form>
        ) : (
          <div className="welcome-container">
            <h1>Xin chào, {username}!</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Demo;
