import React from "react";
import Score from "./Score";
import Detail from "./Detail";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [list, setList] = React.useState(["월", "화", "수", "목", "금", "토", "일"]);
  const text = React.useRef(null);

  return (
    <div className="App">
      <Container>
      <BrowserRouter> 
      <Route path="/" exact>
      <Score list={list} />
      </Route>
      <Route path="/detail:day" exact>
      <Detail list={list} />
      </Route>
      </BrowserRouter>
      </Container> 
    </div>
  );
}

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;


export default App;