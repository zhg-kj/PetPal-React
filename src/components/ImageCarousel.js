import { useState } from 'react';
import { Button, Flex } from '@tremor/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="w-full overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-auto transition-transform duration-500 transform-gpu"
        />
      </div>
      <Flex justifyContent='between' className='mt-4'>
        <Button
          onClick={handlePrev}
          icon={ChevronLeftIcon}
          variant='secondary'
        >Prev</Button>
        <Button
          onClick={handleNext}
          icon={ChevronRightIcon}
          iconPosition='right'
          variant='secondary'
        >Next</Button>
      </Flex>
    </div>
  );
}