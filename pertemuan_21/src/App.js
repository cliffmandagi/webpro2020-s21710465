import './App.css';
import Card from "./components/card";
import { person } from './utils/person';
import Counter from "./components/Counter";

function App() {
  return (
    <>
      {/* {person.map((item)=>{
        return(
          <Card
          name={item.name}
          institution={item.institution}
          address={item.address}
          phoneNumber={item.phoneNumber}
          />
        )
      })
      } */}
      <Counter title="Counter Component"/>
       
   </>
  );
}


export default App;