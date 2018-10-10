import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Root } from './components';

const reactEl = document.createElement('div');
document.body.appendChild(reactEl);

ReactDom.render(<Root />, reactEl);