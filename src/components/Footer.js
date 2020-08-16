import React from 'react'
import '../Detail.css'
function Footer(){
return(
    <div className="footerclass">
      <footer className="page-footer font-small stylish-color-dark pt-4 bg-dark text-white" id="footer">


            <div className="container text-center text-md-left">

  
                 <div className="row">


                     <div className="col-md-6  ">

    
                         <h5 class="font-weight-bold text-uppercase mt-3 mb-4 ">Social Schedular</h5>
                         <p >A project to automatically send invite to all of your social media like LinkedIn, Facebook, email,
                              WhatsApp, Instagram as soon as he finishes filling the form.</p>
                     </div>
                    <div class="col-md-6 ">
                         <ul className="list-unstyled list-inline text-center py-2">
                            <li className="list-inline-item">
                            <h5 className="mb-1">Register for free</h5>
                            </li>
                            <li className="list-inline-item">
                            <a href="#" className="btn btn-danger btn-rounded">Sign up!</a>
                            </li>
                         </ul>
                    </div>

    
                </div>

            </div>
            <hr/>


        <ul class="list-unstyled list-inline text-center">
            <li className="list-inline-item">
             <a className="btn-floating btn-fb mx-1">
           <i className="fa fa-facebook-f fa-3x"></i>
             </a>
            </li>
            <li class="list-inline-item">
                <a class="btn-floating btn-tw mx-1">
                      <i className="fa fa-twitter fa-3x"></i>
                 </a>
             </li>
            <li className="list-inline-item">
              <a className="fb-ic">
                <i  className="fa fa-github fa-3x"></i>
                 </a>
             </li>
  
  
        </ul>

         <div className="footer-copyright text-center py-3">© 2020 Copyright:
             <a href="#">Social-Schedular</a>
         </div>

      </footer>

   </div>
    )


}
export default Footer;