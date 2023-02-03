import React from 'react'

function router() {
  return (
    <Router>
      <Layout style={{ height: "100vh"}}>
        <Content>
          <Layout
            style={{

              // background: colorBgContainer,
            }}
          >
            <Sider
              
              style={{
                background: colorBgContainer,
                border: "2px solid black",
                borderRadius: "10px",
                // backgroundColor:'#51E1ED',
                
              }}
              width={220}
              className='sidstyle'
            >
            <div className="sidstyles">
              <Tabs size="middle" style={{backgroundColor:'aqua',}}>
                <item key="110" tab="Development">
                  <MenuDevelopment />
                </item>
                <item tab="Production" key="13">
                  <MenuProduction />
                </item>
              </Tabs>
            </div>
              {/* <SiderCheckbox /> */}
            </Sider>
            {/* <div className="sidstyle"> */}
            <Content
              style={{
                
                minHeight: "800px",
                // border: "2px solid black",
                backgroundColor:'black',
                width:'100vw',
                borderRadius: "10px",
                marginLeft: "0px",
              }}
              
            >
              <Routes>
                <Route
                  path="/"
                  element={<h1 style={{ padding: "10px 10px" ,color:'white' }}>Content</h1>}
                />
                <Route
                  path="/Notifications/dev"
                  element={<h1 style={{ padding: "10px 10px",color:'white' }}>Notifications:dev</h1>}
                />
                <Route
                  path="/Notifications/prod"
                  element={<h1 style={{ padding: "10px 10px",color:'white' }}>Notifications:prod</h1>}
                />
                <Route
                  path="/Subscribers"
                  element={<h1 style={{ padding: "10px 10px",color:'white' }}>Subscribers</h1>}
                />
                <Route
                  path="/ActivityFeed/dev"
                  element={<h1 style={{ padding: "10px 10px" ,color:'white'}}>Activity Feed:dev</h1>}
                />
                <Route
                  path="/ActivityFeed/prod"
                  element={<h1 style={{ padding: "10px 10px",color:'white'}}>Activity Feed</h1>}
                />
                <Route
                  path="/Integrations"
                  element={<h1 style={{ padding: "10px 10px",color:'white' }}>Integrations</h1>}
                />
                <Route
                  path="/Settings/prod"
                  element={<h1 style={{ padding: "10px 10px",color:'white' }}>Settings</h1>}
                />
                <Route
                  path="/TeamMembers"
                  element={<>
                  <Space style={{padding:'30px',backgroundColor:'black'}}>
                  <Card title="Pie chart" style={{width:'700px',height:'700px'}}><MyPieChart/></Card>
                  </Space>
                  <Space style={{padding:'30px',backgroundColor:'black'}}>
                    <Card title="line chart"style={{width:'700px',height:'700px'}}>
                      <DemoLine/>
                    </Card>
                  </Space>
                  {/* <Space style={{padding:'30px'}}>
                    <Card style={{width:'500px'}} title="3rd card"><DemoBar/></Card>
                  </Space>
                  <Space> */}
                  {/* <Card title="4th card"style={{width:'500px'}}><MyPieChart/></Card>
                  </Space> */}
                  
            
                  </>}
                />
                <Route
                  path="/Changes"
                  element={<h1 style={{ padding: "10px 10px" }}><MyPieChart/></h1>}
                />
                <Route
                 path="/Settings/dev"
                 element={<h1>this is the dev changes</h1>}
                 />
                 <Route
                 path="/Subscribers/All"
                 element={<h1>these are all the subscribers</h1>}
                 />
                 <Route
                 path="/Subscribers/Pro"
                 element={<h1>these are all the pro subscribers of the app</h1>}
                 />
              </Routes>
            </Content>
            {/* </div> */}
          </Layout>
        </Content>
        
        
      </Layout>
    </Router>
  )
}

export default router