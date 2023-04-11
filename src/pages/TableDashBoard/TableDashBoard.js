//TableDashBoard.js to view data in Tabular form.
import React from 'react'
import SideMenu from '../../Components/SideMenu/SideMenu'
import { Flex } from '@chakra-ui/react'
import TableBoard from '../../Components/TableBoard/TableBoard'

const TableDashBoard = () => {
  return (
    
    <Flex flexDirection={"row"} gap="0vw">
        <SideMenu/>
        <TableBoard />
    </Flex>
  )
}

export default TableDashBoard