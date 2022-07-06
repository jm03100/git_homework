import React from "react";
import "./App.css";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const history = useHistory();
  const { day } = useParams();
  const [circle, change_cir] = React.useState([0, 1, 2, 3, 4]);
  const [index, change_idx] = React.useState([0, 1, 2, 3, 4]);


  return (
    <WrapDetail>
      <h3>
        <span className="days">{props.list[day] + "요일"}</span> 평점 남기기
      </h3>
      <Circles>
        {circle.map((i, j) => {
             if(j <= index) {
                return <div className="circle1" onClick={() => {change_idx(j)}} style = {{backgroundColor :  ("rgb(255, 235, 59)")}}></div>;
            } else {
                 return <div className="circle2" onClick={() => {change_idx(j)}} style = {{backgroundColor :  ("rgb(221, 221, 221)")}}></div>;
            }            
        })}
      </Circles>
      <ClickButton onClick={() => {history.push("/");}}>
        평점 남기기
      </ClickButton>
    </WrapDetail>
  );
};

const WrapDetail = styled.div`
 max-width: 350px;
  width: 80vw;
  height: 90vh;
  margin: 5vh auto;
  padding: 5vh 5vw;
  box-sizing: border-box;
  border-radius: 5px;
  h3 {
    text-align: center;
  }
  h3 > span {
    color: rgb(255, 255, 255);
    font-weight: 900;
    background: orange;
    padding: 0.2rem;
    border-radius: 5px;
  }
`;
const Circles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0px;
    width: 100%;
    
.circle1 {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 5px;
    float : left;
  }
  .circle2 {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 5px;
    float : left;
  }
`;
const ClickButton = styled.div `
    width: 100%;
    background-color: purple;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    color: rgb(255, 255, 255);
    float : left;
`;
export default Detail;