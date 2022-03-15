import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function ProfileInfo() {
  return (
    <Flex alignItems="center" justifyContent="center"  flexDir="column" h="100%">
      <Text fontSize="5xl" fontFamily="mono">Your Name</Text>
      <Text fontSize="2xl" fontFamily="mono">Your Therapist</Text>
      
    </Flex>
  )
}

export default ProfileInfo