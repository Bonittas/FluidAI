import './index.css'
import Nav from './Nav';

import logo from './bifq.jpg'

function Home() {
    return (
      <>
      <body>
        
  
      <div className="App">
        <Nav/>
        <div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter"> Welocome to my Portfolio</h3>
    </div>
  </div>
</div>

                              <section className="product-wrap">

                                  <p className="product-image" href="./products page/coca1l.html">  <circle><img src={logo} classNameName="pic" alt="logo"  width={200}/></circle> </p>
                                  <p className="product-title" href="./products page/coca1l.html" id="add-cart">
      
     
                                      <div className="product-price">
                                          <div className="product-amount">
                                              <p className="item-price">Hello, I am Biftu Shibbire</p>
                                              <p>Software Engineering Student at Addis Ababa University</p>
                                              <div className='Conten'>
        <div className="conten">Highly accomplished user centered Frontend Developer 
        Experienced in developing web design with a diverse and promising skill-set, 
        which includes qualities like accessibility and responsive design• Able to 
        effectively self-manage during independent projects, as well as 
        collaborate in a team setting.</div>
        </div></div>
                                      </div>
                                      <div className="inner_title">Web Developer
                                      </div>
                                </p>
                                  <div className="add-to-cart-button">
                                      <div className="form-ctrl">
                                          
                                      </div>
                                  </div>
                              </section>
      </div>
      <div classNameName='footer'>
          <a href="Linkedin">Linkedin</a></div></body></>
    );
  }
  export default Home;