import React, { useState } from 'react';
import {
  Box, VStack, Link, Text, Flex, Icon, Collapse,
  Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
  useDisclosure, IconButton, useBreakpointValue
} from '@chakra-ui/react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiHome, FiPieChart, FiUsers, FiTrendingUp, FiMenu } from 'react-icons/fi';
import { CiSettings } from "react-icons/ci";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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

const generatePDF = () => {
    const content = document.getElementById('pdf-content');
  
    html2canvas(content, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const scale = Math.min(pdfWidth / canvasWidth, pdfHeight / canvasHeight);
  
      const scaledWidth = canvasWidth * scale;
      const scaledHeight = canvasHeight * scale;
  
      pdf.addImage(imgData, 'PNG', 0, 0, scaledWidth, scaledHeight);
      pdf.save('dashboard_report.pdf');
    });
  };
const SidebarContent = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
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
        <Box>
          <Flex
            as="button"
            onClick={() => setIsDashboardOpen(!isDashboardOpen)}
            align="center"
            justify="space-between"
            py={3}
            px={2}
            w="full"
            fontWeight="medium"
            cursor="pointer"
            // _hover={{ bg: '', color: '' }}
          >
            <Flex align="center">
              <Icon as={FiPieChart} mr={3} />
           <Text fontWeight={"normal"}>   Dashboard</Text>
            </Flex>
            <Icon as={isDashboardOpen ? FaChevronUp : FaChevronDown} size={10} />
          </Flex>
          <Collapse in={isDashboardOpen}>
            <VStack align="stretch" pl={2} mt={1} mb={4}>
              <div className='donut-mainDiv'>
                <img src='/download.png' className='download-icon' />
                <div className='secondary-Div-Donut'>
                  <Text fontSize="sm" pr={0} fontWeight="medium" className='poppins-regular' color="black">Lorem ipsum dolor sir amet, consectuter</Text>
                  <button className='button-styling poppins-regular' onClick={generatePDF}>Download Draft</button>
                </div>
              </div>
            </VStack>   
            <VStack align="stretch" id="pdf-content" pl={2} mt={1} mb={2} className='no-hover no-gap'>
              <div className='donut-mainDiv'>
                <img src='/donut.png' className='donut-sidebar' />
                <div className='secondary-Div-Donut'>
                  <Text fontSize="sm" pl={2} fontWeight="normal" className='poppins-regular' color="black">Overall Score</Text>
                  <Text fontSize="lg" pl={2} pt={2} fontWeight="medium" className='poppins-regular' color="black">Excellent</Text>
                </div>
              </div>
              <Box pl={3}>
                <Text fontSize="sm" className='poppins-regular' fontWeight="normal" lineHeight={"1.3rem"} color="black" pr={5} mb={2}>
                  This section is strong and presents a compelling case to potential investors, but there are areas for improvement to maximize its impact.
                </Text>
              </Box>
              <SidebarLink href="/market-analysis" >
<div className='divContainer no-hover' >

                <div className='maindivdetails'>
                  <CiSettings size={28} color='#C01F27' style={{paddingRight:"5px"}}/>
                  <Flex flexDirection="row" flex={1}>


                  <Text fontWeight={"normal"} fontSize={"sm"} className='poppins-regular'>Market Analysis</Text>


                    <Text fontSize="xs" ml="auto" bg={"#F68821"} color={"white"} p={"5px"} rounded={"4px"} >4.5/7</Text>
                  </Flex>
                </div>
                <Text color={"black"} fontSize={"xs"} fontWeight={"normal"} py={"8px"} pr={"8px"} >Thorough, though more detailed trend analysis could enhance it.</Text>
           <hr className='basic-hr' />     
</div>
              </SidebarLink>
              <SidebarLink href="/customer-segmentation">
<div className='divContainer'>

                <div className='maindivdetails'>
                  <CiSettings size={28} color='#C01F27' style={{paddingRight:"5px"}}/>
                  <Flex flexDirection="row" flex={1}>


                  <Text fontWeight={"normal"} fontSize={"sm"} className='poppins-regular'>Customer Segm..</Text>

                    <Text fontSize="xs" ml="auto" bg={"#F68821"} color={"white"} p={"5px"} rounded={"4px"} >4.5/7</Text>
                  </Flex>
                </div>
                <Text color={"black"} fontSize={"xs"} fontWeight={"normal"} py={"8px"} pr={"8px"} >
                Well-defined and aligned with strategic
                objectives.
                </Text>
           <hr className='basic-hr' />     
</div>
              </SidebarLink>
              <SidebarLink href="/market-analysis">
<div className='divContainer'>

                <div className='maindivdetails'>
                  <CiSettings size={28} color='#C01F27' style={{paddingRight:"5px"}}/>
                  <Flex flexDirection="row" flex={1} justifyContent={'center'} alignItems={'center'}>


                  <Text fontWeight={"normal"} fontSize={"sm"} className='poppins-regular'>Competitive Land..</Text>


                    <Text fontSize="xs" ml="auto" bg={"#F68821"} color={"white"} p={"5px"} rounded={"4px"} >4.5/7</Text>
                  </Flex>
                </div>
                <Text color={"black"}  fontSize={"xs"} fontWeight={"normal"} py={"8px"} pr={"8px"} >Thorough, though more detailed trend analysis could enhance it.</Text>
           <hr className='basic-hr' />     
</div>
              </SidebarLink>
            </VStack>
          </Collapse>
        </Box>
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
        className='no-scroll-bar'
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