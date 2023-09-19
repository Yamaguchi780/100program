import './company.css';

export const Company = () => {

  //クリックして別の場所に移るためのもの
  const handleClick = () => {
    window.location.href = "/start";
  }

  return(
    <div>
      <div className='explain'>協賛企業様</div>
      <button className="startButton" onClick={() => {handleClick()}} id="hai">startへ</button> 
    </div>
  );
}