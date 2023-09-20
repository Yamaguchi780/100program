import {useNavigate} from "react-router-dom";
import './start.css';
import norenImage from "../images/header.png";
import titleImage from "../images/title.jpg";
import startImage from "../images/playbutton_2.png";
import title2Image from "../images/title2.jpg";
import scrollImage from "../images/scroll.jpg";
import typingImage from "../images/typingImg.jpg";
import explainTitleImage from "../images/explainTitrunle.jpg";
import explainImage from "../images/explain.jpg";
import companyTitle from "../images/companyTitle.jpg";
import companyExplain from "../images/companyExplain.jpg";

export const Start = () => {
  const navigate = useNavigate();

  //クリックして別の場所に移るためのもの
  const handleClick1 = () => {
    navigate("/play");
  }

  return(
    <div>

      <header className='header'><img src={norenImage} alt="ヘッダー"/></header>
      <div className='body'><img src={titleImage} alt="ボディー"/><br/></div>
      <div className='title2'><img src={title2Image} alt="タイトル"/><br/></div>  
      <div className='startButton'><img src={startImage} alt="スタートボタン" onClick={() => {handleClick1()}}/></div>  
      <div className='scroll'><img src={scrollImage} alt="スクロール"/><br/></div>
      <div className='explain'>
        <div>
          <img className='explainTitleImg' src={explainTitleImage} alt="説明画面タイトル" />
          <p><img className="explainImg" src={explainImage} alt="説明"/></p>
        </div>
        <div><img className='typingImg' src={typingImage} alt="タイピング"/></div>
      </div> 
      <div className="companytitleImg"><img src={companyTitle} alt="カンパニータイトル"/></div>
      <div className="companyExplainImg"><img src={companyExplain} alt="カンパニー説明"/></div>

    </div>
  );
}