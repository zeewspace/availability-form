import { DateTime } from 'luxon';

export function convertLocalTimeToUTC(times) {
  const { timezone, days } = times;

  const horarioUTC = {
    timezone: 'UTC',
    days: days.map(day => {
      const timesUTC = day.times.map(time => {
        const startUTC = DateTime.fromFormat(time.start, 'HH:mm', { zone: timezone }).toUTC().toFormat('HH:mm');
        const endUTC = DateTime.fromFormat(time.end, 'HH:mm', { zone: timezone }).toUTC().toFormat('HH:mm');

        return { start: startUTC, end: endUTC };
      });

      return { day: day.day, times: timesUTC };
    }),
  };

  return horarioUTC;
}