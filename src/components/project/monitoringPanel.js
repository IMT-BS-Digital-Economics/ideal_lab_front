import { Grid, GridItem } from '@chakra-ui/react';
import TriggerAutoLaunch from './update/triggerAutoLaunch';
import UploadFile from './update/uploadFile';
import CreateDirectory from './update/createDirectory';
import DisplayAllLogs from './BoxParameter/dynamicContent/displayAllLogs';
import EditableArguments from './BoxParameter/dynamicContent/editableArguments';
import BoxParameter from './BoxParameter';
import StaticVal from './BoxParameter/dynamicContent/staticVal';
import BoxParams from '../../constant/boxParams';
import EditableAutoStartTime from './BoxParameter/dynamicContent/editableAutoStartTime';

const MonitoringPanel = ({ project, unique_id }) => {
    return (
        <>
            <Grid
                w={'100%'}
                templateRows={'repeat(10, 1fr)'}
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    xl: 'repeat(10, 1fr)',
                }}
                gap={4}
                h={'65vh'}
                overflowY={{ base: 'scroll', xl: 'none' }}
            >
                <GridItem
                    rowSpan={{ base: 1, xl: 3 }}
                    colSpan={{ base: 1, xl: 3 }}
                    bg={'white'}
                    borderRadius={'lg'}
                    boxShadow={'lg'}
                    padding={'1em'}
                >
                    {project.data && project.data.repository && (
                        <BoxParameter
                            name={BoxParams.repository.name}
                            description={BoxParams.repository.description}
                            Content={
                                <StaticVal value={project.data.repository} />
                            }
                        />
                    )}
                </GridItem>
                <GridItem
                    rowSpan={{ base: 1, xl: 3 }}
                    colSpan={{ base: 1, xl: 3 }}
                    bg={'white'}
                    borderRadius={'lg'}
                    boxShadow={'lg'}
                    padding={'1em'}
                >
                    {project.data && project.data.repository && (
                        <BoxParameter
                            name={BoxParams.arguments.name}
                            description={BoxParams.arguments.description}
                            Content={
                                <EditableArguments
                                    unique_id={unique_id}
                                    value={project.data.arguments}
                                />
                            }
                        />
                    )}
                </GridItem>
                <GridItem
                    rowSpan={{ base: 1, xl: 6 }}
                    colSpan={{ base: 1, xl: 2 }}
                    bg={'white'}
                    borderRadius={'lg'}
                    boxShadow={'lg'}
                    padding={'1em'}
                >
                    {project.data && project.data.start_time && (
                        <BoxParameter
                            name={BoxParams.autoTimeStart.name}
                            description={BoxParams.autoTimeStart.description}
                            Content={
                                <EditableAutoStartTime
                                    unique_id={unique_id}
                                    value={project.data.start_time}
                                />
                            }
                        />
                    )}
                </GridItem>
                <GridItem
                    rowSpan={{ base: 1, xl: 6 }}
                    colSpan={{ base: 1, xl: 2 }}
                    bg={'white'}
                    borderRadius={'lg'}
                    boxShadow={'lg'}
                    padding={'1em'}
                >
                    {project.data && project.data.auto_launch !== undefined && (
                        <BoxParameter
                            name={BoxParams.AutoStart.name}
                            description={BoxParams.AutoStart.description}
                            Content={
                                <TriggerAutoLaunch
                                    unique_id={unique_id}
                                    auto_launch={project.data.auto_launch}
                                />
                            }
                        />
                    )}
                </GridItem>
                <GridItem
                    rowSpan={{ base: 1, xl: 3 }}
                    colSpan={{ base: 1, xl: 3 }}
                    bg={'white'}
                    borderRadius={'lg'}
                    boxShadow={'lg'}
                    padding={'1em'}
                >
                    {project.data && project.data.executable && (
                        <BoxParameter
                            name={BoxParams.executable.name}
                            description={BoxParams.executable.description}
                            Content={
                                <StaticVal value={project.data.executable} />
                            }
                        />
                    )}
                </GridItem>
                <GridItem
                    rowSpan={{ base: 1, xl: 3 }}
                    colSpan={{ base: 1, xl: 3 }}
                    bg={'white'}
                    borderRadius={'lg'}
                    boxShadow={'lg'}
                    padding={'1em'}
                >
                    {project.data && (
                        <BoxParameter
                            name={BoxParams.createDirectory.name}
                            description={BoxParams.createDirectory.description}
                            Content={<CreateDirectory unique_id={unique_id} />}
                        />
                    )}
                </GridItem>
                <GridItem
                    rowSpan={{ base: 1, xl: 4 }}
                    colSpan={{ base: 1, xl: 4 }}
                    bg={'white'}
                    borderRadius={'lg'}
                    boxShadow={'lg'}
                    padding={'1em'}
                >
                    {project.data && (
                        <BoxParameter
                            name={BoxParams.logs.name}
                            description={BoxParams.logs.description}
                            Content={<DisplayAllLogs unique_id={unique_id} />}
                        />
                    )}
                </GridItem>
                <GridItem
                    rowSpan={{ base: 1, xl: 4 }}
                    colSpan={{ base: 1, xl: 6 }}
                    bg={'white'}
                    borderRadius={'lg'}
                    boxShadow={'lg'}
                    padding={'1em'}
                >
                    {project.data && (
                        <BoxParameter
                            name={BoxParams.uploadFile.name}
                            description={BoxParams.uploadFile.description}
                            Content={<UploadFile unique_id={unique_id} />}
                        />
                    )}
                </GridItem>
            </Grid>
        </>
    );
};

export default MonitoringPanel;
