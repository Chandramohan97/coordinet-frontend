import React from 'react'
import { Flex, HStack ,VStack,Box} from '@chakra-ui/react'
import RadioInputForm from '../../Components/RadioInputForm/RadioInputForm'
import CustomButton from '../../Components/button/CustomButton'
const TeamStrength = () => {
  return (
  <form>
    <Flex flexDirection={"column"}>
        <HStack>
                <VStack>
                    <RadioInputForm value="1"></RadioInputForm>
                    <RadioInputForm value="11-20 employees"></RadioInputForm>
                    <RadioInputForm value="31-40 employees"></RadioInputForm>
                    <RadioInputForm value="51-60 employees"></RadioInputForm>
                </VStack>

                <VStack>
                    <RadioInputForm value="2-10 employees"></RadioInputForm>
                    <RadioInputForm value="21-30 employees"></RadioInputForm>
                    <RadioInputForm value="41-50 employees"></RadioInputForm>
                    <RadioInputForm value="61-70 employees"></RadioInputForm>
                </VStack>
        </HStack>
        <Box position={"relative"} left="-13.5vw">
            <CustomButton color="white"
                height="5vh"
                width="8vw"
                bg="#31bfc8"
                _hover={{ bg: "#2a9ca1" }} //blue-green
                _active={{ bg: "#555555" }}
                textAlign="center"
                fontSize="16px"
                margin="30px 10px"
                borderRadius="5px"
                value="Next"
                />
        </Box>
    </Flex>

    </form> 
  )
}

export default TeamStrength