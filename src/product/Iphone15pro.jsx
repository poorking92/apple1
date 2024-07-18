import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Slider1 from "@/slide/Slider1";
import { CiCirclePlus } from "react-icons/ci";
import InformationView from "@/slide/InformationView";
const Iphone15proBlock = styled.div`
*,
*:before,
*:after{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.promax{
 border:1px solid grey;
 border-radius:10px;
 cursor: pointer;
}
  p {
  
  }
  .coulumn-left {
    position: absolute;
    display: flex;
    width: 1000px;
    height: 500px;
    margin-left: 10px;
  }
  .column-right {
    position: absolute;
    display: flex;
    width: 320px;
    height: 1450px;
    margin-left: 70%;
    
  }
  span {
    color: grey;
  }
span.price1{
  font-size:10px;;
  margin-left:100px;
  text-align: center;
}
.group{
  text-align:left;
}
.detailinfo{
  border: 1px solid lightgray;
  margin-top:20px;
 background-color: lightgray;
 border-radius: 10px;
}
.icon1{
  color:black;
  margin-right:10px;
}
  .word1{
    padding:0 22px 0 0;
    font-size:15px;
    color:black;
    text-align: left;
  }
  .word2{
    text-align:center;
    font-size: 10px;
    margin-top: 10px;
    text-align: left;
  }

.storage1{
  border:1px solid grey;
 border-radius:10px;
 cursor: pointer;
padding: 20px;
font-size: 25px;
}
.sto{
  margin-left: 10px;
  font-size: 20px;
}
.small{
  font-size: 10px;
}
.detailinfo1{
  border: 1px solid lightgray;
  margin-top:20px;
 background-color: lightgray;
 border-radius: 10px;
}

`
const Iphone15pro = () => {

  return (
    <Iphone15proBlock>
      <h1>iPhone 15Pro 구입하기</h1>
      <p>￦1,550,000부터</p>

      <div className="coulumn-left">
        <Slider1 />
      </div>
      <div className="column-right">
        <div className="group">
          <h2>
            모델.<span>당신에게 딱맞는모델은?</span>
          </h2>
          <div className="promax">
            <input className="radio1" type="radio" id="selector" value="1" readOnly />
            <label className="label1" htmlFor="selector">
              <h3 style={{ fontSize: "25px" }}>
                <strong>iPhone 15 Pro</strong>
              </h3>
              <span>15.5cm 디스플레이</span>
              <span className="price1">￦1,550,000부터</span>
            </label>
          </div>
          <div className="promax">
            <input className="radio1" type="radio" id="selector1" value="2" readOnly />
            <label className="label1" htmlFor="selector1">
              <h3 style={{ fontSize: "25px" }}>
                <strong>iPhone 15 Pro Max</strong>
              </h3>
              <span>15.5cm 디스플레이</span>
              <span className="price1">￦1,950,000부터</span>
            </label>
          </div>
          <div className="detailinfo">
            <span className="word1"><strong>모델선택에 도움이 필요하신가요?</strong></span>
            <span className="icon1"><CiCirclePlus /></span><br />
            <span className="word2">화면 크기와 배터리 사용 시간등 차이첨을 비교해보세요</span>

          </div>

          <div className="color">
            <h2>색상.<span>맘에드는색상을 선택하세요</span></h2>
            <h3 >색상</h3>
            <div className="color1" style={{ display: "flex", margin: "10px" }}>
              <div className="color2"><img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-pro-finish-naturaltitanium-202309?wid=40&amp;hei=40&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692895385156" /></div>
              <div className="color3"><img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-pro-finish-bluetitanium-202309?wid=40&amp;hei=40&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692895385157" /></div>
              <div className="color4"><img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-pro-finish-whitetitanium-202309?wid=40&amp;hei=40&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692895385155" /></div>
              <div className="color5"><img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-pro-finish-blacktitanium-202309?wid=40&amp;hei=40&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692895384718" /></div>
            </div>
            <div style={{ margin: "25px", textAlign: "left" }}>
              <div className="word3">
                <h2>저장용량.<span>당신에게 알맞은 저장 용량은?</span></h2>
              </div>
              <div className="storage1">
                <input className="radio1" type="radio" id="storage256" value="2" readOnly />
                <label className="storageinfo1" htmlFor="storage256"><strong>256</strong><span className="sto">GB</span><sup style={{ fontSize: "10px" }}>2</sup></label>
              </div>
              <div className="storage1">
                <input className="radio1" type="radio" id="storage512" value="2" readOnly />
                <label className="storageinfo1" htmlFor="storage512"><strong>512</strong><span className="sto">GB</span><sup style={{ fontSize: "10px" }}>2</sup></label>
              </div>
              <div className="storage1">
                <input className="radio1" type="radio" id="storage1tb" value="2" readOnly />
                <label className="storageinfo1" htmlFor="storage1tb"><strong>1</strong><span className="sto">TB</span><sup style={{ fontSize: "10px" }}>2</sup></label>
              </div>
              <div className="detailinfo1">
                <span className="word1"><strong>용량이 얼마나 필요할지 확실치 않으신가요?</strong></span>
                <span className="icon1"><CiCirclePlus /></span><br />
                <span className="word2">자신에게 어느정도의 저장 용량이 필요할기 감 잡아보기</span><br />

              </div>
            </div>
          </div>
        </div>
      </div>
    <InformationView/>
    </Iphone15proBlock>

  );
};

export default Iphone15pro;
