// 리액트 패키지를 불러옵니다.
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import "./App.css";
import Detail from "./Detail";

const Score = (props) => {
  const my_lists = props.list;
  const history = useHistory();
  const [circle, change_cir] = React.useState([0, 1, 2, 3, 4]);
  const setReset = () => {
    change_cir([0,1,2,3,4]);
  };
  let sum = 0;
  const SetAverage = my_lists.map(() => { 
    const Random = (min, max) => Math.random() * (max - min) + min;
    const num = Random(0, 5);
    sum += num;
    return sum;
  });

  const Average = (sum / 7).toFixed(1);

  return (
    <ListStyle>
      <Title>내 일주일은?</Title>
      {my_lists.map((list, index) => {
      const Random = (min, max) => Math.random() * (max - min) + min;
      const num = Random(0, 5);
      
        return (
           <ItemStyle className="list_item" key={index}>
            {list}
            <div className="circle">
            {circle.map((i, j) => {
            if(j <= num) {
                return <div className="circle1" style = {{backgroundColor :  ("rgb(255, 235, 59)")}}></div>;
            } else {
                 return <div className="circle2" style = {{backgroundColor :  ("rgb(221, 221, 221)")}}></div>;
            }
            })}
          </div>
         <div className="tri-angle" onClick={() => {
            history.push("/detail" + index);
          }}> 
          </div>
          </ItemStyle>
        );
      })}
        <Comment>평균 평점</Comment>
        <SetAvg>{Average}</SetAvg>
        <Button onClick={setReset}>
          <p>Reset</p>
        </Button>
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

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
  .tri-angle {
    appearance: none;
    background-color: transparent;
    border-color: transparent purple;
    width: 0px;
    height: 0px;
    border-top-width: 1rem;
    border-top-style: solid;
    border-bottom-width: 1rem;
    border-bottom-style: solid;
    border-left-width: 1.6rem;
    border-left-style: solid;
    color: rgb(255, 255, 255);
    cursor: pointer;
  }
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const Comment = styled.h1`
  text-align: center;
  color: blue;
`;

const SetAvg = styled.div`
  width: 8rem;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: blue;
  padding: 9px;
  font-size: 25px;
    font-weight: bold;;
`;

const Button = styled.div`
 width: inherit;
  height: fit-content;
  background-color: dodgerblue;
  border-radius: 6px;
  text-align: center;
  margin: 10px 0px 0px;
  cursor: pointer;
  p {
    color: white;
    font-size: 18px;
  }
`; 
 
export default Score;