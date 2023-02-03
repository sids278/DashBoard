import React from "react";
import { Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import MyPieChart from "./Pie";
import './App.css'
const items = [
  {
    label:(<Link to='/'><h1>Getting Started</h1></Link>),
    key: "1001",
  },
  {
    label:(<Link to='/Notifications/dev'><h1>Notifications</h1></Link>),
    key: "1002",
  },
  {
    label:(<Link style={{color:"white"}}to='/Subscribers'><h1>Subscribers</h1></Link>),
    key: "1003",
    
    children:[
        {
            label: (<Link to='/Subscribers/All'><h1>Normie Subs</h1></Link>),
            key: 'setting:1',
          },
          {
            label: (<Link to='/Subscribers/Pro'><h1>Pro Subs</h1></Link>),
            key: 'setting:2',
          },
    ]
  },
  {
    label:(<Link to='/ActivityFeed/dev'><h1>Activity Feed</h1></Link>),
    key: "1004",
  },
  {
    label:(<Link to='/Integrations'><h1>Integrations</h1></Link>),
    key: "1005",
  },
  {
    label:(<Link to='/Settings/dev'><h1>Settings</h1></Link>),
    key: "1006",
  },
  {
    label:(<Link to='/TeamMembers'><h1>Team Members</h1></Link>),
    key: "1007",
  },
  {
    label:(<Link to='/Changes'><h1>Changes</h1></Link>),
    key: "1008",
  },
];
const MenuDevelopment = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div className="sidstyles">
    <Menu
      onClick={onClick}
      
      selectedKeys={[current]}
      mode="inline"
      items={items}
      style={{backgroundColor:'black',color:'white'}}
    />
    </div>
  );
};
export default MenuDevelopment;