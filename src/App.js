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
function AdminPanel() {
    return (
        <>
            <h1>AdminPanel</h1>
            <p>Hello there.<br />You are admin</p>
        </>
    );
}
function LoginForm() {
    return (
        <>
            <h1>LoginForm</h1>
            <p>Hello there.<br />Please login</p>
        </>
    );
}

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

let content;
if (false) {
    content = <AdminPanel />;
} else {
    content = <LoginForm />;
}

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
        <div>
            {content}
        </div>
        <div>
            {true && <AdminPanel />}
        </div>
    </div>
  );
}

export default App;
