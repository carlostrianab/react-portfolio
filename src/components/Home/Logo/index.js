import './index.scss'
import cLogo from '../../../assets/images/c-logo.png'
//import { useEffect, useRef } from 'react'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
// import gsap from 'gsap-trial'

const Logo = () => {

    //const bgRef = useRef();
    //const outlineLogoRef = useRef();
    //const solidLogoRef = useRef();

//DrawSVGPlugin need a paid plan 

    /* useEffect(()=> {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(bgRef.current, {
            duration:1,
            opacity:1
        })
        .from(outlineLogoRef.current, {
            drawSVG:0,
            duration:20
        })

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity:0
            },
            {
                opacity:1,
                delay:4,
                duration:4
            }
        )
    }, []) */

    return(
        <div className="logo-container">
      <img
        className="solid-logo"
        src={cLogo}
        alt="JavaScript,  Developer"
     
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      />
      
    
    </div>
    )
}

export default Logo