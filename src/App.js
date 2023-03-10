import styled from "@emotion/styled";
import TweetCard from "./components/TweetCard";

const Content = styled.div`
  margin: 0px auto;
`;

function App() {
  return (
    <Content>
      <TweetCard />
    </Content>
  );
}

export default App;
