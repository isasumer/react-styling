// const myStyles = {
//   par : {
//     color:"blue",
//     fontSize:"1.2rem",
//     fontWeight:"bolder"
//   },
//   secondDiv: {
//     backgroundColor:"#b0b0b0"
//   }
// }
import {myStyles} from "./styles"
const Inline = () => {
  return (
    <div style={{backgroundColor:"red", color:"#fff"}}>
      <h1>Hello from Inline Comp</h1>
      <div style={myStyles.secondDiv}>
        <p style={myStyles.par}>Inline styyling in react components</p>
      </div>
    </div>
  );
};

export default Inline;
