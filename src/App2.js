import React, { Component } from 'react';
import { Row, Col, Menu, Icon } from 'antd';

// import logo from './logo.svg';
import './styles/App.css';


//AntDesign 
import 'antd/dist/antd.css';
import MenuItem from 'antd/lib/menu/MenuItem';



const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App2 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }


  render() {
    return (
      <Row type="flex" justify="center" >
        <Col span={12}>
          <MyHeader selectedMenu="home"/>
        </Col>
      </Row>


    );
  }
}

class MyHeader extends Component{

  constructor(props){
    super(props);
    this.state = {
      currentItem : props.selectedMenu
    }
    this.handelClick = this.handelClick.bind(this);
  }

  handelClick(e){
    // e.preventDefault();
    this.setState({
      currentItem : e.key
    })

  }

  render(){
    return(
      <Menu mode="horizontal" selectedKeys={[this.state.currentItem]} onClick={this.handelClick}>
        <MenuItem key="home">
          <Icon type="home"/> Home
        </MenuItem>
        <MenuItem key="app">
          <Icon type="appstore"/> Products
        </MenuItem>
        <SubMenu title={<span><Icon type="setting"/>Setting</span>}>
          <MenuItemGroup title="Item 1">
            <MenuItem key="setting:1">Option1</MenuItem>
            <MenuItem key="setting:2">Option2</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <MenuItem key="setting:3">Option3</MenuItem>
            <MenuItem key="setting:4">Option4</MenuItem>
          </MenuItemGroup>
        </SubMenu>
      </Menu>

    );
  }
}

export default App2;
