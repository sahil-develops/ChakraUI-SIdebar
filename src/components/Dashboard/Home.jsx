
import React from 'react';
import {
  Box, VStack, Link, Text, Flex, Icon,ChakraProvider,
  CircularProgress,
  CircularProgressLabel
} from '@chakra-ui/react';
import { CiSettings } from "react-icons/ci";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Sidebar from '../Sidebar';





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

function Home() {
  return (
    <ChakraProvider>
      <Flex>
        <Box  p="4" className='mainApp'>
        <div className='mainDivApp'>
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
                {/* <img src='/donut.png' className='donut-sidebar' /> */}
                <CircularProgress value={85} size={"90px"} borderRadius={"10px"}  className='poppins-regular' color='#EC6F7E'>
  <CircularProgressLabel fontSize={"sm"} color={"#999999"} ><span className='spanDonut' >30</span>/<span>35</span></CircularProgressLabel>
</CircularProgress>
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


                  <Text fontWeight={"normal"} fontSize={"sm"} className='poppins-regular'>Customer Segmentation</Text>

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


                  <Text fontWeight={"normal"} fontSize={"sm"} className='poppins-regular'>Competitive Landscape</Text>


                    <Text fontSize="xs" ml="auto" bg={"#F68821"} color={"white"} p={"5px"} rounded={"4px"} >4.5/7</Text>
                  </Flex>
                </div>
                <Text color={"black"}  fontSize={"xs"} fontWeight={"normal"} py={"8px"} pr={"8px"} >Thorough, though more detailed trend analysis could enhance it.</Text>
           <hr className='basic-hr' />     
</div>
              </SidebarLink>
            </VStack>
        </div>
          {/* Your main content goes here */}
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default Home;