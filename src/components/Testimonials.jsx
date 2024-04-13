import React, { useEffect } from "react";
// import { Rating } from "@material-tailwind/react";
import { Rating } from "@mui/material";
import { Carousel } from "@material-tailwind/react";
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
// import { Carousel } from "flowbite-react";
export default function Testimonials() {
    useEffect(() => {
        const glide04 = new Glide('.glide-04', {
          type: 'carousel',
          focusAt: 'center',
          perView: 3,
          autoplay: 3500,
          animationDuration: 700,
          gap: 24,
          classes: {
            activeNav: '[&>*]:bg-slate-700',
          },
          breakpoints: {
            1024: {
              perView: 2
            },
            640: {
              perView: 1
            }
          },
        });
      
        glide04.mount();
        
        return () => {
          glide04.destroy();
        };
      }, []); 
  return (
 <div className="mt-24">
       <div id="testimonials-text-section" className="flex flex-col items-center justify-center mb-8 sm:mb-16">
        <h3 className="mb-3  text-shide-yellow text-xl font-medium">Testimonial</h3>
        <h1 className="mb-3 sm:mb-6 md:mb-8  lg:mb-12  text-gray-600 text-2xl font-bold tracking-normal sm:tracking-wide md:tracking-wider text-3xl sm:text-4xl md:text-5xl lg:text-6xl">What They Are Saying </h1>
        <p className=" text-justify text-gray-700 max-w-3xl text-lg md:text-2xl">
          Explore the genuine experiences of our patrons. From delightful dishes
          to impeccable service, our customers' reviews provide a glimpse into
          what makes dining with us unforgettable. Join us and discover why our
          guests rave about their time at our restaurant.
        </p>
      </div>
      {/* carousel begin from here  */}
      <div className="relative w-full glide-04">
      <div className="overflow-hidden " data-glide-el="track">
        <div id="this-is-ui" className='relative w-full overflow-hidden p-0 whitespace-no-wrap flex flex-no-wrap backface-visibility:hidden transform-style:preserve-3d touch-action:pan-Y will-change:transform'>
            
            <div id="this-is-li" className='w-full max-w-full max-h-full m-auto'>
            <div className="bg-white max-w-80 py-4 px-4 flex flex-col items-center rounded-xl">
        <img src="https://res.cloudinary.com/dawxhtums/image/upload/v1712105662/RESTAURANT%20LANDING%20PAGE%20ASSETS/gdeqlqlftw6hgx2drn8q.png" alt="user pic" />
        <p class="text-xl text-gray-700 font-normal mt-1">Dany Bailey</p>
        <p className="text-justify">I had a fantastic dining experience at this restaurant. The service was top-notch, with the staff going above and beyond to accommodate our needs. The portion sizes were generous, and the prices were reasonable considering the quality of the food.</p>
        <Rating  className="text-violet-300 w-12 " value={4} readonly />
      </div>
            </div>

            <div id="this-is-li" className='w-full max-w-full max-h-full m-auto'>
            <div className="bg-white max-w-80 py-4 px-4 flex flex-col items-center rounded-xl">
        <img src="https://res.cloudinary.com/dawxhtums/image/upload/v1712105662/RESTAURANT%20LANDING%20PAGE%20ASSETS/gdeqlqlftw6hgx2drn8q.png" alt="user pic" />
        <p class="text-xl text-gray-700 font-normal mt-1">Dany Bailey</p>
        <p className="text-justify">I had a fantastic dining experience at this restaurant. The service was top-notch, with the staff going above and beyond to accommodate our needs. The portion sizes were generous, and the prices were reasonable considering the quality of the food.</p>
        <Rating  className="text-violet-300 w-12 " value={4} readonly />
      </div>
            </div>

            <div id="this-is-li" className='w-full max-w-full max-h-full m-auto'>
            <div className="bg-white max-w-80 py-4 px-4 flex flex-col items-center rounded-xl">
        <img src="https://res.cloudinary.com/dawxhtums/image/upload/v1712105662/RESTAURANT%20LANDING%20PAGE%20ASSETS/gdeqlqlftw6hgx2drn8q.png" alt="user pic" />
        <p class="text-xl text-gray-700 font-normal mt-1">Dany Bailey</p>
        <p className="text-justify">I had a fantastic dining experience at this restaurant. The service was top-notch, with the staff going above and beyond to accommodate our needs. The portion sizes were generous, and the prices were reasonable considering the quality of the food.</p>
        <Rating  className="text-violet-300 w-12 " value={4} readonly />
      </div>
            </div>


            <div id="this-is-li" className='w-full max-w-full max-h-full m-auto'>
            <div className="bg-white max-w-80 py-4 px-4 flex flex-col items-center rounded-xl">
        <img src="https://res.cloudinary.com/dawxhtums/image/upload/v1712105662/RESTAURANT%20LANDING%20PAGE%20ASSETS/gdeqlqlftw6hgx2drn8q.png" alt="user pic" />
        <p class="text-xl text-gray-700 font-normal mt-1">Dany Bailey</p>
        <p className="text-justify">I had a fantastic dining experience at this restaurant. The service was top-notch, with the staff going above and beyond to accommodate our needs. The portion sizes were generous, and the prices were reasonable considering the quality of the food.</p>
        <Rating  className="text-violet-300 w-12 " value={4} readonly />
      </div>
            </div>

            <div id="this-is-li" className='w-full max-w-full max-h-full m-auto'>
            <div className="bg-white max-w-80 py-4 px-4 flex flex-col items-center rounded-xl">
        <img src="https://res.cloudinary.com/dawxhtums/image/upload/v1712105662/RESTAURANT%20LANDING%20PAGE%20ASSETS/gdeqlqlftw6hgx2drn8q.png" alt="user pic" />
        <p class="text-xl text-gray-700 font-normal mt-1">Dany Bailey</p>
        <p className="text-justify">I had a fantastic dining experience at this restaurant. The service was top-notch, with the staff going above and beyond to accommodate our needs. The portion sizes were generous, and the prices were reasonable considering the quality of the food.</p>
        <Rating  className="text-violet-300 w-12 " value={4} readonly />
      </div>
            </div>
            
        </div>
      </div>
    </div>
      {/* carousel end  here  */}

    
    </div>
   
  );
}
{/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
<Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> 
<Rating name="size-large" defaultValue={2} size="large" />*/}