import React, { useState } from 'react';
import {
  Box, VStack, Link, Text, Flex, Icon, Collapse,
  Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
  useDisclosure, IconButton, useBreakpointValue
} from '@chakra-ui/react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiHome, FiPieChart, FiUsers, FiTrendingUp, FiMenu } from 'react-icons/fi';

const SidebarLink = ({ icon, children, href, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    _hover={{
      bg: 'inherit',
      color: 'inherit',
    }}
    px={2}
    py={3}
    fontSize="sm"
    fontWeight="medium"
    display="flex"
    alignItems="center"
    width="100%"
  >
    {icon && <Icon as={icon} mr={3} />}
    {children}
  </Link>
);


const SidebarContent = () => {
  const textShortner = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };
  return (
    <VStack spacing={6} align="stretch" className='poppins-regular' mt={8}>
      <Box px={2}>
        <Text fontSize="xl" fontWeight="bold">Your Logo</Text>
      </Box>
      <VStack spacing={1} align="stretch" className='n'>
        <SidebarLink href="/" icon={FiHome}>Home</SidebarLink>
        <SidebarLink href={"/dashboard"}>
          <Flex
            as="button"

            align="center"
            justify="space-between"
            py={0}
            px={0}
            w="full"
            fontWeight="medium"
            cursor="pointer"
            // _hover={{ bg: '', color: '' }}
          >
            <Flex align="center">
              <Icon as={FiPieChart} mr={3} />
           <Text fontWeight={"normal"}>   Dashboard</Text>
            </Flex>
          </Flex>
     
        </SidebarLink>
        <SidebarLink href="/projects" icon={FiTrendingUp}>Projects</SidebarLink>
        <SidebarLink href="/team" icon={FiUsers}>Team</SidebarLink>
      </VStack>
    </VStack>
  );
};

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {isMobile && (
        <IconButton
          icon={<FiMenu />}
          onClick={onOpen}
          position="fixed"
          top={4}
          left={4}
          zIndex="overlay"
        />
      )}
      <Box
        as="nav"
        pos={isMobile ? 'fixed' : 'sticky'}
        top="0"
        left="0"
        zIndex="sticky"
        h="100vh"
        pb="10"
        overflowX="hidden"
        overflowY="auto"
        bg="#FEF8F5"
        borderColor="blackAlpha.300"
        borderRightWidth="1px"
        w={isMobile ? "0" : "280px"}
        color="#F68821"
pl={isMobile ? 0 :4}
        transition="0.3s"
      >
        {!isMobile && <SidebarContent />}
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent bg="#FEF8F5">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;