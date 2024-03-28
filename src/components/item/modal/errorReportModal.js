import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Stack
} from "@chakra-ui/react";

const ErrorReportModal = (props) => {
    return (
        <Modal
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Errors Reports</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Stack spacing={"6"}>
                        {props.children}
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default ErrorReportModal;