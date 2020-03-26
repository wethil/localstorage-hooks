import React, { useState, useEffect, useRef } from 'react';
import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import parseJSON from 'date-fns/parseJSON';

import { DateUtils } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import useLocalStorage from '../../../utilities/useLocalStorage';

import './style.scss';
import 'react-day-picker/lib/style.css';

const MySwal = withReactContent(Swal);


export default function DateTab(props) {
  const checkOutInput = useRef(null);
  const [storedCustomer, storeCurrentCustomer] = useLocalStorage('customer');
  const { checkDate } = storedCustomer;

  const getRelatedDate = key => checkDate[key] ? parseJSON(checkDate[key]) : undefined;

  const [checkIn, setCheckIn] = useState(getRelatedDate('checkIn'));
  const [checkOut, setCheckOut] = useState(getRelatedDate('checkOut'));

  useEffect(() => {
    const diffMonths = differenceInCalendarMonths(checkOut, checkIn);
    if (diffMonths && !isNaN(diffMonths) && diffMonths < 2 && checkOutInput) {
      checkOutInput.current.getDayPicker().showMonth(checkOut);
    }
  }, [checkIn]);

  const modifiers = { start: checkIn, end: checkOut };
  const FORMAT = 'dd/MM/yyyy';
  return (
    <div className='tabWrapper'>
      <div className='InputFromTo'>
        <DayPickerInput
          value={checkIn}
          placeholder='From'
          format={FORMAT}
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [checkIn, { checkIn, checkOut }],
            disabledDays: { after: checkOut },
            toMonth: checkOut,
            modifiers,
            numberOfMonths: 2,
            onDayClick: () => checkOutInput.current.getInput().focus(),
          }}
          onDayChange={setCheckIn}
        />{' '}
        —{' '}
        <span className='InputFromTo-to'>
          <DayPickerInput
            ref={checkOutInput}
            value={checkOut}
            placeholder='To'
            format={FORMAT}
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [checkIn, { checkIn, checkOut }],
              disabledDays: { before: checkIn },
              modifiers,
              month: checkIn,
              fromMonth: checkIn,
              numberOfMonths: 2,
            }}
            onDayChange={setCheckOut}
          />
        </span>
      </div>
      <button
        className={'nextButtonOnDateTab'}
        onClick={() => {
          if (!checkIn || !checkOut) {
            return MySwal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Lütfen tarihleri kontrol edin',
              showCloseButton: false,
              showCancelButton: false,
              showConfirmButton: false,
            });
          }
          storeCurrentCustomer({
            ...storedCustomer,
            checkDate: { checkIn, checkOut }
          });
          props.handleMove('2');
        }}

      >
        Ileri
      </button>
    </div>
  );
}


function parseDate(str, format, locale = 'en') {
  const dateStr = parseJSON(str);
  const parsed = dateFnsParse(dateStr, format, new Date(), { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}
