import { Select, Stack } from '@chakra-ui/react';

const SelectTime = ({ setHour, setMinutes }) => {
    let hourList = [];

    let minutesList = [];

    for (let i = 0; i < 24; i += 1) {
        let hour = i > 9 ? `${i}` : `0${i}`;
        hourList.push(
            <option key={i} value={hour}>
                {hour}
            </option>
        );
    }

    for (let i = 0; i < 60; i += 1) {
        let minute = i > 9 ? `${i}` : `0${i}`;
        minutesList.push(
            <option key={i} value={minute}>
                {minute}
            </option>
        );
    }

    return (
        <>
            <Stack direction={'row'} spacing={2}>
                <Select
                    variant={'filled'}
                    placeholder={'Select Hour'}
                    onChange={(e) => setHour(e.target.value)}
                >
                    {hourList}
                </Select>
                <Select
                    variant={'filled'}
                    placeholder={'Select Minutes'}
                    onChange={(e) => setMinutes(e.target.value)}
                >
                    {minutesList}
                </Select>
            </Stack>
        </>
    );
};

export default SelectTime;
