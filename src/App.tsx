import { useState } from 'react';
import MarkDownViewer from './MarkDownViewer';

function App() {
  const [inputText, setInputText] = useState<string>('');

  return (
    <div className="app_container">
      <textarea onChange={(e) => setInputText(e.target.value)} className="input_content" />
      <MarkDownViewer content={inputText} />
    </div>
  );
}

export default App;
