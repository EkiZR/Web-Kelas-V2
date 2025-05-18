import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import CardMember from "./CardMember";
import AOS from "aos";
import "aos/dist/aos.css";

const LEADERS_DATA = [
  {
    name: "Aira",
    shortName: "Aira",
    role: "Ketua",
    backgroundImage: "/Member/Aira.jpg",
    profileImage: "/Member/Aira.jpg",
    instagramLink: "https://www.instagram.com/aira_partiwi/?hl=id",
  },
  {
    name: "Marven",
    shortName: "Marven",
    role: "Ketua",
    backgroundImage: "/Member/Marven.jpg",
    profileImage: "/Member/Marven.jpg",
    instagramLink: "https://www.instagram.com/marvennwiratamaa/?hl=id",
  },
];

const MEMBERS_DATA = [
  {
    name: "Clara",
    shortName: "Clara",
    backgroundImage: "/Member/Clara.jpg",
    profileImage: "/Member/Clara.jpg",
    instagramLink: "https://www.instagram.com/clamysptt",
    role: "Member"
  },
  {
    name: "sheila",
    shortName: "sheila",
    backgroundImage: "/Member/sheila.jpeg",
    profileImage: "/Member/sheila.jpeg",
    instagramLink: "https://www.instagram.com/sheilaanggrn__",
    role: "Member"
  },
  {
    name: "Lukita",
    shortName: "Lukita",
    backgroundImage: "/Member/Lukita.jpg",
    profileImage: "/Member/Lukita.jpg",
    instagramLink: "https://www.instagram.com/lukitadharmapatnii",
    role: "Member"
  },
  {
    name: "Gung Putri",
    shortName: "Putri",
    backgroundImage: "/Member/Gung Putri.jpg",
    profileImage: "/Member/Gung Putri.jpg",
    instagramLink: "https://www.instagram.com/gungputriiii__",
    role: "Member"
  },
  {
    name: "Riska",
    shortName: "Riska",
    backgroundImage: "/Member/Riska.jpg",
    profileImage: "/Member/Riska.jpg",
    instagramLink: "https://www.instagram.com/kmriskaa_",
    role: "Member"
  },
  {
    name: "Gina",
    shortName: "Gina",
    backgroundImage: "/Member/Gina.jpg",
    profileImage: "/Member/Gina.jpg",
    instagramLink: "https://www.instagram.com/ginatiarini03",
    role: "Member"
  },
  {
    name: "Putri Juliantari",
    shortName: "Putri",
    backgroundImage: "/Member/Putri Juliantari.jpg",
    profileImage: "/Member/Putri Juliantari.jpg",
    instagramLink: "https://www.instagram.com/putuputrijuliantari",
    role: "Member"
  },
  {
    name: "Ayu Sari",
    shortName: "Ayu",
    backgroundImage: "/Member/Ayu Sari.jpg",
    profileImage: "/Member/Ayu Sari.jpg",
    instagramLink: "https://www.instagram.com/ayusariasih._",
    role: "Member"
  },
  {
    name: "Feby",
    shortName: "Feby",
    backgroundImage: "/Member/Feby.jpg",
    profileImage: "/Member/Feby.jpg",
    instagramLink: "https://www.instagram.com/fby.kmldw",
    role: "Member"
  },
  {
    name: "Mitha",
    shortName: "Mitha",
    backgroundImage: "/Member/Mitha.jpg",
    profileImage: "/Member/Mitha.jpg",
    instagramLink: "https://www.instagram.com/call_me_mithaaa",
    role: "Member"
  },
  {
    name: "Eka",
    shortName: "Eka",
    backgroundImage: "/Member/Eka.jpg",
    profileImage: "/Member/Eka.jpg",
    instagramLink: "https://www.instagram.com/eeekkkka4",
    role: "Member"
  },
  {
    name: "Dinda",
    shortName: "Dinda",
    backgroundImage: "/Member/Dinda.jpg",
    profileImage: "/Member/Dinda.jpg",
    instagramLink: "https://www.instagram.com/raydindaa",
    role: "Member"
  },
  {
    name: "Dayu Siva",
    shortName: "Siva",
    backgroundImage: "/Member/Dayu Siva.jpg",
    profileImage: "/Member/Dayu Siva.jpg",
    instagramLink: "https://www.instagram.com/dayusiva_",
    role: "Member"
  },
  {
    name: "Dayu Sinta",
    shortName: "Sinta",
    backgroundImage: "/Member/Dayu Sinta.jpg",
    profileImage: "/Member/Dayu Sinta.jpg",
    instagramLink: "https://www.instagram.com/ia.sinta___",
    role: "Member"
  },
  {
    name: "Mang Adi",
    shortName: "Adi",
    backgroundImage: "/Member/Mang Adi.jpg",
    profileImage: "/Member/Mang Adi.jpg",
    instagramLink: "https://www.instagram.com/_mngadii",
    role: "Member"
  },
  {
    name: "Evaliana",
    shortName: "Evali",
    backgroundImage: "/Member/Eva.jpg",
    profileImage: "/Member/Eva.jpg",
    instagramLink: "https://www.instagram.com/valinaa_05",
    role: "Member"
  },
  {
    name: "Lanang",
    shortName: "Lanang",
    backgroundImage: "/Member/Lanang.jpg",
    profileImage: "/Member/Lanang.jpg",
    instagramLink: "https://www.instagram.com/Gusisna_",
    role: "Member"
  },
  {
    name: "Wira",
    shortName: "Wira",
    backgroundImage: "/Member/Wira.jpg",
    profileImage: "/Member/Wira.jpg",
    instagramLink: "https://www.instagram.com/arthaws13",
    role: "Member"
  },
  {
    name: "Hendry",
    shortName: "Hendry",
    backgroundImage: "/Member/Hendry.jpg",
    profileImage: "/Member/Hendry.jpg",
    instagramLink: "https://www.instagram.com/dek_jepry",
    role: "Member"
  },
  {
    name: "Wah Arya",
    shortName: "Arya",
    backgroundImage: "/Member/WahArya.jpg",
    profileImage: "/Member/WahArya.jpg",
    instagramLink: "https://www.instagram.com/knksy.a",
    role: "Member"
  },
  {
    name: "Raffa",
    shortName: "Raffa",
    backgroundImage: "/Member/Raffa.jpg",
    profileImage: "/Member/Raffa.jpg",
    instagramLink: "https://www.instagram.com/rappasay",
    role: "Member"
  },
  {
    name: "Hendra",
    shortName: "Hendra",
    backgroundImage: "/Member/Hendra.jpg",
    profileImage: "/Member/Hendra.jpg",
    instagramLink: "https://www.instagram.com/nyomanhendra22",
    role: "Member"
  },
  {
    name: "Dhanan",
    shortName: "Dhanan",
    backgroundImage: "/Member/Dhanan.jpg",
    profileImage: "/Member/Dhanan.jpg",
    instagramLink: "https://www.instagram.com/dhanan_126",
    role: "Member"
  },
  {
    name: "Gustra",
    shortName: "Gustra",
    backgroundImage: "/Member/Gustra.jpg",
    profileImage: "/Member/Gustra.jpg",
    instagramLink: "https://www.instagram.com/iidabgsputra",
    role: "Member"
  },
  {
    name: "Devi",
    shortName: "Devi",
    backgroundImage: "/Member/Devi.jpg",
    profileImage: "/Member/Devi.jpg",
    instagramLink: "https://www.instagram.com/depiiiiu_",
    role: "Member"
  },
  {
    name: "Febry",
    shortName: "Febry",
    backgroundImage: "/Member/Febry.jpg",
    profileImage: "/Member/Febry.jpg",
    instagramLink: "https://www.instagram.com/fbrykrtiii",
    role: "Member"
  },
  {
    name: "Putri Rosa",
    shortName: "Rosa",
    backgroundImage: "/Member/Putri Rosa.jpg",
    profileImage: "/Member/Putri Rosa.jpg",
    instagramLink: "https://www.instagram.com/rosamia_putri",
    role: "Member"
  },
  {
    name: "Semara",
    shortName: "Semara",
    backgroundImage: "/Member/Semara.jpg",
    profileImage: "/Member/Semara.jpg",
    instagramLink: "https://www.instagram.com/kadeksemara_09",
    role: "Member"
  },
  {
    name: "Kristina",
    shortName: "Kristina",
    backgroundImage: "/Member/Kristina.jpg",
    profileImage: "/Member/Kristina.jpg",
    instagramLink: "https://www.instagram.com/kristina4_11",
    role: "Member"
  },
  {
    name: "Gung Dika",
    shortName: "Dika",
    backgroundImage: "/Member/Gung Dika.jpg",
    profileImage: "/Member/Gung Dika.jpg",
    instagramLink: "https://www.instagram.com/olmp_akasia",
    role: "Member"
  },
  {
    name: "Sindi",
    shortName: "Sindi",
    backgroundImage: "/Member/Sindi.PNG",
    profileImage: "/Member/Sindi.PNG",
    instagramLink: "https://www.instagram.com/cloud_yssss",
    role: "Member"
  },
  {
    name: "Gio",
    shortName: "Gio",
    backgroundImage: "/Member/Gio.jpg",
    profileImage: "/Member/Gio.jpg",
    instagramLink: "https://www.instagram.com/yo.dest_",
    role: "Member"
  },
  {
    name: "Dinara",
    shortName: "Dinara",
    backgroundImage: "/Member/Dinara.jpg",
    profileImage: "/Member/Dinara.jpg",
    instagramLink: "https://www.instagram.com/naraadinara",
    role: "Member"
  },
  {
    name: "Galang",
    shortName: "Galang",
    backgroundImage: "/Member/Galang.jpg",
    profileImage: "/Member/Galang.jpg",
    instagramLink: "https://www.instagram.com/yassa_yaa",
    role: "Member"
  },
  {
    name: "Gus Wahyu",
    shortName: "Wahyu",
    backgroundImage: "/Member/Gus Wahyu.jpg",
    profileImage: "/Member/Gus Wahyu.jpg",
    instagramLink: "https://www.instagram.com/putrahartana",
    role: "Member"
  },
  {
    name: "Widi",
    shortName: "Widi",
    backgroundImage: "/Member/Widi.jpg",
    profileImage: "/Member/Widi.jpg",
    instagramLink: "https://www.instagram.com/madewidi_2009",
    role: "Member"
  },
  {
    name: "Julio",
    shortName: "Julio",
    backgroundImage: "/Member/Julio.jpg",
    profileImage: "/Member/Julio.jpg",
    instagramLink: "https://www.instagram.com/julio_dwisaputra",
    role: "Member"
  },
  {
    name: "Dewa Dika",
    shortName: "Dika",
    backgroundImage: "/Member/Dwdka.jpg",
    profileImage: "/Member/Dwdka.jpg",
    instagramLink: "https://www.instagram.com/dwaptdka",
    role: "Member"
  },
  {
    name: "Arya",
    shortName: "Arya",
    backgroundImage: "/Member/Arya.jpg",
    profileImage: "/Member/Arya.jpg",
    instagramLink: "https://www.instagram.com/ya.aryaya",
    role: "Member"
  },
  {
    name: "Weico",
    shortName: "Weico",
    backgroundImage: "/Member/Weico.jpg",
    profileImage: "/Member/Weico.jpg",
    instagramLink: "https://www.instagram.com/weico.cho",
    role: "Member"
  }
];




const MemberSlider = () => {
  const sliderRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [totalSlides, setTotalSlides] = useState(MEMBERS_DATA.length);
  const [visibleSlides, setVisibleSlides] = useState(5);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  // Update scroll progress when slider changes
  const handleAfterChange = (current) => {
    if (isDragging) return; // Don't update during drag to avoid conflicts
    
    setCurrentSlide(current);
    const maxSlides = Math.max(0, totalSlides - visibleSlides);
    const progress = maxSlides > 0 ? current / maxSlides : 0;
    setScrollProgress(Math.max(0, Math.min(1, progress)));
  };
  
  // Handle scrollbar track click
  const handleScrollTrackClick = (e) => {
    if (!sliderRef.current || !scrollTrackRef.current || isDragging) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const trackRect = scrollTrackRef.current.getBoundingClientRect();
    const clickPosition = Math.max(0, Math.min(1, (e.clientX - trackRect.left) / trackRect.width));
    
    // Calculate target slide based on click position
    const maxSlides = Math.max(0, totalSlides - visibleSlides);
    const targetSlide = Math.round(clickPosition * maxSlides);
    
    // Update states immediately to prevent jumping
    setCurrentSlide(targetSlide);
    setScrollProgress(clickPosition);
    
    // Go to target slide
    sliderRef.current.slickGoTo(targetSlide);
  };
  
  // Handle scrollbar thumb drag
  const handleThumbDrag = (e) => {
    if (!sliderRef.current || !scrollTrackRef.current) return;
    
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    
    // Disable autoplay during drag
    sliderRef.current.slickPause();
    
    const trackRect = scrollTrackRef.current.getBoundingClientRect();
    const startX = e.clientX || (e.touches && e.touches[0].clientX);
    const startProgress = scrollProgress;
    
    const doDrag = (dragEvent) => {
      if (!scrollTrackRef.current || !sliderRef.current) return;
      
      dragEvent.preventDefault();
      const currentX = dragEvent.clientX || (dragEvent.touches && dragEvent.touches[0].clientX);
      const deltaX = currentX - startX;
      const trackWidth = scrollTrackRef.current.getBoundingClientRect().width;
      
      // Calculate new progress based on drag distance
      const deltaProgress = deltaX / trackWidth;
      let newProgress = startProgress + deltaProgress;
      newProgress = Math.max(0, Math.min(1, newProgress));
      
      // Calculate target slide
      const maxSlides = Math.max(0, totalSlides - visibleSlides);
      const targetSlide = Math.round(newProgress * maxSlides);
      
      // Update states immediately
      setScrollProgress(newProgress);
      setCurrentSlide(targetSlide);
      
      // Update slider
      sliderRef.current.slickGoTo(targetSlide);
    };
    
    const stopDrag = () => {
      setIsDragging(false);
      
      // Re-enable autoplay after drag
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickPlay();
        }
      }, 500);
      
      document.removeEventListener('mousemove', doDrag);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('touchmove', doDrag);
      document.removeEventListener('touchend', stopDrag);
    };
    
    // Add event listeners
    document.addEventListener('mousemove', doDrag, { passive: false });
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchmove', doDrag, { passive: false });
    document.addEventListener('touchend', stopDrag);
  };

  // Update visible slides based on screen size
  useEffect(() => {
    const handleResize = () => {
      let newVisibleSlides = 5;
      
      if (window.innerWidth >= 1280) {
        newVisibleSlides = 5;
      } else if (window.innerWidth >= 1024) {
        newVisibleSlides = 3;
      } else if (window.innerWidth >= 640) {
        newVisibleSlides = 2;
      } else {
        newVisibleSlides = 1;
      }
      
      setVisibleSlides(newVisibleSlides);
      
      // Recalculate progress after resize
      if (sliderRef.current) {
        const current = sliderRef.current.innerSlider.state.currentSlide || 0;
        setCurrentSlide(current);
        const maxSlides = Math.max(0, totalSlides - newVisibleSlides);
        const progress = maxSlides > 0 ? current / maxSlides : 0;
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [totalSlides]);

  useEffect(() => {
    setTotalSlides(MEMBERS_DATA.length);
  }, []);

  // Calculate scrollbar width - ensure minimum width for usability
  const scrollbarWidth = totalSlides && visibleSlides < totalSlides ? 
    Math.max((visibleSlides / totalSlides) * 100, 15) : 100;
  
  // Calculate if scrollbar should be shown
  const shouldShowScrollbar = totalSlides > visibleSlides;
  
  const memberSettings = {
    className: "center member-slider",
    centerMode: true,
    centerPadding: "60px",
    swipeToSlide: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: !isDragging, // Disable autoplay during drag
    autoplaySpeed: 2000,
    speed: 500, // Faster transition for better UX
    pauseOnHover: true,
    touchThreshold: 10,
    afterChange: handleAfterChange,
    appendDots: (dots) => (
      <div className="custom-dots hidden md:block">
        <ul className="flex justify-center md:gap-3 gap-1 mt-2 md:mt-4"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <button className="w-1 h-1 md:w-3 md:h-3 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-blue-500">
        <span className="sr-only">Slide {i + 1}</span>
      </button>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "60px",
          dots: true,
          autoplay: !isDragging,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "40px",
          dots: true,
          autoplay: !isDragging,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
          dots: false,
          autoplay: !isDragging,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  const leaderSettings = {
    ...memberSettings,
    className: "leader-slider",
    centerMode: false,
    slidesToShow: 2,
    centerPadding: "0px",
    dots: false,
    infinite: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
          dots: false,
          autoplay: true,
          infinite: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 10,
    });
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Ketua Angkatan Section */}
      <div className="w-full lg:pt-20 pt-12 px-[5%] lg:px-[10%]">
        <div className="">
          <div className="relative inline-block mb-4 " data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wider drop-shadow-[0_0_10px_rgba(220,38,38,0.3)]">
              Ketua & Wakil
              <div className="h-1 mt-2 w-full bg-gradient-to-r from-blue-500 to-transparent rounded-full shadow-lg shadow-blue-500/50"></div>
            </h2>
          </div>
        </div>

        <div className="w-full py-4 ">
          <Slider {...leaderSettings}>
            {LEADERS_DATA.map((leader, index) => (
              <div key={index} className="px-2" data-aos="fade-down" data-aos-duration="1500">
                <CardMember {...leader} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Members Section */}
      <div className="w-full pt-8 lg:pt-12 pb-10 ">
        <div className="px-[5%] lg:px-[10%] ">
          <div className="relative inline-block mb-4" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wider drop-shadow-[0_0_10px_rgba(220,38,38,0.3)]">
              Member
              <div className="h-1 mt-2 w-full bg-gradient-to-r from-blue-500 to-transparent rounded-full shadow-lg shadow-blue-500/50"></div>
            </h2>
          </div>
        </div>
        
        <div className="w-full py-4">
          <Slider ref={sliderRef} {...memberSettings}>
            {MEMBERS_DATA.map((member, index) => (
              <div key={index} className=" ">
                <CardMember {...member} />
              </div>
            ))}
          </Slider>
          
          {/* Custom Mobile Scrollbar - Only show if needed */}
          {shouldShowScrollbar && (
            <div className="md:hidden mt-6 px-[5%] lg:px-[10%]">
              <div className="flex items-center justify-center">
                <div 
                  ref={scrollTrackRef}
                  className="relative w-full max-w-xs h-3 bg-white/20 rounded-full cursor-pointer touch-none select-none border-2"
                  onClick={handleScrollTrackClick}
                  role="scrollbar"
                  aria-valuenow={Math.round(scrollProgress * 100)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Slider progress"
                >
                  <div 
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg transition-all duration-150 ${
                      isDragging ? 'shadow-blue-500/70 scale-y-110' : 'shadow-blue-500/40'
                    } cursor-grab active:cursor-grabbing`}
                    style={{ 
                      width: `${scrollbarWidth}%`, 
                      transform: `translateX(${scrollProgress * (583 - scrollbarWidth)}%)`,
                      willChange: 'transform'
                    }}
                    onMouseDown={handleThumbDrag}
                    onTouchStart={handleThumbDrag}
                  >
                    {/* Touch target enhancer */}
                    <div className="absolute inset-0 -m-2 rounded-full" />
                  </div>
                </div>
              </div>
              
              {/* Progress indicator */}
              <div className="flex justify-center mt-3">
                <span className="text-white/70 text-sm font-medium">
                  {currentSlide + 1} / {totalSlides}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        .slick-track {
          display: flex !important;
          gap: 1rem;
          padding: 1rem 0;
        }

        .slick-slide > div {
          height: 100%;
        }

        .member-slider .slick-dots li.slick-active button,
        .leader-slider .slick-dots li.slick-active button {
          background-color: #3b82f6;
          transform: scale(1.2);
        }

        /* Improve mobile view */
        @media (max-width: 640px) {
          .slick-track {
            gap: 0.5rem;
          }

          .member-slider,
          .leader-slider {
            margin: 0 -1rem;
          }

          .slick-slide {
            opacity: 0.5;
            transition: opacity 0.3s ease;
          }

          .slick-slide.slick-active {
            opacity: 1;
          }

          /* Improve peek effect */
          .slick-list {
            overflow: visible !important;
          }
        }

        /* Prevent text selection during drag */
        body.scrollbar-dragging {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        /* Improve scrollbar touch target */
        .custom-scrollbar-thumb {
          min-height: 44px; /* iOS recommended touch target */
          min-width: 44px;
        }
      `}</style>
    </div>
  );
};

export default MemberSlider;