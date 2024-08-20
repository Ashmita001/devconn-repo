// import React from 'react'
import { AiFillLike } from "react-icons/ai";
import { MdMessage } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
const Resources = () => {
  return (
    <>
      <p className="Resources">Resources</p>
      <div className="R_box">
        <div className="Section-1">
          <div className="R_box-1">
            <div className="image-profile">
              <img src="" className="profile" alt="profile"></img>
            </div>
            <div className="Name-status">
              <p className="Name">Sh Raj</p>
              <p className="status">
                posted on July 17.Originally published at github.com
              </p>
            </div>
          </div>

          <div className="btn-connect">
            <button className="Connect_btn">Connect</button>
          </div>
        </div>
        <div className="Section-2">
          <p className="R-section-2-Heading">
            Matering React : A Developer guide to Structure Your Fronted Code
          </p>
        </div>
        <div className="Section-3">
          <p className="R-section-3-text">
            Are ypu tired of sifting through a mess of react component and
            files? As your project grows, keeping your code organized become a
            real challange.But dont't worry I;ve got your back. In this guide,
            I'll walk you through a battel-tested structure that'll make your
            react project a breeze to mannage
          </p>
        </div>
        <div className="Section-4">
          <img
            src="D:\devconn\devconn_chatpage\Chat\pics\WhatsApp Image 2024-07-20 at 21.05.17_98b4ae11 1.png"
            alt="code-img"
            className="code-Img"
          ></img>
        </div>
        <div className="Section-5">
          <div className="icon-container">
            <div className="icon-wrapper">
              <AiFillLike size={20} />
            </div>
            <div className="icon-wrapper">
              <MdMessage size={20} />
            </div>
            <div className="icon-wrapper">
              <MdOutlineFileDownload size={20} />
            </div>
          </div>
        </div>
        <div className="Section-6">
          <hr className="styled-hr"></hr>
        </div>
      </div>

      <div className="R_box">
        <div className="Section-1">
          <div className="R_box-1">
            <div className="image-profile">
              <img src="" className="profile" alt="profile"></img>
            </div>
            <div className="Name-status">
              <p className="Name">Sh Raj</p>
              <p className="status">
                posted on July 17.Originally published at github.com
              </p>
            </div>
          </div>

          <div className="btn-connect">
            <button className="Connect_btn">Connect</button>
          </div>
        </div>
        <div className="Section-2">
          <p className="R-section-2-Heading">
            Matering React : A Developer guide to Structure Your Fronted Code
          </p>
        </div>
        <div className="Section-3">
          <p className="R-section-3-text">
            Are ypu tired of sifting through a mess of react component and
            files? As your project grows, keeping your code organized become a
            real challange.But dont't worry I;ve got your back. In this guide,
            I'll walk you through a battel-tested structure that'll make your
            react project a breeze to mannage
          </p>
        </div>
        <div className="Section-4">
          <img
            src="D:\devconn\devconn_chatpage\Chat\pics\WhatsApp Image 2024-07-20 at 21.05.17_98b4ae11 1.png"
            alt="code-img"
            className="code-Img"
          ></img>
        </div>
        <div className="Section-5">
          <div className="icon-container">
            <div className="icon-wrapper">
              <AiFillLike size={20} />
            </div>
            <div className="icon-wrapper">
              <MdMessage size={20} />
            </div>
            <div className="icon-wrapper">
              <MdOutlineFileDownload size={20} />
            </div>
          </div>
        </div>
        <div className="Section-6">
          <hr className="styled-hr"></hr>
        </div>
      </div>
    </>
  );
};

export default Resources;
