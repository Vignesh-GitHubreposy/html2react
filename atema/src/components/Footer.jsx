const Footer=()=>{
    return(
        <>
             {/* <!-- footer section start --> */}
      <div className="footer_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="location_text">
                     <ul>
                        <li>
                           <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i></a>
                        </li>
                        <li>
                           <a href="#"><i className="fa fa-phone" aria-hidden="true"></i></a>
                        </li>
                        <li>
                           <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="footer_logo">
                  <a href="index.html">
                     <img src="assets/images/logo.png" alt="footer-logo"/>
                     </a>
               </div>
               <div className="social_icon">
               <ul>
               <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
               <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
               <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
               </ul>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- footer section end --> */}
      {/* <!-- copyright section start --> */}
      <div className="copyright_section">
         <div className="container">
            <p className="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free Html Templates</a></p>
         </div>
      </div>
        </>
    )
}
export default Footer;