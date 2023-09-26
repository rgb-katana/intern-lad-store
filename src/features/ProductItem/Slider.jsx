import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '40rem',
};

function Slider({ images }) {
  console.log(images);
  return (
    <Slide>
      {images.map((image, index) => {
        return (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${image})` }}
            ></div>
          </div>
        );
      })}
    </Slide>
  );
}

export default Slider;
