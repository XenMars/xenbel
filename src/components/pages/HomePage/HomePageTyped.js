import React from "react";
import Typed from 'typed.js';

const HomePageTyped = () => {
	const el = React.useRef(null);
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'Frontend',
        'WordPress'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
    };
    typed.current = new Typed(el.current, options);
    
    return () => {
      typed.current.destroy();
    }
  }, [])

  return (
      <div className="type-wrap">
        <span style={{ whiteSpace: 'pre' }} ref={el} /><span>Developer</span>
      </div>
  );
}

export default HomePageTyped;