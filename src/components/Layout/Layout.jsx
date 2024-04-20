import Container from "@mui/material/Container";
import { Routing } from "../../Routing";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Routing />
      </Container>
    </>
  );
};

export default Layout;
