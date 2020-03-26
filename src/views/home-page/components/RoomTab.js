import React, { useState } from 'react';
import useLocalStorage from '../../../utilities/useLocalStorage';
import { getFormattedDate } from '../../../utilities/dateUtils';
import { capitalizeFirstLetter } from '../../../utilities/stringUtils';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function RoomTab(props) {
  const [storedCustomer, storeCurrentCustomer] = useLocalStorage('customer');
  const { roomInfo } = storedCustomer;

  const [roomType, setRoomType] = useState(roomInfo.roomType);
  const [roomView, setRoomView] = useState(roomInfo.roomView);

  const { checkDate } = storedCustomer;

  const handleSelections = (value, selectionType) => {

    if (selectionType === 'roomType') setRoomType(value);
    if (selectionType === 'roomView') setRoomView(value);
  };

  return (
    <div className='tabWrapper'>
      <div className='twelve columns centered'>
        <b> Check In: </b> {getFormattedDate('checkIn', checkDate)} -  <b> Check Out: </b> {getFormattedDate('checkOut', checkDate)}
      </div>
      <div className='twelve columns centered roomOptions '>
        <div className='option' >  Oda tipi:  </div>
        <div className='selection'>
          {
            ['standart', 'deluxe', 'suit'].map((t, index) =>
              <CheckBoxControl
                key={index}
                index={index}
                value={t}
                onCheck={handleSelections}
                checked={t === roomType}
                option={'roomType'}
              />
            )
          }
        </div>
      </div>
      <div className='twelve columns centered roomOptions'>
        <div className='option'> Manzara Seçimi: </div>
        <div className='selection' >
          {
            ['deniz', 'kara'].map((v, index) =>
              <CheckBoxControl
                key={index}
                index={index}
                value={v}
                onCheck={handleSelections}
                checked={v === roomView}
                option={'roomView'}
              />
            )
          }
        </div>
      </div>
      <div className='row'>
        <button
          className={'nextButton u-pull-left'}
          onClick={() => {
            props.handleMove('1');
          }}
        >
          Geri
        </button>

        <button
          className={'nextButton u-pull-right'}
          onClick={()=>{
            let warning = 'Lütfen bunları seçtiğinizden emin olun: ';
            const errors = [];
            if (!roomType) errors.push('Oda türü');
            if (!roomView) errors.push('Oda manzarası');
            warning = `${warning} ${errors.join(',')}`;
            if (!!errors.length) {
              return MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: warning,
                showCloseButton: false,
                showCancelButton: false,
                showConfirmButton: false,
              });
            }
            storeCurrentCustomer({
              ...storedCustomer,
              roomInfo: {
                roomType, roomView
              }
            });
            props.handleMove('3');
          }}
        >
          Ileri
        </button>

      </div>
    </div>
  );
}

function CheckBoxControl({ value, checked, onCheck, index, option }) {
  const label = value;
  return (
    <div
      className='checkBoxWrapper'
      onClick={() => onCheck(value, option)}
      onKeyDown={() => onCheck(value, option)}
      role='button'
      tabIndex={index}
    >
      {capitalizeFirstLetter(label)}
      <input
        checked={checked}
        value={value}
        type='radio'
        name={option}
      />
      <span className='checkbox'></span>
    </div>
  );
}
