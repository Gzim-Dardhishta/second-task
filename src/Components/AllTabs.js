import React from 'react'
import { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from '@zendeskgarden/react-tabs';
import Domains from './Domains/Domains';
import WebHosting from './WebHosting/WebHosting';
import DedicatedServer from './DedicatedServers/DedicatedServer';
import VirtualCloud from './VirtualCloudServers/VirtualCloud';
import Wordpress from './WordPressHosting/Wordpress';
import Emails from './EmailHosting/Emails';
import VPS from './VPS-HostingServer/VPS';
import FreeHosting from './FreeHosting/FreeHosting';

function AllTabs() {

    const [selectedTab, setSelectedTab] = useState('domain');

  return (
    <div>
        <Tabs selectedItem={selectedTab} onChange={setSelectedTab}>
            <TabList className='tab-list'>
                <Tab item='domain'>Domain</Tab>
                <Tab item='web-hosting'>Web Hosting</Tab>
                <Tab item='dedicated-servers'>Dedicated Servers</Tab>
                <Tab item='virtual-cloud'>Virtual Cloud Servers</Tab>
                <Tab item='wordpress'>WordPress Hosting</Tab>
                <Tab item='email'>Email hosting</Tab>
                <Tab item='vps'>VPS Hosting Servers</Tab>
                <Tab item='free-hosting'>Free Hosting</Tab>
            </TabList>

            <TabPanel item='domain'>
                <Domains />
            </TabPanel>

            <TabPanel item='web-hosting'>
                <WebHosting />
            </TabPanel>

            <TabPanel item='dedicated-servers'>
                <DedicatedServer />
            </TabPanel>

            <TabPanel item='virtual-cloud'>
                <VirtualCloud />
            </TabPanel>

            <TabPanel item='wordpress'>
                <Wordpress />
            </TabPanel>

            <TabPanel item='email'>
                <Emails />
            </TabPanel>

            <TabPanel item='vps'>
                <VPS />
            </TabPanel>

            <TabPanel item='free-hosting'>
                <FreeHosting />
            </TabPanel>
        </Tabs>
    </div>
  )
}

export default AllTabs;