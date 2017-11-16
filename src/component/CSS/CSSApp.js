import React from 'react';
import { chapters } from "./chapter/chapers";
import { Panels } from "../Internal/Panels";

const CSSApp = () => (
  <div>
    {Panels(chapters)}
  </div>
);

export default CSSApp