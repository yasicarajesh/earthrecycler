import React from 'react';
class Icon extends React.Component {
  render() {
    return (
        <>
        <section id="hero">
          <div class="hero-container">
            <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

              <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

              <div class="carousel-inner" role="listbox">

               
          <div class="carousel-item active">
                  <div class="carousel-container">
                    <div class="carousel-content">
                      <h2 class="animate__animated animate__fadeInDown">SMART WASTE MANAGEMENT</h2>
                      <p class="animate__animated animate__fadeInUp">Thriving For a Balanced Future</p>
                      <div>
                        <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>

               
          <div class="carousel-item">
                  <div class="carousel-container">
                    <div class="carousel-content">
                      <h2 class="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                      <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                      <div>
                        <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>

               
          <div class="carousel-item">
                  <div class="carousel-background"><img src="assets/img/slide/slide-3.jpg" alt=""/></div>
                    <div class="carousel-container">
                      <div class="carousel-content">
                        <h2 class="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                        <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                        <div>
                          <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>

                <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                  <span class="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>

              </div>
            </div>
         </section>
        
        </>
      );
      }
    }
    export default Icon;        