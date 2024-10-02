import logo from './LinkedinThumbnail.PNG';
import './App.css';

function App() {
  return (
    <body>
    <div class="introduction" >
        <div class="line">Hello,</div>
        <div class="line">I am Eloy Lopez</div>
    </div>

    <div class="welcome" >
        <div class="line">Welcome to my website!</div>
        <div class="line">Here I will showcase all my experience</div>
        <div class="line">but first...</div>
    </div>

    <div class="bio" >
        <div class="line">A little about myself</div>
        <p>"I graduated from the University of North Texas (GO MEAN GREEN) with a
            Bachelors in Mechanical and Energy Engineering"
        </p>
    </div>

    <div class="links" >
        <div class="line">Now that you know a little about me,</div>
        <div class="line">what else would you like to see?</div>
    </div>

    <div class="Linkedin" >
        <a href="https://Linkedin.com/in/lopez-eloy/"
            target="_blank"> Linkedin
            <img src={logo} />
        </a>
    </div>

</body>
  );
}

export default App;