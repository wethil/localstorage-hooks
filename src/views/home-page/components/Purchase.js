import React, { useState } from 'react';
import Cards from 'react-credit-cards';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

import 'react-credit-cards/lib/styles.scss';

import useLocalStorage from '../../../utilities/useLocalStorage';
import { checkExpDate, getFormattedDate } from '../../../utilities/dateUtils';
import { capitalizeFirstLetter } from '../../../utilities/stringUtils';


function Purchase(props) {
  const [storedCustomer, storeCurrentCustomer] = useLocalStorage('customer', {});
  const [focusedElement, setFocused] = useState('name');

  const { roomInfo: { roomType, roomView }, checkDate } = storedCustomer;

  const formatCardNumber = value => {
    let formattedText = value.replace(/[^\d]/g, '')
      .split(' ')
      .join('');

    if (formattedText.length <= 16) {
      if (formattedText.length > 0) {
        formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
      }
    }
    return formattedText;
  };

  const setFocus = ({ target: { name } }) => {
    setFocused(name);
  };

  const handleChange = (e, inputType) => {
    let error = {
      ...storedCustomer.error
    };

    let format = {};
    let formattedValue = '';
    const { value } = e.target;

    switch (inputType) {
      case 'creditCardNumber':
        formattedValue = formatCardNumber(value);
        break;
      case 'expireDate':

        if (value.split('/').length - 1 > 1) return;
        if (isNaN(value.replace('/', '').replace(/ /g, ''))) return;

        format = checkExpDate(value);
        formattedValue = format.expiryDate;
        formattedValue = value;
        if (format.error) {
          error[inputType] = format.message;
        } else {
          error[inputType] = false;
        }
        break;
      case 'cvc':
        if (value.length > 3) return;
        formattedValue = value;
        break;
      default:
        formattedValue = value;
        break;

    }
    handleStateChange(formattedValue, inputType, error);

  };

  const handleStateChange = (formattedValue, inputType, error) => {
    const paymentData = {
      ...storedCustomer.paymentData,
    };
    paymentData[inputType] = formattedValue;

    storeCurrentCustomer({
      ...storedCustomer,
      paymentData: {
        ...paymentData
      },
      error: {
        ...error
      }
    });

  };

  const { creditCardNumber, expireDate, creditCardHolder, cvc } = storedCustomer.paymentData;

  const validateCard = () => {
    const errors = [];
    let errorText = '';
    if (!creditCardNumber) errors.push('Kredi Kartı');
    if (!expireDate) errors.push('Son kullanma tarihi');
    if (!creditCardHolder) errors.push('Isim Soyisim');
    if (!cvc) errors.push('Güvenlik kodu');
    if (!!errors.length) errorText = `Bu alanları kontrol ediniz. ${errors.join(',')}`;
    if (storedCustomer.error.expireDate && errorText) errorText = `${errorText} - ${storedCustomer.error.expireDate}`;
    return errorText;
  };


  return (
    <form>
      <div className='row'>
        <div className='eleven columns'>
          <Cards
            cvc={cvc}
            placeholders={{ name: 'İsim Soyisim' }}
            expiry={expireDate}
            focused={focusedElement}
            name={creditCardHolder}
            number={creditCardNumber}
          />
        </div>
        <div className='seven columns'>
          <b> Check In: </b> {getFormattedDate('checkIn', checkDate)} -  <b> Check Out: </b> {getFormattedDate('checkOut', checkDate)}
        </div>
        <div className='seven columns'>
          <b> Oda tipi </b> {capitalizeFirstLetter(roomType)}  -
          <b> Oda Manzarası </b> {capitalizeFirstLetter(roomView)}
        </div>
        <div className='seven columns'>
          <label htmlFor='creditCardHolder'>Kart üzerindeki İsim</label>
          <input
            id={'creditCardHolder'}
            name='name'
            type='text'
            className='u-full-width'
            onChange={(e) => handleChange(e, 'creditCardHolder')}
            value={creditCardHolder}
            onFocus={setFocus}
          />
        </div>
        <div className='seven  columns'>
          <label htmlFor='creditCardNumber'>Kredi Kartı Numarası</label>
          <input
            id={'creditCardNumber'}
            name={'number'}
            type='text'
            className='u-full-width'
            maxLength='19'
            onChange={(e) => handleChange(e, 'creditCardNumber')}
            value={creditCardNumber}
            onFocus={setFocus}
          />
        </div>
        <div className='six columns'>
          <div className='four columns' >
            <label htmlFor='cvc'> Güvenlik Kodu </label>
            <input
              id={'cvc'}
              name='cvc'
              className={'cvc'}
              value={cvc}
              onChange={(e) => handleChange(e, 'cvc')}
              placeholder='xxx'
              type='number'
              onFocus={setFocus}
            />
          </div>
          <div className='three columns u-pull-right' >
            <label htmlFor='expireDate'> Valid </label>
            <input
              id={'expireDate'}
              className={'expireDate'}
              value={expireDate}
              onChange={(e) => handleChange(e, 'expireDate')}
              placeholder='--/--'
              maxLength='5'
              type='text'
              name='expiry'
              onFocus={setFocus}
            />
          </div>
        </div>
      </div>
      <div className='row'>
        <button
          className={'nextButton u-pull-left'}
          onClick={(e)=>{
            e.preventDefault();
            props.handleMove('2');
          }}
        >
          Geri
        </button>

        <button
          className={'nextButton u-pull-right'}
          onClick={(e) => {
            e.preventDefault();
            const errorText = validateCard();
            if (!!errorText.length) {
              return MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorText,
                showCloseButton: false,
                showCancelButton: false,
                showConfirmButton: false,
              });
            }
            return MySwal.fire({
              icon: 'success',
              title: 'Başarılı',
              text: 'rezervasyon tamamlandı',
              showCloseButton: false,
              showCancelButton: false,
              showConfirmButton: false,
            });
          }}
        >
          Ileri
        </button>

      </div>
    </form>
  );
}

export default Purchase;

