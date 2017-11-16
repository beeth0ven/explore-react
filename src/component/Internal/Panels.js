import React from 'react';
import { Panel, PanelGroup } from 'react-bootstrap'
import Code from './Code';
import dedent from 'dedent-js';

const showCodeIfNeeded = (code) => code
  ? <Code code={dedent(code)}/>
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

export const Panels = (chapters) => (
  <PanelGroup defaultActiveKey={(chapters.length - 1).toString()} accordion>
    {chapters.map(Section)}
  </PanelGroup>
);