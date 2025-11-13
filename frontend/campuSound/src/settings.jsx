function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>
          <a href="https://react.dev"/* <---- Later: make go to home page*/  target="_blank">
          <img src={logo} className="logo" alt="React logo" />
        </a>
      </h3>
      <h1></h1>


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          askdfnksdnfkjnskjndjfndskt <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>



      <p className="read-the-docs">
        testing LOL
      </p>

      <nav class="bottom-menu">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#search">Search</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="settings.jsx">Settings</a></li>
      </ul>          



      </nav>


    </>
  )
}

export default App
