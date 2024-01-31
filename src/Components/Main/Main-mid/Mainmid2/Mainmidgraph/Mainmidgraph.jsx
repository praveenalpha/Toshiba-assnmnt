import { Container } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import "./Mainmidgraph.css";

const Mainmidgraph = () => {
    return (
        <Container className='main-mid-graph'>
            <div className="main-mid-graph-top">
                <Heading>Growth</Heading>
                <p>year <ChevronDownIcon /></p>
            </div>
        </Container>
    );
}

export default Mainmidgraph;