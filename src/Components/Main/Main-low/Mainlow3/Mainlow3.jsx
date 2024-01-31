import { Heading } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, PlusSquareIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import "./Mainlow3.css";

const Mainlow3 = () => {
    return (
        <div className="main-low-3">
            <Heading color={'black'} className="main-low-3-head">New Deals</Heading>
            <Wrap spacing='1rem' align='center'>
                <WrapItem>
                    <Center w='6rem' h='2rem' bg='#FFF7E8' color={"#734A00"}>
                        <PlusSquareIcon /> Fruit2Go
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w='6rem' h='2rem' bg='#FFF7E8' color={"#734A00"}>
                        <PlusSquareIcon /> CCNT
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w='8rem' h='2rem' bg='#FFF7E8' color={"#734A00"}>
                        <PlusSquareIcon /> Marshals MKT
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w='10rem' h='2rem' bg='#FFF7E8' color={"#734A00"}>
                        <PlusSquareIcon /> Little Brazil Vegan
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w='12rem' h='2rem' bg='#FFF7E8' color={"#734A00"}>
                        <PlusSquareIcon /> Joana Mini-market
                    </Center>
                </WrapItem>
            </Wrap>
        </div>
    );
}

export default Mainlow3;