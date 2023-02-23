import React from "react";
import Typed from 'typed.js';

const PCFaceTyped = () => {
	const el = React.useRef(null);
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'ヾ(・ω・*)',
        ':)'
      ],
      typeSpeed: 100,
      backSpeed: 150,
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
      <div className="type-wrapPC">
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>
  );
}

export default PCFaceTyped;