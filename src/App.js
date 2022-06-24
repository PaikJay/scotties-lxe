import axios from 'axios'
import './App.css'
import React, { Component } from 'react'
import { AboutPage } from './components/about/AboutPage'

export default class App extends React.Component {

  render() {
    return (
      <div>
       
    <section id="infinite" className="text-white tm-font-big tm-parallax">
   
      <nav className="navbar navbar-expand-md tm-navbar" id="tmNav">              
        <div className="container">   
          <div className="tm-next">
              <a href="/" className="navbar-brand">LXE</a>
          </div>             
            
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars navbar-toggler-icon"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <a className="nav-link tm-nav-link" href="#infinite">Home</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link tm-nav-link" href="#whatwedo">What We Do</a>
              </li>
              <li className="nav-item">
                <a className="nav-link tm-nav-link" href="#testimonials">Testimonials</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link tm-nav-link" href="#gallery">Gallery</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link tm-nav-link" href="#contact">Contact</a>
              </li>                    
            </ul>
          </div>        
        </div>
      </nav>
      
      <div className="text-center tm-hero-text-container">
        <div className="tm-hero-text-container-inner">
            <h2 className="tm-hero-title">Lex West Enterprise</h2>
            <p className="tm-hero-subtitle">
            Collection of consulting work, experiences, and opinions
            on human interest.
            </p>
        </div>        
      </div>

      <div className="tm-next tm-intro-next">
        <a href="#whatwedo" className="text-center tm-down-arrow-link">
          <i className="fas fa-2x fa-arrow-down tm-down-arrow"></i>
        </a>
      </div>      
    </section>

    <section id="whatwedo" className="tm-section-pad-top">
      
      <div className="container">

            <div className="row tm-content-box">
                <div className="col-lg-12 col-xl-12">
                    <div className="tm-intro-text-container">
                        <h2 className="tm-text-primary mb-4 tm-section-title">The building blocks</h2>
                        <p className="mb-4 tm-intro-text">
                         Interst in works that influence
                          my bigger picture for understanding the universe.
                        </p>
                    </div>
                </div>

            </div>
            
            <div className="row tm-content-box">
        		<div className="col-lg-1">
                    <i className="far fa-3x fa-chart-bar text-center tm-icon"></i>
                </div>
                <div className="col-lg-5">
                    <div className="tm-intro-text-container">
                        <h2 className="tm-text-primary mb-4">textiles</h2>
                        <p className="mb-4 tm-intro-text">
                          Sewing and made-to-measure bespoke clothing, 
                          private fabric boutique
                        </p>
                    </div>
                </div>
                
                <div className="col-lg-1">
                    <i className="far fa-3x fa-comment-alt text-center tm-icon"></i>
                </div>
                <div className="col-lg-5">
                    <div className="tm-intro-text-container">
                        <h2 className="tm-text-primary mb-4">Writings</h2>
                        <p className="mb-4 tm-intro-text">
                          A spark of ideas, openly shared to reflect on the moment,
                          hopefully after a change has come.
                        </p>
                      </div>
                </div>

            </div>
            
            <div className="row tm-content-box">
        		<div className="col-lg-1">
                    <i className="fas fa-3x fa-fingerprint text-center tm-icon"></i>
                </div>
                <div className="col-lg-5">
                    <div className="tm-intro-text-container">
                        <h2 className="tm-text-primary mb-4">Religion</h2>
                        <p className="mb-4 tm-intro-text">
                          Studies on vairous beliefs, and 
                          forms of worship
                          <strong> Christianity, Judaism, Greek, Sumarian, Kemetic Orthodoxy</strong>
                          and the effect on the world economy, politics, 
                          moral fabric
                      </p>
                          
                          <div className="tm-continue">
                            <a href="#testimonials" className="tm-intro-text tm-btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-1">
                    <i className="fas fa-3x fa-users text-center tm-icon"></i>
                </div>
                <div className="col-lg-5">
                    <div className="tm-intro-text-container">
                      <h2 className="tm-text-primary mb-4">Development</h2>
                       <p>Web projects and software development</p>
                       <div className="tm-continue">
                            <a href="#testimonials" className="tm-intro-text tm-btn-primary">Code</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
      
    </section>
     <section id="testimonials" className="tm-section-pad-top tm-parallax-2">      
    <div className="container tm-testimonials-content">
      <div className="row">
        <div className="col-lg-12 tm-content-box">
          <h2 className="text-white text-center mb-4 tm-section-title">About Me</h2>
          <div className="mx-auto tm-gallery-container tm-gallery-container-2">
            <div className="tm-testimonials-carousel">
              <figure className="tm-testimonial-item tm-image">
                <img src="img/testimonial-img-02.jpeg" alt="testimonial" className="img-fluid mx-auto " />
                <blockquote></blockquote>
                <figcaption></figcaption>
              </figure>

            
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="tm-bg-overlay"></div>
  </section>
    
    
    <section id="gallery" className="tm-section-pad-top">
      <div className="container tm-container-gallery">
        <div className="row">
          <div className="text-center col-12">
              <h2 className="tm-text-primary tm-section-title mb-4">Gallery</h2>
              <p className="mx-auto tm-section-desc">
                Creatives and Projects
              </p>
          </div>            
        </div>
        <div className="row">
            <div className="col-12">
                <div className="mx-auto tm-gallery-container">
                    <div className="grid tm-gallery">
                      <a href="img/gallery-img-01.jpg">
                        <figure className="effect-honey tm-gallery-item">
                          <img src="img/gallery-tn-01.jpg" alt="Image 1" className="img-fluid" />
                          <figcaption>
                            <h2><i>Physical Health <span>Exercise!</span></i></h2>
                          </figcaption>
                        </figure>
                      </a>
                      <a href="img/gallery-img-02.jpg">
                        <figure className="effect-honey tm-gallery-item">
                          <img src="img/gallery-tn-02.jpg" alt="Image 2" className="img-fluid" />
                          <figcaption>
                            <h2><i>Rain on Glass <span>Second Image</span></i></h2>
                          </figcaption>
                        </figure>
                      </a>
                      <a href="img/gallery-img-03.jpg">
                        <figure className="effect-honey tm-gallery-item">
                          <img src="img/gallery-tn-03.jpg" alt="Image 3" className="img-fluid" />
                          <figcaption>
                            <h2><i><span>Sea View</span> Mega City</i></h2>
                          </figcaption>
                        </figure>
                      </a>
                      <a href="img/gallery-img-04.jpg">
                        <figure className="effect-honey tm-gallery-item">
                          <img src="img/gallery-tn-04.jpg" alt="Image 4" className="img-fluid" />
                          <figcaption>
                            <h2><i>Dream Girl <span>Thoughts</span></i></h2>
                          </figcaption>
                        </figure>
                      </a>
                      <a href="img/gallery-img-05.jpg">
                        <figure className="effect-honey tm-gallery-item">
                          <img src="img/gallery-tn-05.jpg" alt="gallery-5" className="img-fluid" />
                          <figcaption>
                            <h2><i><span>Workstation</span> Offices</i></h2>
                          </figcaption>
                        </figure>
                      </a>
                      <a href="img/gallery-img-06.jpg">
                        <figure className="effect-honey tm-gallery-item">
                          <img src="img/gallery-tn-06.jpg" alt="Image 6" className="img-fluid" />
                          <figcaption>
                            <h2><i>Just Above <span>The City</span></i></h2>
                          </figcaption>
                        </figure>
                      </a>
                      <a href="img/gallery-img-01.jpg">
                        <figure className="effect-honey tm-gallery-item">
                          <img src="img/gallery-tn-01.jpg" alt="Image 7" className="img-fluid" />
                          <figcaption>
                            <h2><i>Another <span>Exercise Time</span></i></h2>
                          </figcaption>
                        </figure>
                      </a>
                      <a href="img/gallery-img-02.jpg">
                        <figure className="effect-honey tm-gallery-item">
                          <img src="img/gallery-tn-02.jpg" alt="Image 8" className="img-fluid" />
                          <figcaption>
                            <h2><i>Repeated <span>Image Spot</span></i></h2>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                </div>                
            </div>        
          </div>
      </div>
    </section>

   
    <section id="contact" className="tm-section-pad-top tm-parallax-2">
    
      <div className="container tm-container-contact">
        
        <div className="row">
            
            <div className="text-center col-12">
                <h2 className="tm-section-title mb-4">Contact Us</h2>
             
            </div>
            
            <div className="col-sm-12 col-md-6">
              <form action="" method="get">
                <input id="name" name="name" type="text" placeholder="Your Name" className="tm-input" required />
                <input id="email" name="email" type="email" placeholder="Your Email" className="tm-input" required />
                <textarea id="message" name="message" rows="8" placeholder="Message" className="tm-input" required></textarea>
                <button type="submit" className="btn tm-btn-submit">Submit</button>
              </form>
            </div>
            
            <div className="col-sm-12 col-md-6">

                <div className="contact-item">
                  <a rel="nofollow" href="" className="item-link">
                      <i className="far fa-2x fa-comment mr-4"></i>
                      <span className="mb-0">Chat Online</span>
                  </a>              
                </div>
                
                <div className="contact-item">
                  <a rel="nofollow" href="mailto:mail@company.com" className="item-link">
                      <i className="far fa-2x fa-envelope mr-4"></i>
                      <span className="mb-0">mail@company.com</span>
                  </a>              
                </div>
                
                <div className="contact-item">
                  <a rel="nofollow" href="https://www.google.com/maps" className="item-link">
                      <i className="fas fa-2x fa-map-marker-alt mr-4"></i>
                      <span className="mb-0">Our Location</span>
                  </a>              
                </div>
                
                <div className="contact-item">
                  <a rel="nofollow" href="" className="item-link">
                      <i className="fas fa-2x fa-phone-square mr-4"></i>
                      <span className="mb-0"></span>
                  </a>              
                </div>
                
                <div className="contact-item">&nbsp;</div>
            
            </div>
            
            
        </div>
        
      </div>

      	<footer className="text-center small tm-footer">
          <p className="mb-0"></p>
         
          
        </footer>

    </section>
    
  
    {/* <script>

    function getOffSet(){
        var _offset = 450;
        var windowHeight = window.innerHeight;

        if(windowHeight > 500) {
          _offset = 400;
        } 
        if(windowHeight > 680) {
          _offset = 300
        }
        if(windowHeight > 830) {
          _offset = 210;
        }

        return _offset;
      }
  
    
     function setParallaxPosition($doc, multiplier, $object){
        var offset = getOffSet();
        var from_top = $doc.scrollTop(),
          bg_css = 'center ' +(multiplier * from_top - offset) + 'px';
        $object.css({"background-position" : bg_css });
      }
    
    
      // Parallax function
      // Adapted based on https://codepen.io/roborich/pen/wpAsm        
      var background_image_parallax = function($object, multiplier, forceSet){
        multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
        multiplier = 1 - multiplier;
        var $doc = $(document);
        // $object.css({"background-attatchment" : "fixed"});

        if(forceSet) {
          setParallaxPosition($doc, multiplier, $object);
        } else {
          $(window).scroll(function(){          
            setParallaxPosition($doc, multiplier, $object);
          });
        }
      };
    
      var background_image_parallax_2 = function($object, multiplier){
        multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
        multiplier = 1 - multiplier;
        var $doc = $(document);
        $object.css({"background-attachment" : "fixed"});
        
        $(window).scroll(function(){
          if($(window).width() > 768) {
            var firstTop = $object.offset().top,
                pos = $(window).scrollTop(),
                yPos = Math.round((multiplier * (firstTop - pos)) - 186);              

            var bg_css = 'center ' + yPos + 'px';

            $object.css({"background-position" : bg_css });
          } else {
            $object.css({"background-position" : "center" });
          }
        });
      };
  
    
      $(function(){
        // Hero Section - Background Parallax
        background_image_parallax($(".tm-parallax"), 0.30, false);
        background_image_parallax_2($("#contact"), 0.80);   
        background_image_parallax_2($("#testimonials"), 0.80);   
        
        // Handle window resize
        window.addEventListener('resize', function(){
          background_image_parallax($(".tm-parallax"), 0.30, true);
        }, true);

        // Detect window scroll and update navbar
        $(window).scroll(function(e){          
          if($(document).scrollTop() > 120) {
            $('.tm-navbar').addClassName("scroll");
          } else {
            $('.tm-navbar').removeClassName("scroll");
          }
        });
        
        // Close mobile menu after click 
        $('#tmNav a').on('click', function(){
          $('.navbar-collapse').removeClassName('show'); 
        })

        // Scroll to corresponding section with animation
        $('#tmNav').singlePageNav({
          'easing': 'easeInOutExpo',
          'speed': 600
        });        
        
        // Add smooth scrolling to all links
        // https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
        $("a").on('click', function(event) {
          if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 600, 'easeInOutExpo', function(){
              window.location.hash = hash;
            });
          } // End if
        });

        // Pop up
        $('.tm-gallery').magnificPopup({
          delegate: 'a',
          type: 'image',
          gallery: { enabled: true }
        });
      }
    }
        $('.tm-testimonials-carousel').slick({
          dots: true,
          prevArrow: false,
          nextArrow: false,
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            }, 
            {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1
              }                 
            }
          ]
        });

        Gallery
        $('.tm-gallery').slick({
          dots: true,
          infinite: false,
          slidesToShow: 5,
          slidesToScroll: 2,
          responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        }); </script>
       */}
 
      </div>
    )
  }
}
