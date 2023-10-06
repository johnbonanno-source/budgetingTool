import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const today = dayjs();
const oneYear = dayjs().add(1, 'year');

const DatePickerComponent = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        onChange={props.onChange}
        defaultValue={today}
        maxDate={oneYear}
        views={['year', 'month', 'day']}
        sx={{
          '& .MuiInputBase-root': {
            height: '2rem',
            backgroundColor: 'inherit',
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
