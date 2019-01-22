import * as React from 'react';
import { any } from 'prop-types';
import './resources/css/login.css'

import { connect } from "react-redux";



/* eslint-disable no-unused-vars */
import $ from 'jquery';
import { AnyARecord } from 'dns';
export const UserInfo = {
    userName: ''
}
export default class LoginForm extends React.Component<any>{
  
      constructor(props) {
        super(props);
        this.state = {userName: $('.J_account').val(),
        psd: $('.J_pwd').val() };
        this.changeName=this.changeName.bind(this)
        this.login=this.login.bind(this)
      }
   
    public  login () {
     const that=this;
        // UserInfo.userName = (that.state as any).userName
        that.props.history.push(`${this.props.match.url.replace(/\/[^/]+$/, '')}/protect`)
        
    }

   public   changeName (e){
        this.setState({
            userName: e.target.value
        })
        UserInfo.userName=e.target.value
    }
   public setToken() {
        const token = (this.state as any).userName + (this.state as any).psd
        if (!token) {return}
        const RedirectUrl = this.props.location.state ? this.props.location.state.from.pathname : '/'
        // 修改redux中的token值
        this.props.changeActive(token)
        // 登陆成功之后的跳转
        this.props.history.push(RedirectUrl)
      }
   
  
  public  render(){
 
   const xunhuan= setInterval(()=> {
        const html = document.documentElement;
        const w = html.clientWidth;
        const h = html.clientHeight;
        const heart = document.createElement('img');
        heart.className='myheart';
        heart.src = require('./resources/images/heart.png');

        const left = Math.floor(Math.random() * w);
        const tops = Math.floor(Math.random() * h);

        heart.style.left = left + 'px';
        heart.style.top = tops + 'px';

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        }, 1000);

        document.body.onmousemove = (e)=>{
            const x = e.offsetX - heart.offsetWidth / 2;
            const y = e.offsetY - heart.offsetHeight / 2;
            heart.style.left = x + 'px';
            heart.style.top = y + 'px';
        }

    }, 200)
    this.componentWillUnmount=()=>{
        clearInterval(xunhuan)
    }
    $(document).ready(
        
        ()=>{
            $('.login-content ul li:first').click( (e)=> { 
    
                if($('.login-content ul li').attr('data-type')==='regist'){
            
                    $('.login-content ul li:last').removeClass('content-active');
                    $('.login-content ul li:first').addClass('content-active');
                    $('.login-content .register-info').show()
                    $('.login-content .J_login-info').hide()
                }
            });
            $('.login-content ul li:last').click((e)=>{
                $(this).addClass('content-active');
                $('.login-content ul li:first').removeClass('content-active');
                $('.login-content .J_login-info').show()
                $('.login-content .register-info').hide()
            })
            $('.login-form .J_login').click((e)=>{
                if($('.login-form .J_account').val()==='gddadmin'){
                    if($('.login-form .J_pwd').val()==='123456'){
                            setTimeout(() => {
                                window.alert('果多多网络科技后台欢迎您！')
                                this.props.history.push('/detail');
                                clearInterval(xunhuan)
                            }, 500);
                            return
                        
                    }else{
                        window.alert('Error: 密码错误!')
                        return
                    }
                }else{
                  
                    window.alert('Warning：管理员账户不存在！')
                    return
                }
            })   
        }
    )

        return(
           
           <div>
        
                 <div className="login-center">
            <div className="login-img">
                <img src={require('./resources/images/guoduoduo.png')} style={{verticalAlign:'middle'}} /><span>后台登录</span>
                   <img src={require('./resources/images/login-head.png')} alt="果多多网络科技" style={{marginLeft:10}} />
          
            </div>
            <div className="login-content J_login-content">
                <ul>
                    <li className="content-title J_tab" data-type="regist">
                        <span>注册</span>
                    </li>
                    <li className="content-title content-active  J_tab"  data-type="login">
                        <span>登录</span>
                    </li>
                </ul>
                {/* <!--登录--> */}
                <div className="login-form J_login-info">
                    
                 
                    <p className="p-group">
                        <input type="text" className="login-input J_account"  onBlur={this.changeName}   placeholder="管理员账号" />
                        
                    </p>
                   
                    <p className="p-group">
                        <input type="password" className="login-input J_pwd" placeholder="账户密码" />
                        
                    </p>
                    <div className="content-btn">
                        <input type="button" className="login-btn J_login" value="登录" onClick={this.login} style={{marginTop:10,fontSize:'bold'}} />
                    </div>
                    <div className="forget-pwd">
                        <a className="J_forget_No a-forget-pwd" style={{paddingRight:15}}>忘记账户</a>
                        <a className="J_forget a-forget-pwd">忘记密码</a>
                    </div>
                </div>
                {/* <!--注册--> */}
                <div className="login-form register-info  J_register-info hide">
                    <p className="p-group">
                        <input type="text" className="login-input J_mobile" placeholder="手机号作为登录账号使用" />
                        <label className="lb-tip J_lb-tip J_lb-mobile must">请输入有效手机号</label>
                    </p>
                    <p className="p-group p-yzm">
                        <input type="text" className="login-input  J_smsCode" placeholder="验证码" />
                        <input type="button" value="获取验证码" className="smsCode J_btn-yz" />
                        <label className="lb-tip J_lb-tip J_lb-yzm must">请输入验证码</label>
                    </p>
                    <p className="p-group">
                        <input type="password" className="login-input J_setPassword" placeholder="设置密码" />
                        <label className="lb-tip J_lb-tip J_lb-setPassword must">密码为6-16位字母或数字</label>
                    </p>
                    <p className="p-group">
                        <input type="password" className="login-input J_surePassword" placeholder="确认密码" />
                        <label className="lb-tip J_lb-tip J_lb-surePassword must">密码为6-16位字母或数字</label>
                    </p>
                    <p className="p-xieyi">
                        <input type="checkbox" className="J_chkregist" />
                        请阅读<a href="javascript:void(0)">果多多网络科技协议</a>
                    </p>
                    <div className="content-btn">
                        <input type="button" className="login-btn J_btn-register"  value="确认注册" />
                    </div>
                   
                </div>
            </div>
            {/* <!--注册成功--> */}
            <div className="hide login-success">
                <p className="isOk-out"><span className="isOk-success"/></p>
                <p className="success-t">注册成功</p>
                <p className="success-t success-b">请牢记您的管理员账户与密码：<span className="company-num"/></p>
                 <input type="button" className="login-btn J_to-login login-success-com" value="去登录"/>
            </div>       
        </div>
        {/* <!--忘记密码--> */}
        <div className="screen J_forget-info hide">
            <div className="login-center forget-center ">
                <span className="forget-close J_forget-close">x</span>
                <div className="login-form forget-info  ">
                    <div className="forget-pwd-info">
                        <p className="forget-title">重设密码</p>
                        <p className="forget-desc">请输入您需要找回密码的手机账户</p>
                    </div>
                    <p className="p-group">
                        <input type="text" className="login-input J_mobile" placeholder="手机号" />
                        <label className="lb-tip J_lb-tip J_lb-mobile must">请输入有效手机号</label>
                    </p>
                    <p className="p-group p-yzm">
                        <input type="text" className="login-input  J_smsCode" placeholder="验证码" />
                        <input type="button" value="获取验证码" className="smsCode J_btn-yz" />
                        <label className="lb-tip J_lb-tip J_lb-yzm must">请输入验证码</label>
                    </p>
                    <p className="p-group">
                        <input type="password" className="login-input J_setPassword" placeholder="设置密码" />
                        <label className="lb-tip J_lb-tip J_lb-setPassword must">密码为6-16位字母或数字</label>
                    </p>
                    <p className="p-group">
                        <input type="password" className="login-input J_surePassword" placeholder="确认密码" />
                        <label className="lb-tip J_lb-tip J_lb-surePassword must">密码为6-16位字母或数字</label>
                    </p>
                    <div className="content-btn">
                        <input type="button" className="login-btn J_btn-forgPwd"  value="确认修改" />
                    </div>
                    <div className="div-info J_error">
                        <span/>
                    </div>
                </div>
            </div>
        </div> 
        {/* <!--忘记管理员账户--> */}
        <div className="screen J_forget-No hide">
            <div className="login-center forget-center ">
                <span className="forget-close J_forget-no-close">x</span>
                <div className="login-form forget-info  ">
                    <div className="forget-pwd-info forget-no">
                        <p className="forget-title">找回管理员账户</p>
                    </div>
                    <p className="p-group">
                        <input type="text" className="login-input J_mobile" placeholder="手机号" />
                        <label className="lb-tip J_lb-tip J_lb-mobile must">请输入有效手机号</label>
                    </p>
                    <div className="content-btn">
                        <input type="button" className="login-btn J_btn-sendNoMsg"  value="发送短信" />
                    </div>
                    <div className="div-info J_error">
                        <span/>
                    </div>
                </div>
            </div>
        </div>      
        <div className="login-footer" style={{margin:'0 auto'}}>
            杭州果多多网络科技有限公司|  ©️ Copyright 2019
        </div>
        <div className="modal-mask" id="registerSuccessModalContainer" style={{display:'none'}}>
            <div className="modal-container register-success-modal">
                <img className="tip-icon" src="resources/images/smile-face.png"/>
                <p className="content-text">欢迎注册果多多后台，待管理员审核通过后，可正常进入管理</p>
                <p className="content-tip">
                <span>
                                    联系技术QQ：
                </span>

                    <a href="http://wpa.qq.com/msgrd?v=3&uin=2116573547&site=qq&menu=yes" target="_blank">
                        <img src="resources/images/QQ.png"/>
                        <span>1493305755</span>
                    </a>
                </p>
                <p className="content-tip" style={{marginTop:10}}>
                    <span>联系电话：</span>
                    <a href="tel:0571-85872888" target="_blank">0571-85872888</a>
                </p>
                <button className="redirect-btn" >去登录</button>
            </div>
        </div>
           </div>
        )
    }
}


