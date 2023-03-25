import { Flex } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import StaticTable from '../../Components/Table/StaticTable'

const SampleTableDashboard = () => {
  return (
    <div className='sampleTable'>
        <Flex gap="0px" flexDirection={"row"}>
            <Sidebar/>
            <StaticTable/>
        </Flex>
    </div>
  )
}

export default SampleTableDashboard