import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  BarChartOutlined,
  CreditCardFilled,
} from "@ant-design/icons";
import OrderCreationForm from "../OrderCreationForm/OrderCreationForm";
import "./Dashboard.css";
import BarChart from "./../BarChart/BarChart";
import OrderStats from "./../OrderStats/OrderStats";
import HomePage from "../HomePage/HomePage";

const { Sider, Content } = Layout;

function Dashboard() {
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");
  const [selectedTimeRange, setSelectedTimeRange] = useState(null);

  const handleMenuClick = ({ key }) => {
    setSelectedMenuItem(key);
  };

  return (
    <Layout className="dashboard">
      <Sider width={200} theme="dark" collapsible className="sider">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="vertical"
          selectedKeys={[selectedMenuItem]}
          onClick={handleMenuClick}
          className="menu"
        >
          <Menu.Item key="1" icon={<DesktopOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<CreditCardFilled />}>
            Create Order
          </Menu.Item>
          <Menu.Item key="3" icon={<BarChartOutlined />}>
            View Orders
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <header>
          <h1 className="main-heading">Star Bakery Analytics</h1>
          <p className="sub-heading">
            Indulge in Celestial Confections: Our Online Star Bakery
          </p>
        </header>
        <Content className="content">
          {selectedMenuItem === "1" && <HomePage />}
          {selectedMenuItem === "2" && <OrderCreationForm />}
          {selectedMenuItem === "3" && (
            <>
              <BarChart timeRange={selectedTimeRange} className='bar-block' />
              <OrderStats className='order-block' />
            </>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}
export default Dashboard;
