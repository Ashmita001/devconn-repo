import { MdMenu } from "react-icons/md";
import { IoChatbubbleSharp } from "react-icons/io5";
import "./styles.css";

const Headerbar = () => {
  return (
    <>
    <div className="HeaderBar">
      <div className="icons menu">
        <MdMenu />
      </div>
      <div className="icons chat"> 
        <IoChatbubbleSharp />
      </div>
      
    </div>
    <div className="chat_no">2</div>
    </>
  );
};

export default Headerbar;
