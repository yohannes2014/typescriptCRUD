import React from 'react';
import { Container} from 'react-bootstrap';
import AppRoutes from './routes/Routes';
import Header from './component/Header';
const App:React.FC = () => {

  return (
    <Container fluid="lg">
      <Header />
      <AppRoutes />
    </Container>
  );
}

export default App;