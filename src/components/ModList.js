import React from 'react';

function ModList(props) {
  const { moderators, chatters } = props;
  return moderators.map((mod) => {
    const active = chatters.find((chatter) => {
      return mod.id === chatter.userId;
    });
    if (active) {
      return <tr style={{color: 'green'}}>{mod.username}</tr>
    }
    return <tr>{mod.username}</tr>
  });
}

export default ModList;