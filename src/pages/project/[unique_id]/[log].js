import { useRouter } from 'next/router';
import NavBar from "../../../components/layout/navBar";
import DisplayLog from "../../../components/project/log/displayLog";
import {Flex} from "@chakra-ui/react";

const LogPage = () => {
    const router = useRouter();
    const {unique_id, log} = router.query;

    return (
        <Flex direction={"column"} h={"100vh"} w={"100vw"}>
            <NavBar/>
            <DisplayLog unique_id={unique_id} log_name={log}/>
        </Flex>
    );
}

export default LogPage;