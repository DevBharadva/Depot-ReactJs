// Import the necessary libraries and styles at the top of your file
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

// Define styled-components for Slider
const SliderContainer = styled.div`
  width: 60%;
  hight:100%;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

// const Slide = styled.div`
//   height: 300px;
//   background-size: cover;
//   background-position: center;
//   @media (max-width: 768px) {
//     height: 200px;
//   }
// `;

const AutoSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    const slides = [

        { 
            id: 1,  
            para:"Cum sociis natoque penatibus magnis dis parturienmontes, nasceturridiculus musestibulum ultricies aliquam convallis. Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci aliquenenan penatibus dis parturienmontes ultricies. ",
            Admin:"CHRISTINE PARKER",
            qualification:"UX Designer"
        
        },
        { 
            id: 2, 
            para:"Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus magnis dis parturienmontes, nasceturridiculus musestibulum ultricies aliquam convallis nibhelit penatibus magnis dis parturie eget.",
            Admin: "MASON ROBINSON",
            qualification:"Analyst"
        },
        { 
            id: 3, 
            para:" Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus. Lorem ipsum dolor sit amet, consectetur elit. In ut ullamcorper leo, eget euismod orci. Cum sociis pena tibus et magnis dis parturient montes, nascetur ipsum dolor sit amet.",
            Admin: "KEYLLY PRESTON",
            qualification:"DEVELOPER" 
        },
    ];

    return (
        <SliderContainer>
            <div className="text-center p-12">
                <div>
                    <h1 className="text-3xl font-semibold">WHAT THEY'RE SAYING</h1>
                </div>
            <Slider {...settings} className="text-center">
                {slides.map((slide) => (
                    <>
                    <div className=" mt-10 space-y-5">
                        <p className="text-xl text-[#929292]">{slide.para}</p>
                        <h2 className="text-lg font-semibold">{slide.Admin}</h2>
                        <p>{slide.qualification}</p>
                    </div>
                    
                    </>

                ))}
            </Slider>
            </div>
        </SliderContainer>
    );
};

export default AutoSlider