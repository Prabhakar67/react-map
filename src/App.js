
import './App.css';

let nameArray = ['Ajay', 'Akshay', 'Ramesh', 'Suresh'];

function elementToBeMapped(el, sn) {
  return <>
    <h2>{`${sn + 1}: ${el}`}</h2>
  </>
}

// let elementToBeMapped = (el, sn) => (
//   <h2>{`${sn + 1}: ${el}`}</h2>
// )

function App() {

  return (
    <div className="App">
      <div>{nameArray.map(elementToBeMapped)}</div>
    </div>
  );
}

export default App;
