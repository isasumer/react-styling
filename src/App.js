import Inline from "./components/inline/Inline"
// import StyleSheet from "./components/regular-style/StyleSheet"
import Sassy from "./components/sassy/Sassy"


const App = () => {
  return (
    <div>                                
      <Inline />
      {/* <StyleSheet primary = {false}/> */}
      <Sassy />
      {/* <h3>Something went wrong</h3>
      <h3>20px</h3> */}
    </div>
  );
};

export default App;
