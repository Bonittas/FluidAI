import Nav from "./Nav";
import './index.css'
function Skills() {
    return(
        
   <div className="skill">
     <Nav/>
  <section className="list">
        <div id="lan"><h5>Design and Coding</h5></div>
    <ul>
        <li>HTML5 & CSS3</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>Node JS</li>
        <li>Node js Frameworks-<li><li>Nest JS </li>
        <li>Express </li></li></li>
        <li>MySQL</li>
        <li>Responsive UI Design</li>
        <li>Vis</li>
        </ul>
        <div className="To">
        <div id="lan"><h5>Project Management</h5>
        <br></br>
        <li>Trello</li>
        <li>Slack</li>
        </div></div>
        </section>  
    </div>
 );
}
export default Skills;