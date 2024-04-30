const BoxParams = {
    repository: {
        name: 'Repository',
        description:
            'This is the repository used to create your project. You cannot edit this',
    },
    executable: {
        name: 'Executable',
        description:
            "Each time you will run your project this will be the executable to use. It's the starting point of your project. You cannot edit this",
    },
    arguments: {
        name: 'Arguments',
        description:
            'If necessary you can pass arguments to be used at runtime. If implemented in the repository executable, they can change parameters for runtime. You can add or delete arguments',
    },
    createDirectory: {
        name: 'Create directory',
        description:
            "If you need to add folders to your project you can ! It will create a folder at the path you want like './my/path'",
    },
    uploadFile: {
        name: 'Upload file',
        description:
            'To upload file (only .csv or .xlsx). You can define the path to store your file and upload them. One at a time',
    },
    autoTimeStart: {
        name: 'Auto Start Time',
        description:
            'If you want your project to run completely autonomously, you can ! You can edit this variable to choose the time to start each day the project',
    },
    AutoStart: {
        name: 'Auto Start',
        description:
            "Trigger this button to ensure that the auto-start is activated. If it's activated your project will run autonomously each day at the fixed Auto Start Time",
    },
    logs: {
        name: 'Latest logs',
        description:
            'Here is a list of logs for each time your project has been running.',
    },
};

export default BoxParams;
