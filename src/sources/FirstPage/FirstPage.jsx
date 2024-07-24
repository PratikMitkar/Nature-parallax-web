import React, { useEffect, useRef, useState } from 'react';
import hill1 from '../../assets/hill1.png';
import hill2 from '../../assets/hill2.png';
import hill3 from '../../assets/hill3.png';
import hill4 from '../../assets/hill4.png';
import hill5 from '../../assets/hill5.png';
import leaf from '../../assets/leaf.png';
import plant from '../../assets/plant.png';
import tree from '../../assets/tree.png';
import CardView from '../../rec/CardView';
import './FirstPage.css';


function FirstPage() {
  const [parallaxHeight, setParallaxHeight] = useState('100vh');
  const plantRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;
      document.getElementById('text').style.marginTop = value * 2.5 + 'px';
      document.getElementById('leaf').style.top = value * -1.5 + 'px';
      document.getElementById('leaf').style.left = value * 1.5 + 'px';
      document.getElementById('hill5').style.left = value * 1.5 + 'px';
      document.getElementById('hill4').style.left = value * -1.5 + 'px';
    };


    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateParallaxHeight = () => {
      if (plantRef.current) {
        const plantHeight = plantRef.current.clientHeight;
        setParallaxHeight(`${plantHeight}px`);
      }
    };

    updateParallaxHeight();

    window.addEventListener('resize', updateParallaxHeight);
    
    return () => window.removeEventListener('resize', updateParallaxHeight);
  }, []);

  return (
    <div>
      <section className='parallax' style={{ height: parallaxHeight }}>
        <img src={hill1} alt="" id='hill1' />
        <img src={hill2} alt="" id='hill2' />
        <img src={hill3} alt="" id='hill3' />
        <img src={hill4} alt="" id='hill4' />
        <img src={hill5} alt="" id='hill5' />
        <img src={tree} alt="" id='tree' />
        <h1 id='text'>I am Nature</h1>
        <img src={leaf} alt="" id='leaf' />
        <img src={plant} alt="" id='plant' ref={plantRef} />
      </section>
    </div>
  );
}

export default FirstPage;
