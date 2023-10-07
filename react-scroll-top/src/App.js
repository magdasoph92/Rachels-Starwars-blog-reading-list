
import { Fragment } from 'react'; 
import ScrollButton from './components/ScrollButton'; 
import { Content, Heading } from './components/Styles'; 
  
function App() { 
  return ( 
    <Fragment> 
      <Heading>GeeksForGeeks</Heading> 
      <Content /> 
      <ScrollButton /> 
    </Fragment> 
  ); 
} 
  
export default App; 
