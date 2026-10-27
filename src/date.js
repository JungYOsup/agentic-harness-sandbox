import dayjs from 'dayjs';

/** Date를 받아 'YYYY-MM-DD' 문자열을 만든다 */
export function formatDate(date) {
  return dayjs(date).format('YYYY-MM-DD');
}
