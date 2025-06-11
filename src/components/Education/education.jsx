import {Box,HStack} from '@chakra-ui/react';
import jntulogo from '../../assets/jntulogo.png';

const Education = () => {
  return (
    <HStack spacing={4} align="center">
      <Box>
        <img
          src={jntulogo}
          alt="JNTU logo"
          style={{ width: '170px', height: '100px', objectFit: 'contain' }}
        />
      </Box>
      <Box>
        <h2>Jawaharlal Nehru Technological University Hyderabad</h2>
        <h3 style={{opacity:0.6}}>Bachelor of Technology in Chemical  Engineering</h3>
        <h3 style={{opacity:0.6}}>Grade:7.0</h3>
      </Box>
    </HStack>
  );
};

export default Education;

