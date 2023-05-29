import React from "react";

export const Select = ({ languages, handleLanguage }) => {
  return (
    <>
      <h2>Know countries by language 👇🏽👇🏽</h2>
      <select onChange={handleLanguage} className="app__select">
        <option defaultValue value="spa">
          Español
        </option>
        {languages.map((lang, index) => (
          <option className="select__option" key={index} value={lang.iso}>
            {lang.language}
          </option>
        ))}
      </select>
    </>
  );
};
