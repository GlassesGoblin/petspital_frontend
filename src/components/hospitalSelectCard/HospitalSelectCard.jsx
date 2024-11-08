import React from 'react';
import { Card, Text } from '@chakra-ui/react';

const HospitalSelectCard = ({ hospital, isSelected, onSelect }) => {
  return (
    <Card.Root
      onClick={onSelect}
      bg={isSelected ? 'gray.100' : 'white'}
      cursor="pointer"
      h='100px'
      w='400px'
    >
        <Card.Body>
            <Text fontWeight="bold">{hospital.hospitalName}</Text>
            <Text>{hospital.hospitalAddress}</Text>
        </Card.Body>
    </Card.Root>
  );
};

export default HospitalSelectCard;