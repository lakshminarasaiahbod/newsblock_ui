import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="widget">
              <div className="footer-text text-center">
                <a href="/"><img src="images/logo.jpg" alt="" className="img-fluid" /></a>
                <p>Cloapedia is a personal blog for handcrafted, cameramade photography content, fashion styles from independent creatives around the world.</p>
                <div className="social">
                    <a href="/" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>              
                    <a href="/" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
                    <a href="/" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram"></i></a>
                    <a href="/" data-toggle="tooltip" data-placement="bottom" title="Google Plus"><i className="fa fa-google-plus"></i></a>
                    <a href="/" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i className="fa fa-pinterest"></i></a>
                </div>

                <hr className="invis" />

                <div className="newsletter-widget text-center">
                  <form className="form-inline">
                    <input type="text" className="form-control" placeholder="Enter your email address" />
                    <button type="submit" className="btn btn-primary">Subscribe <i className="fa fa-envelope-open-o"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-md-12 text-center">
            <br />
            <div className="copyright">&copy; Cloapedia. Design: <a href="http://html.design">HTML Design</a>.</div>
          </div>
        </div>

        
      </div>
    </footer>
  )
}

export default Footer