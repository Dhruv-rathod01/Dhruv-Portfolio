import React from 'react'
import { Link } from 'react-router-dom';
import { FaLocationArrow } from "react-icons/fa";

const MainBtn = ({text,link='',custome='',forResume = false}) => {

 const downloadResume = () => {
  if (forResume) {
    window.open('/docs/Dhruv_Rathore_Resume.pdf', '_blank');
  }
};

  return (
    <Link to={link}>
        <button onClick={downloadResume} className={`main-btn flex gap-3 items-center justify-center ${custome}`}>
            {text}
            <FaLocationArrow className='tex-md rotate-6'/>
        </button>
    </Link>
  )
}

export default MainBtn;