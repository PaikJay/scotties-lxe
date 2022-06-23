import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                 <div class="text-center tm-hero-text-container">
        <div class="tm-hero-text-container-inner">
            <h2 class="tm-hero-title">Lex West Enterprise</h2>
            <p class="tm-hero-subtitle">
            Collection of consulting work, experiences, and opinions
            on human interest.
            </p>
        </div>        
      </div>

      <div class="tm-next tm-intro-next">
        <a href="#whatwedo" class="text-center tm-down-arrow-link">
          <i class="fas fa-2x fa-arrow-down tm-down-arrow"></i>
        </a>
      </div>      
  

    <section id="whatwedo" class="tm-section-pad-top">
      
      <div class="container">

            <div class="row tm-content-box">
                <div class="col-lg-12 col-xl-12">
                    <div class="tm-intro-text-container">
                        <h2 class="tm-text-primary mb-4 tm-section-title">The building blocks</h2>
                        <p class="mb-4 tm-intro-text">
                         Interst in works that influence
                          my bigger picture for understanding the universe.
                        </p>
                    </div>
                </div>

            </div>
            
            <div class="row tm-content-box">
        		<div class="col-lg-1">
                    <i class="far fa-3x fa-chart-bar text-center tm-icon"></i>
                </div>
                <div class="col-lg-5">
                    <div class="tm-intro-text-container">
                        <h2 class="tm-text-primary mb-4">textiles</h2>
                        <p class="mb-4 tm-intro-text">
                          Sewing and made-to-measure bespoke clothing, 
                          private fabric boutique
                        </p>
                    </div>
                </div>
                
                <div class="col-lg-1">
                    <i class="far fa-3x fa-comment-alt text-center tm-icon"></i>
                </div>
                <div class="col-lg-5">
                    <div class="tm-intro-text-container">
                        <h2 class="tm-text-primary mb-4">Writings</h2>
                        <p class="mb-4 tm-intro-text">
                          A spark of ideas, openly shared to reflect on the moment,
                          hopefully after a change has come.
                        </p>
                      </div>
                </div>

            </div>
            
            <div class="row tm-content-box">
        		<div class="col-lg-1">
                    <i class="fas fa-3x fa-fingerprint text-center tm-icon"></i>
                </div>
                <div class="col-lg-5">
                    <div class="tm-intro-text-container">
                        <h2 class="tm-text-primary mb-4">Religion</h2>
                        <p class="mb-4 tm-intro-text">
                          Studies on vairous beliefs, and 
                          forms of worship
                          <strong>Christianity, Judaism, Greek, Sumarian, Ayurvidic</strong>
                          and the effect on the world economy, politics, 
                          moral fabric
                      </p>
                          
                          <div class="tm-continue">
                            <a href="#testimonials" class="tm-intro-text tm-btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-1">
                    <i class="fas fa-3x fa-users text-center tm-icon"></i>
                </div>
                <div class="col-lg-5">
                    <div class="tm-intro-text-container">
                      <h2 class="tm-text-primary mb-4">Development</h2>
                       <p>Web projects and software development</p>
                       <div class="tm-continue">
                            <a href="#testimonials" class="tm-intro-text tm-btn-primary">Code</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
      
</section>
            </div>
        );
       
    }
}

export default Home;