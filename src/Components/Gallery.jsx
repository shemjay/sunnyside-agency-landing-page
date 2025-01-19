import React from "react";

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="gallery__item">
        <p className="font-Fraunces text-4xl font-bold">Transform your brand</p>
        <p className="text-justify font-Barlow font-normal text-neutral-veryDarkGrayishBlue">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <h2 className="font-Fraunces font-bold uppercase">
          <a href="#" className="link__underline after:bg-primary-yellow after:opacity-45 hover:after:opacity-100">Learn More</a>
        </h2>
      </div>
      <div className="gallery__item-image bg-[url('/images/desktop/image-transform.jpg')]"></div>

      <div className="gallery__item-image bg-[url('/images/desktop/image-stand-out.jpg')]"></div>

      <div className="gallery__item">
        <p className="font-Fraunces text-4xl font-bold">Transform your brand</p>
        <p className="text-justify font-Barlow font-normal text-neutral-veryDarkGrayishBlue">
          Using a collaborative formula of designers, researchers,
          photographers, videographers and copywriters, we'll build and extend
          your brand in digital places.
        </p>
        <h2 className="font-Fraunces font-bold uppercase ">
          <a href="#" className="link__underline after:bg-primary-softRed after:opacity-45 hover:after:opacity-100">Learn More</a>
        </h2>
      </div>

      <div className="gallery__item-image bg-[url('/images/desktop/image-graphic-design.jpg')] relative">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 text-center mb-16">
          <h2 className="font-Fraunces font-bold pb-4 text-4xl text-primary-darkDesaturatedCyan">
            Graphic Design
          </h2>
          <p className="text-primary-darkDesaturatedCyan font-Barlow">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients
            message.
          </p>
        </div>
      </div>

      <div className="gallery__item-image bg-[url('/images/desktop/image-photography.jpg')] relative">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 text-center mb-16 text-primary-darkBlue">
          <h2 className="font-Fraunces font-bold pb-4 text-4xl">Photography</h2>
          <p className="font-Barlow">
            Increase your credibility by getting the most stunning high-quality
            photos that improve your business image
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
