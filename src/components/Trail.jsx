import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import { Rating } from "@mui/material";
function Trail() {
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
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="relative w-full glide-04">
      <div className="overflow-hidden" data-glide-el="track">
        <div id="this-is-ui" className='relative w-full overflow-hidden p-0 whitespace-no-wrap flex flex-no-wrap backface-visibility:hidden transform-style:preserve-3d touch-action:pan-Y will-change:transform'>
            <div id="this-is-li" className='w-full max-w-full max-h-full m-auto'>
            <div className="bg-red-400 max-w-80 py-4 px-4 flex flex-col items-center rounded-xl">
        <img src="https://res.cloudinary.com/dawxhtums/image/upload/v1712105662/RESTAURANT%20LANDING%20PAGE%20ASSETS/gdeqlqlftw6hgx2drn8q.png" alt="user pic" />
        <p>I had a fantastic dining experience at this restaurant. The service was top-notch, with the staff going above and beyond to accommodate our needs. The portion sizes were generous, and the prices were reasonable considering the quality of the food.</p>
        <Rating  className="text-violet-300 w-12 " value={4} readonly />
      </div>
            </div>

            <div id="this-is-li" className='w-full max-w-full max-h-full m-auto'>
            <div className="bg-red-400 max-w-80 py-4 px-4 flex flex-col items-center rounded-xl">
        <img src="https://res.cloudinary.com/dawxhtums/image/upload/v1712105662/RESTAURANT%20LANDING%20PAGE%20ASSETS/gdeqlqlftw6hgx2drn8q.png" alt="user pic" />
        <p>I had a fantastic dining experience at this restaurant. The service was top-notch, with the staff going above and beyond to accommodate our needs. The portion sizes were generous, and the prices were reasonable considering the quality of the food.</p>
        <Rating  className="text-violet-300 w-12 " value={4} readonly />
      </div>    
            </div>

            <div id="this-is-li" className='w-full max-w-full max-h-full m-auto'>
            <div className="bg-red-400 max-w-80 py-4 px-4 flex flex-col items-center rounded-xl">
        <img src="https://res.cloudinary.com/dawxhtums/image/upload/v1712105662/RESTAURANT%20LANDING%20PAGE%20ASSETS/gdeqlqlftw6hgx2drn8q.png" alt="user pic" />
        <p>I had a fantastic dining experience at this restaurant. The service was top-notch, with the staff going above and beyond to accommodate our needs. The portion sizes were generous, and the prices were reasonable considering the quality of the food.</p>
        <Rating  className="text-violet-300 w-12 " value={4} readonly />
      </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Trail;
