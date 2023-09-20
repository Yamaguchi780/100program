import {useLocation, useHistory} from "react-router-dom";
import './explain.css';

export const Explain = () => {
  const history = useHistory();

  //クリックして別の場所に移るためのもの
  const handleClick1 = () => {
    history.push("/start");
  }

  return(
    <div>
      <div className='explain'>説明</div>
      <button className="startButton" onClick={() => {handleClick1()}} id="hai">startへ</button> 
    </div>
  );
}