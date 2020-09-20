import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import './App.css';

export default function App() {

  const [markdown, setMarkdown] = useState(`
  # On left YOU can write the markdown
  # On right YOU can see the text
  - Use - for unordered list

  `);
  return (
    <div className="app">
      <textarea id="text-area" onChange={(e) => setMarkdown(e.target.value)} value={markdown} />

      <ReactMarkdown source={markdown} className="preview" />
      <button className="clear" onClick={() => {
        setMarkdown("");
        document.getElementById("text-area").focus()
      }}>Clear</button>
    </div>
  );
}
