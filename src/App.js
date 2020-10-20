import React, {useState, useEffect} from 'react';
import qs from 'qs';
import './App.css';

/**
 * TODO: - put 'top' and 'bottom' in a dictionary
 * - refactor into components
 * - change and save username and password into .env
 * - create a gallery for meme templates
 * - style
 * - create routing for 'About' and 'Contact'
 * - create header, main, footer
 */

function App() {
  const [upperText, setUpperText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [templates, setTemplates] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(null);
  const [meme, setMeme] = useState(null);

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

  const handleClick = (imageId) => {
    setSelectedId(imageId);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    const params = {
      template_id: selectedId,
      text0: upperText,
      text1: bottomText,
      username: 'xzk03017',
      password: 'xzk03017@cndps.com'
    }
    fetch(`https://api.imgflip.com/caption_image?${qs.stringify(params)}`)
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          setMeme(json.data);
        } else {
          setError(json.error_message);
        }
      })
  }

  return (
    <div className="App">
      {error}
      Selected meme template: {selectedId}
      <form onSubmit={handleSubmit} >
        <input type="text" name="top" value={upperText} onChange={handleChange} />
        <input type="text" name="bottom" value={bottomText} onChange={handleChange} />
        <input type="submit" value="Generate meme"/>
      </form>
      <div className="meme">
        {meme && (<img src={meme.url} alt="Generated meme" />)}
      </div>
      <div className="meme-container">
        {templates && templates.map((elem) => (
          <img
            key={elem.id}
            onClick={() => handleClick(elem.id)}
            src={elem.url}
            alt={elem.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
