import logo from './logo.svg'
import './index.css';

function App() {
  return (
    <>
    <body>
     
<div className="nav">
    <div className="nav-links">
    <a href="">Home</a>
    <a href="">Skills</a>
    <a href="">Projects</a>

    <a href=""><button id='contact'>Let's Contact</button></a>
    </div>
  
</div> 
<div className='slide-left'>Welcome  to my portfolio</div>
    <div className="App">
    <section className="product-wrap">
                                <a className="product-image" href="./products page/coca1l.html">  <img src={logo} classNameName="App-logo" alt="logo"  width={200}/> </a>
                                <a className="product-title" href="./products page/coca1l.html" id="add-cart">
                                    <div className="product-price">
                                        <div className="product-amount">
                                            <p className="item-price">70 Br</p>
                                        </div>
                                    </div>
                                    <div className="inner_title">Coca Cola 1L</div>
                                </a>
                                <div className="add-to-cart-button">
                                    <div className="form-ctrl">
                                        <button type="button" action="http://localhost:3000/newOrder" method="POST">
                                            <span className="button-text">Add to Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </section>
    </div>
    <div classNameName='footer'>
        <a href="Linkedin">Linkedin</a></div></body></>
  );
}

export default App;
