import * as React from 'react';
import './index.css';
import './subtab.css';
class Subtab extends React.Component<any>{

    public render(){
        return (
            <div id='sub'>
                <ul style={{display:this.props.showif.isShow1}}>
                    <li>果多多</li>
                    <li>果多多</li>
                    <li>果多多</li>
                    <li>果多多</li>
                </ul>
                <ul style={{display:this.props.showif.isShow2}}>
                    <li>果小小</li>
                    <li>果小小</li>
                    <li>果小小</li>
                    <li>果小小</li>
                </ul>
                <ul  style={{display:this.props.showif.isShow3}}>
                    <li>斯金阳</li>
                    <li>斯金阳</li>
                    <li>斯金阳</li>
                    <li>斯金阳</li>
                </ul>
                <ul style={{display:this.props.showif.isShow4}}>
                    <li>杨康乐</li>
                    <li>杨康乐</li>
                    <li>杨康乐</li>
                    <li>杨康乐</li>
                </ul>
                <ul style={{display:this.props.showif.isShow5}} >
                    <li>陈麟炳</li>
                    <li>陈麟炳</li>
                    <li>陈麟炳</li>
                    <li>陈麟炳</li>
                </ul>
            </div>
        )
    }
}
export default Subtab