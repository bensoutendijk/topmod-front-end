import { createSelector } from 'reselect';

const getDaysBetween = (dateArray) => {
  if (!dateArray.length) {
    return 1;
  }

  const dateFrom = dateArray[0];
  const dateTo = dateArray.slice(-1)[0];
  const diff = new Date(dateTo).getTime() - new Date(dateFrom).getTime();

  return diff / (1000 * 60 * 60 * 24);
};

const mapDataToDays = (data) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const res = [];
  const dataOverTime = data.map(a => ({
    x: new Date(a.time).getDay(),
    y: a.anon + a.authed,
  }));
  for (let i = 0; i < days.length; i += 1) {
    let count = 0;
    let reduce = 0;
    for (let j = 0; j < dataOverTime.length; j += 1) {
      const a = dataOverTime[j];
      if (a.x === i) {
        reduce += a.y;
        count += 1;
      }
    }
    res.push(reduce / count);
  }
  return res;
};

const selectMixerViewerData = state => state.mixer.viewers.data;

export const selectMixerViewerAverage = createSelector(
  state => state.mixer.viewers.data,
  data => (
    data.reduce((a, b) => a + b.authed + b.anon, 0)
  ) / (
    data.length
  ),
);

export const selectMixerViewersOverTime = createSelector(
  selectMixerViewerData,
  data => mapDataToDays(data),
);
