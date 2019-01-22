import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Layout from './Layout';
import './index.css';
import BasicRoute from './BasicRoute ';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'

// import store from "./store/store";

import {
   Icon
} from 'antd';
import { BackTop } from 'antd';


ReactDOM.render(
<div>
<BasicRoute />
{/* <footer> <Icon type="cloud" /> 杭州果多多网络科技 @2019.1.2 </footer> */}
</div>,


  document.getElementById('root') as HTMLElement
);


registerServiceWorker();
