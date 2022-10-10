import BedroomOne from './BedroomOne';
import Kitchen from './Kitchen';
import FullBath from './FullBath';
import BedroomTwo from './BedroomTwo';
import LivingRoom from './LivingRoom';
import HalfBath from './HalfBath';
import BedroomThree from './BedroomThree';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <div> <BedroomOne /></div>
        <div> <Kitchen /> </div>
        <div> <FullBath /> </div>
        <div> <BedroomTwo /> </div>
        <div> <LivingRoom /> </div>
        <div> <HalfBath /> </div>
        <div> <BedroomThree /> </div>
      </div>
    </div>
  );
}

export default App;
