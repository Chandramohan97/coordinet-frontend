import { Drawer, DrawerOverlay, DrawerContent, Button, DrawerCloseButton, DrawerHeader, DrawerBody,Box,Flex } from "@chakra-ui/react"
import { useState } from "react"
import { Icon } from "@chakra-ui/react"
import { FaHome } from "react-icons/fa"
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)

  return (
    <>
      <Button onClick={onOpen}>Open Sidebar</Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent bg="#191970">
          <DrawerCloseButton />
          <Box mt="100px">
            {/* <Flex flexDirection={"row"}> */}
                <Icon as={FaHome} fill="white" />
                <DrawerHeader color={"white"} ><p>Home</p>
                </DrawerHeader>
                {/* </Flex> */}
          <hr></hr>
          

          <DrawerBody color="white" >
            <p>Project Dashboard</p>
          </DrawerBody>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default Sidebar;