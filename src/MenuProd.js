// import React from 'react';

// import { Button, Tabs, Image, Space } from 'antd';
// import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
// import { Menu, Layout } from 'antd';
// import { useState } from 'react';
// import './App.css';
// const { Header, Content, Footer,Sider } = Layout;
// // function getItem(label, key, icon, children, type) {
// //   return {
// //     key,
// //     icon,
// //     children,
// //     label,
// //     type,
// //   };
// // }
// const items = [
//   // getItem('Navigation One', 'sub1', <MailOutlined />, [
//   //   getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
//   //   getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
//   // ]),
//   // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
//   //   getItem('Option 5', '5'),
//   //   getItem('Option 6', '6'),
//   //   getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
//   // ]),
//   // getItem('Navigation Three', 'sub4', <SettingOutlined />, [
//   //   getItem('Option 9', '9'),
//   //   getItem('Option 10', '10'),
//   //   getItem('Option 11', '11'),
//   //   getItem('Option 12', '12'),
//   // ]),
//   {
//     label: "Getting Started",
//     key: 'item9'

//   },
//   {
//     label: "Notifications",
//     key: 'item10'
//   },
//   {
//     label: "Subscribers",
//     key: 'item11'
//   },
//   {
//     label: "Activity Feed",
//     key: 'item12'
//   },
//   {
//     label: "Integeration Store",
//     key: 'item5'
//   },
//   {
//     label: "Settings",
//     key: 'item13'
//   }
// ];
// const items2 = [
//   // getItem('Navigation One', 'sub1', <MailOutlined />, [
//   //   getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
//   //   getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
//   // ]),
//   // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
//   //   getItem('Option 5', '5'),
//   //   getItem('Option 6', '6'),
//   //   getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
//   // ])
//   {
//     label: "Getting Started",
//     key: 'item1'

//   },
//   {
//     label: "Notifications",
//     key: 'item2'
//   },
//   {
//     label: "Subscribers",
//     key: 'item3'
//   },
//   {
//     label: "Activity Feed",
//     key: 'item4'
//   },
//   {
//     label: "Integeration Store",
//     key: 'item5'
//   },
//   {
//     label: "Settings",
//     key: 'item6'
//   },
//   {
//     label: "Team Members",
//     key: 'item7'
//   },
//   {
//     label: "Changes",
//     key: 'item8'
//   }
//   // {
//   //   label:"what",
//   //   key:'item3'
//   // },

// ];
// const { TabPane } = Tabs;
// // const onChange = (key) => {
// //   console.log(key);
// // };
// const onClick = (e) => {
//   console.log('click', e);
// };
// const Shit = () => {


//   // <Tabs
//   //   onChange={onChange}
//   //   type="card"
//   //   items={new Array(3).fill(null).map((_, i) => {
//   //     const id = String(i + 1);
//   //     return {
//   //       label: `Tab ${id}`,
//   //       key: id,
//   //       children: `Content of Tab Pane ${id}`,
//   //     };
//   //   })}
//   // />

//   const [selectedMenuItem, setSelectedMenuItem] = useState('item1');

//   const componentsSwtich = (key) => {
//     switch (key) {
//       case 'item1':
//         return (<h1>item1</h1>);
//       case 'item2':
//         return (<h1>item2</h1>);
//       case 'item3':
//         return (<h3>item3</h3>);
//       case 'item4':
//         return (<h3>item4</h3>);
//       case 'item5':
//         return (<h3>item5</h3>);
//       case 'item6':
//         return (<h3>item6</h3>);
//       case 'item7':
//         return (<h3>item7</h3>);
//       case 'item8':
//         return (<h3>item8</h3>);
//       case 'item9':
//         return (<h3>item9</h3>);
//       case 'item10':
//         return (<h3>item10</h3>);
//       case 'item11':
//         return (<h3>item11/</h3>);
//       case 'item12':
//         return (<h3>item12/</h3>);
//       case 'item13':
//         return (<><Layout>
//           <Header>Header</Header>
//           <Layout>
//             <Content>Content</Content>
//             <Sider>Sider</Sider>
//           </Layout>
//           <Footer>Footer</Footer>
//         </Layout></>)
//     default:
//         break;
//     }
//   };


//   return (
//     <>
//     {/* <Layout className="layout" style={{ backgroundColor: 'white' }}>
//       <Header>
//         <div className="logo" />
//         <Image
//           width={125}
//           src="https://web.novu.co/static/images/logo-formerly-dark-bg.png"
//         ></Image>
//       </Header>
//     </Layout> */}
      
//       <Tabs size='middle' tabBarStyle={{ width: "50%", color: 'black', backgroundColor: 'white',minHeight:'50px' }}>
//         <TabPane key="110" tab={<div className="foo">Developer</div>} >
//           <Menu

//             style={{
//               width: 256,
//               color: 'black',
//               backgroundColor: 'white'
//             }}
//             mode="vertical"
//             selectedKeys={selectedMenuItem}
//             onClick={(e) =>
//               setSelectedMenuItem(e.key)}
//             items={items2}
//           />
//         </TabPane>

//         <TabPane tab="Production" key="13">
//           <Menu
//             onClick={(e) =>
//               setSelectedMenuItem(e.key)}
//             style={{
//               width: 256,
//               color: 'black',
//               backgroundColor: 'white'
//             }}
//             mode="vertical"
//             items={items}
//           />
//         </TabPane>
//       </Tabs>
//       <Layout>
//       <Content style={{ backgroundColor: 'white', minHeight: '100%' }}>
//         <div>

//           <div>
//             {componentsSwtich(selectedMenuItem)}
//           </div>
//         </div>
//       </Content>

//       <Footer style={{ backgroundColor: 'white', minHeight: '100%' }} />
//     </Layout>
//   </>
//   );
// }
// export default Shit;
import React from "react";
import { Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
const items = [
  {
    label:(<Link to='/Notifications/prod'><h1>Notifications</h1></Link>),
    key: "2001",
  },
  {
    label:(<Link to='/Subscribers'><h1>Subscribers</h1></Link>),
    key: "2002",
  },
  {
    label:(<Link to='/ActivityFeed/prod'><h1>Activity Feed</h1></Link>),
    key: "2003",
  },
  {
    label:(<Link to='/Integrations'><h1>Integrations</h1></Link>),
    key: "2004",
  },
  {
    label:(<Link to='/Settings/prod'><h1>Settings</h1></Link>),
    key: "2005",
  },
  {
    label:(<Link to='/TeamMembers'><h1>Team Members</h1></Link>),
    key: "2006",
  }
];
const MenuProduction = () => {
const [current, setCurrent] = useState("mail");
const onClick = (e) => {
  console.log("click ", e);
  setCurrent(e.key);
};
return (
  <Menu
    onClick={onClick}
    selectedKeys={[current]}
    mode="inline"
    
    items={items}
    style={{backgroundColor:'black',color:'white'}}
  />
);
};
export default MenuProduction;