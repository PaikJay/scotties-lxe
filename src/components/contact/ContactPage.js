import React from 'react'

export const ContactPage = () => {
  return (
    <div>
        <section id="contact" class="tm-section-pad-top tm-parallax-2">
    
    <div class="container tm-container-contact">
      
      <div class="row">
          
          <div class="text-center col-12">
              <h2 class="tm-section-title mb-4">Contact Us</h2>
           
          </div>
          
          <div class="col-sm-12 col-md-6">
            <form action="" method="get">
              <input id="name" name="name" type="text" placeholder="Your Name" class="tm-input" required />
              <input id="email" name="email" type="email" placeholder="Your Email" class="tm-input" required />
              <textarea id="message" name="message" rows="8" placeholder="Message" class="tm-input" required></textarea>
              <button type="submit" class="btn tm-btn-submit">Submit</button>
            </form>
          </div>
          
          <div class="col-sm-12 col-md-6">

              <div class="contact-item">
                <a rel="nofollow" href="" class="item-link">
                    <i class="far fa-2x fa-comment mr-4"></i>
                    <span class="mb-0">Chat Online</span>
                </a>              
              </div>
              
              <div class="contact-item">
                <a rel="nofollow" href="mailto:mail@company.com" class="item-link">
                    <i class="far fa-2x fa-envelope mr-4"></i>
                    <span class="mb-0">mail@company.com</span>
                </a>              
              </div>
              
              <div class="contact-item">
                <a rel="nofollow" href="https://www.google.com/maps" class="item-link">
                    <i class="fas fa-2x fa-map-marker-alt mr-4"></i>
                    <span class="mb-0">Our Location</span>
                </a>              
              </div>
              
              <div class="contact-item">
                <a rel="nofollow" href="" class="item-link">
                    <i class="fas fa-2x fa-phone-square mr-4"></i>
                    <span class="mb-0"></span>
                </a>              
              </div>
              
              <div class="contact-item">&nbsp;</div>
          
          </div>
          
          
      </div>
      
    </div>

        

  </section>
    </div>
  )
}
