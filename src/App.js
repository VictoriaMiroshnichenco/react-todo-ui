import logo from './logo.svg';
import './App.css';
function MyButton() {
  return (
      <button>
        I'm a button
      </button>
  );
}

function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br />How do you do?</p>
        </>
    );
}


const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyButton/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <AboutPage />
        <img className="avatar" src="https://i.imgur.com/yXOvdOSs.jpg" alt = "alt"/>

        <div >
        <h1>{user.name}</h1>
        <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
                width: user.imageSize,
                height: user.imageSize
            }}
        />
            </div >
    </div>
  );
}

export default App;
