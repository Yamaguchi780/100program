import {useNavigate} from "react-router-dom";
import './company.css';

export const Company = () => {
  const navigate = useNavigate();

  //クリックして別の場所に移るためのもの
  const handleClick = () => {
    navigate("/start");
  }

  return(
    <div>
      <div className='explain'>協賛企業様</div>
      <button className="startButton" onClick={() => {handleClick()}} id="hai">startへ</button> 
    </div>
  );
}