import React from 'react';

const Form = ({handleSubmit, handleChange, values}) => {
    return (
        <form onSubmit={handleSubmit} >
        <input type="text" name="top" value={values[0]} onChange={handleChange} />
        <input type="text" name="bottom" value={values[1]} onChange={handleChange} />
        <input type="submit" value="Generate meme"/>
      </form>
    );
}

export default Form;
