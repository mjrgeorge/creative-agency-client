import React from 'react';
import './OurWorks.css';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';

const OurWorks = () => {
    return (
        <section style={{backgroundColor:'#111430'}} className="my-5 text-center">
            <h2 className="text-white pt-5">Here are some of <span style={{ color: '#7AB259' }}>our works</span></h2>
            <div className="pb-5">
                <div id="carouselExampleIndicators" className="carousel slide pb-5" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner p-5">
                        <div class="carousel-item active">
                            <img style={{height:'300px', width:'50%'}} src={carousel1} class="img-fluid" alt="carousel1" />
                        </div>
                        <div class="carousel-item">
                            <img style={{height:'300px', width:'50%'}} src={carousel2} class="img-fluid" alt="carousel1" />
                        </div>
                        <div class="carousel-item">
                            <img style={{height:'300px', width:'50%'}} src={carousel3} class="img-fluid" alt="carousel1" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OurWorks;