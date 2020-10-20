import React, {useState, useEffect} from 'react';
import qs from 'qs';

import {Header, Hero, Form, Meme, Templates, Footer} from './components';
import './App.css';

/**
 * TODO:
 * - change and save username and password into .env
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
      .then(json => {
        const filteredTemplates = json.data.memes.filter(elem => elem.box_count === 2);
        setTemplates(filteredTemplates);
      })
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
    <div className="app">
      <Header />
      <Hero />

      <div className="main">
        <div className="meme-creator">
          <div className="user-input">
            {templates && (
              <Templates
                templates={templates}
                selectedId={selectedId}
                handleClick={handleClick}
              />
            )}

            <h3>Enter upper and bottom text</h3>
            <Form
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              values={[upperText, bottomText]}
            />
          </div>

          <div className="meme-container">
            <h3>Generated meme</h3>
            {meme ? (<Meme source={meme.url} />) : (<div className="placeholder" />)}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
