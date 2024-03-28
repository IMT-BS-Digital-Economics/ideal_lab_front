import {
    Button,
    Fade,
    FormControl,
    FormLabel,
    Input,
    Stack
} from "@chakra-ui/react";
import {useState} from "react";
import hookCreateUser from "../../hooks/admin/hookCreateUser";

const UserForm = ({onClose}) => {
    const [userEmail, setUserEmail] = useState();
    const [userName, setUserName] = useState();
    const [passWord, setPassWord] = useState();

    const [isSubmit, setIsSubmit] = useState(false);

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show)

    const handleInputChange = (e, setter) => {
        setter(e.target.value)
    }

    const isValidForm = () => userEmail && userName && passWord
    
    hookCreateUser({userEmail, userName, passWord, isSubmit, setIsSubmit})

    return (
        <Stack spacing={"3%"} direction={"column"}>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder={"Email"}
                    type={"email"}
                    value={userEmail}
                    onChange={(e) => handleInputChange(e, setUserEmail)}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                    placeholder={"Username"}
                    value={userName}
                    onChange={(e) => handleInputChange(e, setUserName)}
                    m={"1%"}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                    placeholder={"Password"}
                    type={show ? 'text' : 'password'}
                    value={passWord}
                    onChange={(e) => handleInputChange(e, setPassWord)}
                    m={"1%"}
                />
            </FormControl>
            <Fade in={isValidForm()}>
                <Button
                    color={"cyan.700"}
                    size={"lg"}
                    w={"100%"}
                    isLoading={isSubmit}
                    loadingText={"Submitting"}
                    onClick={() => {
                        setIsSubmit(true)
                        onClose();
                    }}
                    m={"1%"}
                >
                    Submit
                </Button>
            </Fade>
        </Stack>
    );
}

export default UserForm;