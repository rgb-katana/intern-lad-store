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

const buttonStyle = {
  width: '30px',
  background: 'none',
  border: '0px',
  margin: '0.5rem',
  borderRadius: '100%',
  padding: '0.2rem',
  display: 'flex',
  backgroundColor: 'var(--color-main-100)',
  justifyContent: 'center',
  alignItems: 'center',
};

function Slider({ images }) {
  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="var(--color-main-600)"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="var(--color-main-600)"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </button>
    ),
  };

  return (
    <Slide {...properties}>
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
