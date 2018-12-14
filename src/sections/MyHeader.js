import React, { Component } from 'react';
import { Menu, Icon} from 'antd';
import { Link } from 'react-router-dom';
import MenuItem from 'antd/lib/menu/MenuItem';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class MyHeader extends Component{

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
            <Link to="/"><Icon type="home"/> Home</Link>
          </MenuItem>
          <MenuItem key="app">
            <Icon type="appstore"/> Products
          </MenuItem>
          <SubMenu title={<span><Icon type="setting"/>Setting</span>}>
            <MenuItemGroup title="Item 1">
              <MenuItem key="morepage:about"><Link to="/about">About Page</Link></MenuItem>
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