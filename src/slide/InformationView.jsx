import React from 'react';
import styled from 'styled-components';
import { CgAdd } from "react-icons/cg";
import { ImAppleinc } from "react-icons/im";
const InformationViewBlock = styled.div`
margin-top: 60%;
position: relative;
display: flex;
.sell{
   position: absolute;
    border: 1px solid black;
    align-content: left;
    padding: 30px ;
    display: flex;
    border-radius: 20px;
}
.sell2{
    position: absolute;
    align-content: center;
    display: flex;
    border:1px solid black;
    padding: 30px;
    border-radius: 20px;
    margin-left:45%;
}
.deinfo{
text-align: left;
 border:1px solid lightgray;
 background-color: lightgray;
 border-radius: 20px;
 padding: 15px;
 margin-left: 80%;
 font-size:15px;
 align-content: right;
}
.care1{
border: 1px solid black;
border-radius: 20px;
padding: 15px;
margin-top: 10px;
position: absolute;
;
}
.care2{
    border: 1px solid black;
    border-radius: 20px;
    padding: 50px;
    position: absolute;
    display: flex;
    margin-left: 35%;
}

.detail1{
   text-decoration: underline;
   
   
}
.icon2{
    color: red;
}
.caredetail{
    border:1px solid lightgray;
    background-color: lightgray;
    color:black;
    border-radius: 20px;
    position: absolute;
    margin-left: 60%;
    padding: 25px;
}
.summary{
    background-color: #eae9e9d7;
    margin-top: 20%;
    display: flex;
    justify-content: space-between;
}
.summary1{
   
}
.summary2{
    display: flex;
    text-align: center;
    justify-content: center;
}



`
const InformationView = () => {
    return (
        <InformationViewBlock>
            <div>
                <div><h2>Apple Trade In.<span>새iPhone 구입 시 사용할수있는 ￦400,000-￦950,000 상당의 크레딧을 얻는법.**</span></h2></div>
                <div className='sell'>
                    <input type='radio' id='sel1' /><label htmlFor='sel1' />
                    <span>iPhone 선택하기</span>
                    <span>몇가시 질문에 답해주시면 예상금액이 제시됩니다.</span>
                </div>
                <div>
                    <div className='sell2'>
                        <input type='radio' id='sel2' /><label htmlFor='sel2' />
                        <span>보상 판매 없음</span>
                    </div>
                </div>
                <div className="deinfo">
                    <span className="word1"><strong>보상 판매 과정을 알아볼까요?</strong></span>
                    <span className="icon1"><CgAdd /></span>
                    <span className="word2">보상 판매 과정을 단계별로 자세히 알아보세요.</span><br />
                </div>
                <div className='care'>
                    <div><h2>AppleCare+ 보증.<span>새로 구입한 iPhone을 보호하세요.</span></h2></div>
                    <div className='care1'>
                        <input type='radio' style={{ display: 'none' }} id='care1' /><label htmlFor='care1' />
                        <span className='icon2'><ImAppleinc /></span><span className='detail1'><strong>AppleCare+</strong></span><br />
                        <span>● 우발적인 손상에 대한 횟수제한없는수리*<br />
                            ● Apple 정품 부품으로 진행되는 Apple인증 수리 서비스<br />
                            ● Apple 전문가의 우선 지원
                        </span>
                    </div>
                    <div className='care2'>
                        <spna>AppleCare+ 보증 추가 안함</spna>
                    </div>
                    <div className=' caredetail'>
                        <span className='word1'>AppleCare+의 혜택은 무엇인가요?</span><span className="icon1"><CgAdd /></span><br />
                        <span className='word2'>떨어뜨리거나 액체를 엎지를는 등의 우발적인 사고로 부터<br />
                            iPhone을 보호할 수있읍니다. 보장 내용을 살펴보세요.</span>
                    </div>
                    <div className='summary'>
                        <div className='summary1'>
                            <h2>갖고 싶던 iPhone. 이제<br />
                                당신의 취향대로</h2><br />
                            <img src='./assets/img/image7.jpg' width={300} height={200} />
                            </div>
                            <div className='summary2'>
                                <h3>￦1,550,000부터</h3>
                                <br/><span>시간이 좀더 필요하신가요?</span>
                            </div> 
                    </div>
                </div>
            </div>
        </InformationViewBlock>
    );
};

export default InformationView;