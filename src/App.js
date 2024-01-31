import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import Main from './Components/Main/Main';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        
        <Grid
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          gridTemplateRows={'0px 1fr 0px'}
          gridTemplateColumns={'20rem 1fr'}
          h='100vh'
          gap='1'
          color='blackAlpha.700'
          fontWeight='bold'
        >
          <GridItem pl='2' bg='#F5F5F5' area={'nav'}>
            <Nav />
          </GridItem>

          <GridItem pl='2' bg='#F5F5F5' area={'main'}>
            <Main />
          </GridItem>
        </Grid>
      </div>
    </ChakraProvider>
  );
}

export default App;
