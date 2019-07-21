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

export const selectMixerChatMessages = createSelector(
  state => state.mixer.chat.data,
  chat => chat.filter(chatEvent => chatEvent.event === 'ChatMessage')
);

export const selectMixerViewerAverage = createSelector(
  state => state.mixer.viewers.data,
  data => data.reduce(
    (a, b) => a + b.authed + b.anon, 0) / getDaysBetween(data.map(({ time }) => time)
  ),
);
