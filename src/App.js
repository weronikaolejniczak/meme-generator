import React, {useState, useEffect} from 'react';
import './App.css';

/**
 * TODO:
 * - put 'top' and 'bottom' in a dictionary
 */
function App() {
  const [upperText, setUpperText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(json => setTemplates(json.data.memes))
  }, []);

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
    console.log(templates);
    //console.log(upperText, bottomText);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} >
        <input type="text" name="top" value={upperText} onChange={handleChange} />
        <input type="text" name="bottom" value={bottomText} onChange={handleChange} />
        <input type="submit" value="Submit"/>
      </form>
      <div className="meme-container">
        {templates && templates.map((elem) => (
          <img key={elem.id} src={elem.url} alt="" />
        ))}
      </div>
    </div>
  );
}

export default App;
