import './App.css';

function App() {
  return (
    <div className="container">
      <div className="main">
        <h1>Learn to code by watching others</h1>
        <p>see how experienced developers solve problems in real-time.
          Watching scripted turorials is great, but understanding how
          developers think is invaluable.
        </p>
      </div>
    
      <div className="right">
      {/* <div> */}
        <button className="try">Try it free 7 days then $20/mo. thereafter</button>
      {/* </div> */}
      <div className="form">
        <input type="text" id="fname" name="fname" placeholder="First Name"></input>
        <input type="text" id="lname" name="lname" placeholder="Last Name"></input>
        <input type="text" id="email" name="email" placeholder="Email Address"></input>
        <input type="text" id="password" name="password" placeholder="Password"></input>
        <button class="claim">CLAIM YOUR FREE TRAIL</button>
        <p class="terms">By clicking the button, you are agreeing to our <button class="bterms">Terms and Services</button></p>

      </div>
      </div>
     

    </div>
  );
}

export default App;
