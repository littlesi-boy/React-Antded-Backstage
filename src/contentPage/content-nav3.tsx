import { Transfer, Switch } from 'antd';
import * as React from 'react';
import { Upload, Icon, message } from 'antd';
import { string } from 'prop-types';

const mockData = [];
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }
  
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

const oriTargetKeys = mockData
  .filter(item => +item.key % 3 > 1)
  .map(item => item.key);
 export default class ContentNav extends React.Component<any> {
  public  state = {
      targetKeys: oriTargetKeys,
      selectedKeys: [],
      disabled: false,
      loading: false,
      imageUrl: null
    }
  public  handle = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl => this.setState({
            imageUrl,
            loading: false,
          }));
        }
      }
  public  handleChange = (nextTargetKeys, direction, moveKeys) => {
      this.setState({ targetKeys: nextTargetKeys });
  
      console.log('targetKeys: ', nextTargetKeys);
      console.log('direction: ', direction);
      console.log('moveKeys: ', moveKeys);
    }
  
 public   handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
      this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });
  
      console.log('sourceSelectedKeys: ', sourceSelectedKeys);
      console.log('targetSelectedKeys: ', targetSelectedKeys);
    }
  
  public  handleScroll = (direction, e) => {
      console.log('direction:', direction);
      console.log('target:', e.target);
    }
  
 public   handleDisable = (disabled) => {
      this.setState({ disabled });
    };
 public   render() {
        const { targetKeys, selectedKeys, disabled } = this.state;
        const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
            </div>
          );
          const imageUrl = this.state.imageUrl;
        return (
          <div style={{display:this.props.show.isShow3}}>
            <Transfer
              dataSource={mockData}
              titles={['Source', 'Target']}
              targetKeys={targetKeys}
              selectedKeys={selectedKeys}
              onChange={this.handleChange}
              onSelectChange={this.handleSelectChange}
              onScroll={this.handleScroll}
              render={item => item.title}
              disabled={disabled}
            />
            <Switch
              unCheckedChildren="disabled"
              checkedChildren="disabled"
              checked={disabled}
              onChange={this.handleDisable}
              style={{ marginTop: 16 }}
            />
             <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="//jsonplaceholder.typicode.com/posts/"
        beforeUpload={beforeUpload}
        onChange={this.handle}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
      </Upload>
          </div>
        );
      }
    }
      