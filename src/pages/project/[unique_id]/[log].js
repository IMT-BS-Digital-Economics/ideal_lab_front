import { useRouter } from 'next/router';
import NavBar from "../../../components/layout/navBar";
import DisplayLog from "../../../components/project/log/displayLog";

const LogPage = () => {
    const router = useRouter();
    const {unique_id, log} = router.query;

    return (
        <>
            <NavBar/>
            <DisplayLog unique_id={unique_id} log_name={log}/>
        </>
    );
}

export default LogPage;