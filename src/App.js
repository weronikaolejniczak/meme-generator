import React, {useState} from 'react';
import './App.css';

/**
 * TODO:
 * - put 'top' and 'bottom' in a dictionary
 */
function App() {
  const [upperText, setUpperText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const handleChange = (event) => {
    const filledName = event.target.name;
    const fieldValue = event.target.value;

    if (filledName === 'top') {
      setUpperText(fieldValue)
    } else {
      setBottomText(fieldValue)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(upperText, bottomText);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} >
        <input type="text" name="top" value={upperText} onChange={handleChange} />
        <input type="text" name="bottom" value={bottomText} onChange={handleChange} />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default App;
