import { format } from 'date-fns';
import parseJSON from 'date-fns/parseJSON';

export const FORMAT = 'dd/MM/yyyy';


const ERROR_TEXT__INVALID_EXPIRY_DATE = 'Hatalı tarih';
const ERROR_TEXT__MONTH_OUT_OF_RANGE = 'Lütfen son kullanım için doğru ayı giriniz';
const ERROR_TEXT__YEAR_OUT_OF_RANGE = 'SKT bu yıldan önce olamaz';
const ERROR_TEXT__DATE_OUT_OF_RANGE = 'SKT bu tarihten önce olamaz';

const EXPIRY_DATE_REGEX = /^(\d{2})\/(\d{4}|\d{2})$/;
const MONTH_REGEX = /(0[1-9]|1[0-2])/;

export const checkExpDate = (expiryDate) => {
  const splitDate = expiryDate.split('/');
  if (!EXPIRY_DATE_REGEX.test(expiryDate)) {
    return { error: true, message: ERROR_TEXT__INVALID_EXPIRY_DATE, expiryDate };
  }

  const expiryMonth = splitDate[0];
  if (!MONTH_REGEX.test(expiryMonth)) {
    return { error: true, message: ERROR_TEXT__MONTH_OUT_OF_RANGE, expiryDate };
  }

  const expiryYear = splitDate[1];
  let date = new Date();
  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth() + 1;
  currentYear = parseInt(
    expiryYear.length === 4 ? currentYear : currentYear.toString().substr(-2),
    10
  );
  if (currentYear > parseInt(expiryYear, 10)) {
    return { error: true, message: ERROR_TEXT__YEAR_OUT_OF_RANGE, expiryDate };
  }

  if (
    parseInt(expiryYear, 10) === currentYear &&
    parseInt(expiryMonth, 10) < currentMonth
  ) {
    return { error: true, message: ERROR_TEXT__DATE_OUT_OF_RANGE, expiryDate };
  }

  return { error: false, expiryDate };
};

export const getFormattedDate = (key, checkDate) =>
  checkDate[key] ? format(parseJSON(checkDate[key]), FORMAT) : undefined;
