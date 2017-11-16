import React from 'react';
import { chapters } from './chapter/chapters';
import { Panels } from '../Internal/Panels';

const HTMLApp = () => (
  <div>
    {Panels(chapters)}
  </div>
);

export default HTMLApp;