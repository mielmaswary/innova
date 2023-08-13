import Container from "./components/Container";

function App() {
  const style = {
    backgroundColor: "#CDF",
    width: "100%",
    height: "100vh",
    padding: "20px 25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={style}>
      <Container></Container>
    </div>
  );
}

export default App;
