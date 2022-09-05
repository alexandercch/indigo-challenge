import { useState } from 'react';
import MarkDownViewer from './MarkDownViewer';

function App() {
  const [inputText, setInputText] = useState<string>('');

  const handleContentChange = (content: string) => {
    setInputText(content);
  };

  return (
    <div className="app_container">
      <textarea
        onChange={(e) => handleContentChange(e.target.value)}
        rows={5}
        className="input_content"
      />
      <MarkDownViewer content={inputText} />
    </div>
  );
}

export default App;
