import './index.css';
function Nav() {
    return (
    <div className="nav">
    <div className="nav-links">
    <a href="/">Home</a>
    <a href="/Skills">Skills</a>
    <a href="/projects">Projects</a>
    <a href="/about">About</a>
    <a href="">Resume</a>

    <a href="/contact"><button id='contact'>Let's Contact</button></a>
    </div>
  </div>
    );
}
export default Nav;