import React from 'react';
import { Panel, PanelGroup } from 'react-bootstrap'
import { chapters } from './chapter/chapters';
import Code from './Code';

const showCodeIfNeeded = (code) => code
  ? <Code code={code}/>
  : <div/>;

const Cell = (example, index) => {
  return (
    <Panel header={example.header} key={index} bsStyle='info'>
      {example.render}
      {showCodeIfNeeded(example.code)}
    </Panel>
  );
};

const Section = (chapter, index) => (
  <Panel header={chapter.header} key={index} eventKey={index.toString()} bsStyle='primary'>
    {chapter.examples.map(Cell)}
  </Panel>
);

const HTMLApp = () => (
  <div>
    <PanelGroup defaultActiveKey={(chapters.length - 1).toString()} accordion>
      {chapters.map(Section)}
    </PanelGroup>
  </div>
);

export default HTMLApp;