import React from "react";

const Gallery = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="gallery__item">
        <p className="font-Fraunces text-4xl font-bold">Transform your brand</p>
        <p className="text-justify font-Barlow font-normal text-neutral-veryDarkGrayishBlue">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod
          urna id malesuada dictum. Proin eget suscipit felis, nec aliquet
          purus. Sed vel nulla euismod, dapibus elit in, viverra ante. Quisque
          gravida malesuada nisl,
        </p>
        <h2 className="font-Fraunces font-bold uppercase">
          <a href="#">Learn More</a>
        </h2>
      </div>
      <div className="gallery__item-image bg-[url('/images/desktop/image-transform.jpg')]"></div>

      <div className="gallery__item-image bg-[url('/images/desktop/image-stand-out.jpg')]"></div>
      <div className="gallery__item">
        <p className="font-Fraunces text-4xl font-bold">Transform your brand</p>
        <p className="text-justify font-Barlow font-normal text-neutral-veryDarkGrayishBlue">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod
          urna id malesuada dictum. Proin eget suscipit felis, nec aliquet
          purus. Sed vel nulla euismod, dapibus elit in, viverra ante. Quisque
          gravida malesuada nisl,
        </p>
        <h2 className="font-Fraunces font-bold uppercase">
          <a href="#">Learn More</a>
        </h2>
      </div>

      <div className="gallery__item-image bg-[url('/images/desktop/image-graphic-design.jpg')] relative">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 text-center mb-16">
          <h2 className="font-Fraunces font-bold pb-4 text-4xl">Graphic Design</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            euismod urna id malesuada dictum. Proin eget
          </p>
        </div>
      </div>

      <div className="gallery__item-image bg-[url('/images/desktop/image-photography.jpg')] relative">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 text-center mb-16">
          <h2 className="font-Fraunces font-bold pb-4 text-4xl">Photography</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            euismod urna id malesuada dictum. Proin eget
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
