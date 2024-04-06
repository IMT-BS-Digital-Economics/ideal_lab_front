import NavBar from '../components/layout/navBar';
import Repositories from "../components/repositories";
import {Flex} from "@chakra-ui/react";

const RepositoriesPage = () => {
  return (
      <Flex direction={"column"} h={"100vh"} w={"100vw"}>
        <NavBar />
        <Repositories/>
      </Flex>
  );
};

export default RepositoriesPage;
