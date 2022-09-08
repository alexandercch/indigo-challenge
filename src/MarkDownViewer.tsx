import React from 'react';

interface MarkDownViewerProps {
  content: string;
}

export default function MarkDownViewer({ content }: MarkDownViewerProps) {
  // this var can be implemented in separate file
  const formatters = new Map<string, Function>();
  formatters.set('#', (line: string) => <h1>{line}</h1>);
  formatters.set('##', (line: string) => <h2>{line}</h2>);
  formatters.set('---', (line: string) => (
    <>
      <hr />
      {line}
    </>
  ));

  const parseContent = () => {
    const lines = content.split(/\r?\n/);

    return lines.map((line: string, index: number) => {
      // markdown keywords include an space after it
      const keyCandidate = line.substring(0, line.indexOf(' '));
      const formatter = formatters.get(keyCandidate);
      if (formatter) {
        return (
          <React.Fragment key={index}>{formatter(line.slice(keyCandidate.length))}</React.Fragment>
        );
      }

      return <p key={index}>{line}</p>;
    });
  };

  return <div className="content_viewer">{parseContent()}</div>;
}
