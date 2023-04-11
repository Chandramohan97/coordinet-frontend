//TableDashboard.js component to be used during the 
import React from 'react'
// import './TableDashboard.css'
import { Box, Heading,Flex,Text, Divider, Input,OrderedList,UnorderedList,ListItem,HStack, Link} from '@chakra-ui/react';
import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider,useProSidebar } from 'react-pro-sidebar';
import { useProSidebarContext } from "react-pro-sidebar";
import { ChevronLeftIcon } from "@chakra-ui/icons"

// import 'react-pro-sidebar/dist/css/styles.css';

const SideMenu = () => {

    // const { collapseSidebar } = useProSidebar();
    const [collapsed, setCollapsed ] = React.useState(false);

    const collapseSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
      <div  style={{ display: 'flex', height: '100vh',border:'1px solid' }}>
          <Sidebar width={collapsed ? "0px" : "250px"} collapsed={collapsed} backgroundColor='#191970'>
            <Flex flexDirection={"row"} justifyContent={"space-between"}>
                <Link fontFamily="Inder sans-serif" ml="10px" color="white" 
                fontSize="20px" mt="10px" textDecoration={"none"} _hover={{textDecoration:"none"}} >COORDINET</Link>
                <ChevronLeftIcon _hover={{cursor:"pointer"}} mt="10px" boxSize={"30px"} color={"white"} onClick={()=>setCollapsed(!collapsed)} />
            </Flex>
          </Sidebar>
          <main>
            <button onClick={()=>setCollapsed(!collapsed)}>X</button>
          </main>
        {/* </ProSidebarProvider> */}
      </div>
    
    
  )
}

export default SideMenu;