import { NavLink } from "react-router-dom";

const Header=()=>{
    return(
        <>
        <div className="header_section">
         <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <NavLink className="navbar-brand" to="/"><img src="assets/images/logo.png" alt="logo"/></NavLink>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                     <li className="nav-item ">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="about">About</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="whatwedo">What we do</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="blog">Blog</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="contact">Contact Us</NavLink>
                     </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                     <div className="login_bt">
                        <ul>
                           <li><a href="#"><span className="user_icon"><i className="fa fa-user" aria-hidden="true"></i></span>Login</a></li>
                           <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                        </ul>
                     </div>
                  </form>
               </div>
            </nav>
         </div>
         {/* <!-- banner section start -->  */}
         {/* <div className="banner_section layout_padding">
            <div className="container-fluid">
               <div id="banner_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="banner_taital_main">
                                 <h1 className="banner_taital">We Provide Law Practice</h1>
                                 <p className="banner_text">Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem</p>
                                 <div className="readmore_btn active"><a href="#">Read More</a></div>
                                 <div className="started_bt"><a href="#">Contact Us</a></div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="banner_img"><img src="images/banner-img.png" alt="banner_img"/></div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="banner_taital_main">
                                 <h1 className="banner_taital">We Provide Law Practice</h1>
                                 <p className="banner_text">Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem</p>
                                 <div className="readmore_btn active"><a href="#">Read More</a></div>
                                 <div className="started_bt"><a href="#">Contact Us</a></div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="banner_img"><img src="images/banner-img.png" alt="banner_img"/></div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="banner_taital_main">
                                 <h1 className="banner_taital">We Provide Law Practice</h1>
                                 <p className="banner_text">Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem</p>
                                 <div className="readmore_btn active"><a href="#">Read More</a></div>
                                 <div className="started_bt"><a href="#">Contact Us</a></div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="banner_img"><img src="images/banner-img.png" alt="banner_img"/></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#banner_slider" role="button" data-slide="prev">
                  <i className="fa fa-arrow-left"></i>
                  </a>
                  <a className="carousel-control-next" href="#banner_slider" role="button" data-slide="next">
                  <i className="fa fa-arrow-right"></i>
                  </a>
               </div>
            </div>
         </div> */}
         {/* <!-- banner section end --> */}
      </div>
        </>
    )
}
export default Header;