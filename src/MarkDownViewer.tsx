import React from 'react';

interface MarkDownViewerProps {
  content: string;
}

export default function MarkDownViewer({ content }: MarkDownViewerProps) {
  // markdown keywords include an space after it 
  const formatters: any = {
    '# ': (line: string) => <h1>{line}</h1>,
    '## ': (line: string) => <h2>{line}</h2>,
    '--- ': (line: string) => (
      <>
        <hr />
        {line}
      </>
    ),
  };

  const parseContent = () => {
    const lines = content.split(/\r?\n/);

    return lines.map((line: string, index: number) => {
      for (let format in formatters) {
        if (line.startsWith(format)) {
          return (
            <React.Fragment key={index}>
              {formatters[format](line.slice(format.length))}
            </React.Fragment>
          );
        }
      }
      return <p key={index}>{line}</p>;
    });
  };
  return <div className="content_viewer">{parseContent()}</div>;
}
