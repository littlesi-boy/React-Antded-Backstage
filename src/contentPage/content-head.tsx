import * as React from 'react';
import './contentHead.css'
class ContentHead extends React.Component{
    public render(){
        return(
            <div className='contentHead'>
                <div className="body">
                <span>| 营业额</span><br/>
                <span style={{fontSize:30,color:'skyblue'}}> <b>￥ 2784.5</b> </span><br/>
                <span>昨日：1392.5</span>  <span style={{color:'blue',fontSize:12,marginLeft:30}}> <b>↑ 49.6%</b> </span>
                </div>
                <div className="body">
                <span>| 销售额</span><br/>
                <span style={{fontSize:30,color:'skyblue'}}> <b>￥ 2784.5</b> </span><br/>
                <span>昨日：1392.5</span>  <span style={{color:'blue',fontSize:12,marginLeft:30}}> <b>↑ 49.6%</b> </span>
                </div>
                <div className="body">
                <span>| 订单数</span><br/>
                <span style={{fontSize:30,color:'skyblue'}}> <b>112</b> </span><br/>
                <span>昨日：56</span>  <span style={{color:'blue',fontSize:12,marginLeft:30}}> <b>↑ 49.6%</b> </span>
                </div>
                <div className="body">
                <span>| 退单与售后</span><br/>
                <span style={{fontSize:30,color:'skyblue'}}> <b>无</b> </span><br/>
                <span>昨日：2单</span>  <span style={{color:'blue',fontSize:12,marginLeft:30}}> <b>↓ 200%</b> </span>
                </div>
            </div>
        )
    }
}
export default ContentHead