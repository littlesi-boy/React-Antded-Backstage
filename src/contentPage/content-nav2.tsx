import * as React from 'react';
import './ContentNav1.css'
import {
    Form, Input,Icon, Button,
  } from 'antd';
  import { Alert } from 'antd';
  import { Mention, Avatar } from 'antd';

  const Nav = Mention.Nav;
  const webFrameworks = [
    { name: 'React', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg',disabled:Boolean },
    { name: 'Angular', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png',disabled:Boolean },
    { name: 'Dva', type: 'Javascript', icon: 'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png' ,disabled:Boolean},
    { name: 'Flask', type: 'Python', icon: 'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png',disabled:Boolean },
  ];

  let id = 0;  

 class ContentNav1 extends React.Component<any,any>{
   public state = {
        suggestions: [],
        showplay:'none'
      }
      public onSearchChange = (value) => {
        const searchValue = value.toLowerCase();
        const filtered = webFrameworks.filter(item => item.name.toLowerCase().indexOf(searchValue) !== -1);
        const suggestions = filtered.map(suggestion => (
          <Nav
            value={suggestion.name}
            data={suggestion}
            disabled={suggestion.disabled}
          >
            <Avatar
              src={suggestion.icon}
              size="small"
              style={{
                width: 14, height: 14, marginRight: 8, top: -1, position: 'relative',
              }}
            />
            {suggestion.name} - {suggestion.type}
          </Nav>
        ));
        this.setState({ suggestions });
      }
 public   remove = (k) => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
          return;
        }
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
          });
        }
    public    add = () => {
            const { form } = this.props;
            // can use data-binding to get
            const keys = form.getFieldValue('keys');
            const nextKeys = keys.concat(++id);
            // can use data-binding to set
            // important! notify form to detect changes
            form.setFieldsValue({
              keys: nextKeys,
            });
          }
      public  handleSubmit = (e) => {
            e.preventDefault();
   
            this.props.form.validateFields((err, values) => {
              if (!err) {
                console.log('Received values of form: ', values);
                this.setState({
                    showplay:'block'
                })
                setTimeout(()=>{
                    this.setState({
                        showplay:'none'
                    })
                },1500)
              }
            });
          }
        
    public render(){
        const { suggestions } = this.state;
        const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };

    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => (
      <Form.Item
        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
        label={index === 0 ? 'customers' : ''}
        required={false}
        key={k}
      >
        {getFieldDecorator(`names[${k}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [{
            required: true,
            message: "Please input customer's name or delete this field.",
          }],
        })(
            <Mention
            style={{ width: '60%' }}
            suggestions={suggestions}
            onSearchChange={this.onSearchChange}
            placeholder='输入一些东西（@开头）：'
          />
        )}
        {keys.length > 1 ? (
          <Icon 
            className="dynamic-delete-button"
            type="minus-circle-o"
            // disabled={keys.length === 1}
            onClick={() => this.remove(k)}
          />
        ) : null}
      </Form.Item>
    ));
 
        return(  
            <div className='contentNav' style={{display:this.props.show.isShow2,height:150}}>
                <div className="body1">
                <span>| 营业额</span><br/>
                <span style={{fontSize:30,color:'skyblue'}}> <b>￥ 2784.5</b> </span><br/>
                <span>昨日：1392.5</span>  <span style={{color:'blue',fontSize:12,marginLeft:30}}> <b>↑ 49.6%</b> </span>
                </div>
                <div className="body1">
                <span>| 销售额</span><br/>
                <span style={{fontSize:30,color:'skyblue'}}> <b>￥ 2784.5</b> </span><br/>
                <span>昨日：1392.5</span>  <span style={{color:'blue',fontSize:12,marginLeft:30}}> <b>↑ 49.6%</b> </span>
                </div>
                <div className="body1">
                <span>| 订单数</span><br/>
                <span style={{fontSize:30,color:'skyblue'}}> <b>112</b> </span><br/>
                <span>昨日：56</span>  <span style={{color:'blue',fontSize:12,marginLeft:30}}> <b>↑ 49.6%</b> </span>
                </div>
                <div className="body1">
                <span>| 退单与售后</span><br/>
                <span style={{fontSize:30,color:'skyblue'}}> <b>无</b> </span><br/>
                <span>昨日：2单</span>  <span style={{color:'blue',fontSize:12,marginLeft:30}}> <b>↓ 200%</b> </span>
                </div>
              
                <Form onSubmit={this.handleSubmit}>
        {formItems}
        <Form.Item {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
            <Icon type="plus" /> Add field
          </Button>
        </Form.Item>
        <Form.Item {...formItemLayoutWithOutLabel}>
          <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>Submit</Button>
        </Form.Item>
      </Form>
      <Alert
      message="Success Tips"
      description="操作成功..!"
      type="success"
      showIcon={true}
      style={{display:this.state.showplay,width:'50%',margin:'0 auto'}}
    />
            </div>
        )
    }
}
export default Form.create()(ContentNav1)
