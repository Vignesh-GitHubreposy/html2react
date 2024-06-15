const Blog=()=>{
    return(
        <>
         <div className="studies_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="studies_taital">Recent Case Studies</h1>
               </div>
            </div>
            <div className="studies_section_2">
               <div className="row">
                  <div className="col-md-4">
                     <div className="hover01 column">
                        <figure><img src="assets/images/service-img1.png" alt="service-img1" /></figure>
                     </div>
                     <div className="studies_box">
                        <h3 className="introduction_text">Master of Law, 2010</h3>
                     </div>
                     <div className="read_bt"><a href="#">Read More</a></div>
                  </div>
                  <div className="col-md-4">
                     <div className="hover01 column">
                        <figure><img src="assets/images/service-img2.png" alt="service-img2" /></figure>
                     </div>
                     <div className="studies_box">
                        <h3 className="introduction_text">Master of Law, 2012</h3>
                     </div>
                     <div className="read_bt active"><a href="#">Read More</a></div>
                  </div>
                  <div className="col-md-4">
                     <div className="hover01 column">
                        <figure><img src="assets/images/service-img3.png" alt="service-img3" /></figure>
                     </div>
                     <div className="studies_box">
                        <h3 className="introduction_text">Master of Law, 2014</h3>
                     </div>
                     <div className="read_bt"><a href="#">Read More</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>
    )
}
export default Blog;