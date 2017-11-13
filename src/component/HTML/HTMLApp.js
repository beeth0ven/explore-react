import React from 'react';
import { Panel, PanelGroup } from 'react-bootstrap'
import { chapters } from './chapter/chapters';

const Cell = (example, index) => (
  <Panel header={example.header} key={index} bsStyle='info'>
    {example.render}
  </Panel>
);

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