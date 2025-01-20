import React from 'react';
import DesktopMilkbottles from '../../images/desktop/image-gallery-milkbottles.jpg';
import MobileMilkbottles from '../../images/mobile/image-gallery-milkbottles.jpg';
import DesktopOrange from '../../images/desktop/image-gallery-orange.jpg';
import MobileOrange from '../../images/mobile/image-gallery-orange.jpg';
import DesktopCone from '../../images/desktop/image-gallery-cone.jpg';
import MobileCone from '../../images/mobile/image-gallery-cone.jpg';
import DesktopSugar from '../../images/desktop/image-gallery-sugarcubes.jpg';
import MobileSugar from '../../images/mobile/image-gallery-sugar-cubes.jpg';

const ImageGrid = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {/* Gallery Image */}
      <div className="overflow-hidden w-full">
        <picture className='w-full overflow-hidden'>
          <source srcSet={MobileMilkbottles} media="(max-width: 768px)" />
          <img src={DesktopMilkbottles} className="w-full h-auto" alt="Milk bottles" />
        </picture>
      </div>

      {/* Gallery Image */}
      <div className="overflow-hidden w-full">
        <picture className='w-full overflow-hidden'>
          <source srcSet={MobileOrange} media="(max-width: 768px)" />
          <img src={DesktopOrange} className="w-full h-auto" alt="Orange" />
        </picture>
      </div>

      {/* Gallery Image */}
      <div className="overflow-hidden w-full">
        <picture className='w-full overflow-hidden'>
          <source srcSet={MobileCone} media="(max-width: 768px)" />
          <img src={DesktopCone} className="w-full h-auto" alt="Cone" />
        </picture>
      </div>

      {/* Gallery Image */}
      <div className="overflow-hidden w-full">
        <picture className='w-full overflow-hidden'>
          <source srcSet={MobileSugar} media="(max-width: 768px)" />
          <img src={DesktopSugar} className="w-full h-auto" alt="Sugar cubes" />
        </picture>
      </div>
    </div>
  );
};

export default ImageGrid;
