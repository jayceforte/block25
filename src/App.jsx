// Write your Color component here
import { useState } from 'react'


const Color = ({color, setSelectedColor}) => {
  return  <div className={color} onClick={() => setSelectedColor(color)}></div>;
};

const [selectedColor, setSelectedColor] = useState("")


const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
  <Color color="black" setSelectedColor={setSelectedColor}/>
  <Color color="violet" setSelectedColor={setSelectedColor}/>
  <Color color="green" setSelectedColor={setSelectedColor}/>
</div>
    </div>
    
  );
};

export default App;
