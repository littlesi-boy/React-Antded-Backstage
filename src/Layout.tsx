
import * as React from 'react';
import logo from './static/image/guoduoduo.png';
import Subtab from './subtab';
import { Breadcrumb, AutoComplete,Button } from 'antd';
import Groupedcolumn from './static/bizchart';
import { Divider } from 'antd';
import ContentNav1 from "./contentPage/content-nav2";
import ContentNav from './contentPage/content-nav3';
import {  Dropdown } from 'antd';
import { Redirect } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
import {
    HashRouter as Router, Route, Switch, Link, withRouter,
  } from 'react-router-dom';
  import {UserInfo} from './login';
import {
  Layout, Menu, Icon,Modal
} from 'antd';
import ContentHead from './contentPage/content-head';
import { string } from 'prop-types';
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled={true}>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);
const { Header, Content, Sider } = Layout;
const breadcrumbNameMap = {
    '/apps': '一级目录',
    '/apps/1': '二级目录1',
    '/apps/2': '二级目录2',
    '/apps/1/detail': '详情目录',
  };  
const Home = withRouter((props) => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>
            {breadcrumbNameMap[url]}
          </Link>
        </Breadcrumb.Item>
      );
    });
    const breadcrumbItems = [(
      <Breadcrumb.Item key="home">
        <Link to="/">首页></Link>
      </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);
    return (
      <div style={{background:'#fff'}} id='bannerSub'>
      <div className="demo-nav" >
               <Link to="/">首页></Link>
               <Link to="/apps">菜单管理></Link>
             </div>
             <Switch>
               <Route path="/apps" component={Apps} />
               <Route render={() => <span className='titlePage'>果多多网上商城后台管理主页</span>} />
             </Switch>
             <div className="demo">
        <Breadcrumb>
          {breadcrumbItems}
        </Breadcrumb>
      </div>
             </div>
    );
  });

const Apps = () => (
    <ul className="app-list">
      <li>
        <Link to="/apps/1">项目1</Link>：<Link to="/apps/1/detail">详情</Link>
      </li>
    </ul>
  );
  const ProtectPage = props => {
    // 如果没有登录
    if (!(UserInfo as any).userName) {
        return <Redirect to={`${props.match.url.replace(/\/[^/]+$/, '')}/`} />
    } else {
        return <Layouts {...props}/>
    }
}

class Layouts extends React.Component<any,any>{

    constructor(props:any){
        super(props);
        this.state={
         isShow:{
          isShow1:'block',
          isShow2:'none',
          isShow3:'none',
          isShow4:'none',
          isShow5:'none'
         },
         ModalText: '您当前正在执行的操作：<b> 注销登录 </b>',
    visible: false,
    confirmLoading: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }
  public  showModal = () => {
      this.setState({
        visible: true,
      });
    }
  
    public  handleOk = () => {
      this.setState({
        ModalText: `您当前正在执行的操作： 注销登录 `,
        confirmLoading: true,
      });
     
    setTimeout(() => {
        this.setState({
          visible: false,
          confirmLoading: false,
        });
        (UserInfo as any).userName = '';
        location.href='/'
      }, 1500);
    }
  
    public   handleCancel = () => {
      console.log('Clicked cancel button');
      this.setState({
        visible: false,
      });
    }
   public handleClick(ev:any){

if(ev.key==='2'){
  this.setState({
    isShow:{
      isShow1:'none',
      isShow2:'block',
      isShow3:'none',
      isShow4:'none',
      isShow5:'none',
     }
  })
}else if(ev.key==='3'){
  this.setState({
    isShow:{
      isShow1:'none',
      isShow2:'none',
      isShow3:'block',
      isShow4:'none',
      isShow5:'none',
     }
  })
}else if(ev.key==='4'){
  this.setState({
    isShow:{
      isShow1:'none',
      isShow2:'none',
      isShow3:'none',
      isShow4:'block',
      isShow5:'none',
     }
  })
}else if(ev.key==='5'){
  this.setState({
    isShow:{
      isShow1:'none',
      isShow2:'none',
      isShow3:'none',
      isShow4:'none',
      isShow5:'block',
     }
  })
}else {
  this.setState({
    isShow:{
      isShow1:'block',
      isShow2:'none',
      isShow3:'none',
      isShow4:'none',
      isShow5:'none',
     }
  })
}
    }


   public render(){
     const that=this;
     const { visible, confirmLoading, ModalText } = this.state;
        return (
            <Layout>
              <Modal
          title="系统提示"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
            <Header className="header" id='head'>
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '44px',color:'#333'}}
              >
                <Menu.Item key="1"> <span style={{color:'#444',zIndex:20}}>
                <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      切换 <Icon type="down" />
    </a>
  </Dropdown>
                </span> </Menu.Item>
                <Menu.Item key="2"><span style={{color:'#444',zIndex:20}}>
                <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
       设置 <Icon type="down" />
    </a>
  </Dropdown>
                </span></Menu.Item>
                <Menu.Item key="3"><span style={{color:'#444',zIndex:20}}>
               
    <Button className="ant-dropdown-link" type='default' onClick={this.showModal}>
      注销 
    </Button>
 
                </span></Menu.Item>
                <Menu.Item key='4'>
                <span style={{color:'#444',zIndex:20}}>
                {(UserInfo as any).userName}！欢迎您！
                </span>
                </Menu.Item>
              </Menu>
            </Header>
            
           
            <Layout id='parentBody'>
                <div id='sider'>
                <Sider width={200} style={{clear:"both"}} >
              <div className='logo'>
          <img src={logo} style={{width:80,height:80,zIndex:5}} alt="果多多网络科技" className='imgs'/>
         </div>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%' ,float:"left",marginLeft:0,borderTop:'3px solid #888',background:'rgba(0, 21, 41,0.8)',color:'#eee'}} 
                >
                  {/* <SubMenu key="sub1" data-id='1' onClick={(e)=>{this.handleClick(e)}} title={<span><Icon type="user" />subnav 1</span>}/> */}
             
                  <Menu.Item key="1"  data-id='1' onClick={(e)=>{this.handleClick(e)}}><Icon type="user" /> option1</Menu.Item>
                  <Menu.Item key="2" data-id='2'  onClick={(e)=>{this.handleClick(e)}} ><Icon type="laptop" /> option2</Menu.Item>
          
                  <Menu.Item key="3" data-id='3'  onClick={(e)=>{this.handleClick(e)}} > <Icon type="notification" /> option3</Menu.Item>
                  
                  <Menu.Item key="4" data-id='4'  onClick={(e)=>{this.handleClick(e)}} > <Icon type="team" /> option4</Menu.Item>
              
                  <Menu.Item key="5" data-id='5'  onClick={(e)=>{this.handleClick(e)}} > <Icon type="desktop" /> option5</Menu.Item>
               
                </Menu>
              </Sider>
              <Subtab showif={this.state.isShow}/>
                </div>
               <div style={{width:'100%',height:150}}>
               <Router>
                  <Home />
                </Router>
               </div>
              <Layout style={{ padding: '0 24px 24px' }} id='margin'>
            
                <Content style={{
                  background: '#fff',padding: 20, margin:'auto', marginLeft:0 ,marginTop:50,minWidth:1100,minHeight:980,overflow:'auto'
                }}
                >
               
               <main style={{display:that.state.isShow.isShow1}}>
               <div style={{borderBottom:'2px solid #ddd',paddingBottom:5}}>
                    <span> <IconFont type="icon-twitter" spin={true}/> </span>  <span style={{color:'red',marginLeft:8}}>营业概况</span>
                  </div>
                  <ContentHead />
                  <div style={{borderBottom:'2px solid #ddd',paddingBottom:5}}>
                    <span> <IconFont type="icon-twitter" spin={true}/> </span>  <span style={{color:'red',marginLeft:8}}>数据统计</span>
                  </div>
            <Groupedcolumn  />
               </main>
           <ContentNav1 show={this.state.isShow} /> 
           <ContentNav show={this.state.isShow} />
           <Divider>服务至上</Divider>
           <footer> <Icon type="cloud" /> 杭州果多多网络科技 @2019.1.2 </footer>
                </Content>
            </Layout>
           
            </Layout>
           
          </Layout>
        )
    }
}
export default Layouts
