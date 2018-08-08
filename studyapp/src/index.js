import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import LmsAdmin from './LmsAdmin';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LmsAdmin />, document.getElementById('root'));
registerServiceWorker();
