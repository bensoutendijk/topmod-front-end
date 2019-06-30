import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function ModList(props) {
  const { moderators, chatters, chat } = props;

  const getSentMessages = (mod) => {
    return chat.filter((chatEvent) => {
      return chatEvent.event === 'ChatMessage' && chatEvent.data.user_id === mod.id;
    });
  }

  const getDeleteMessages = (mod) => {
    return chat.filter((chatEvent) => {
      return chatEvent.event === 'DeleteMessage' && chatEvent.data.moderator.user_id === mod.id;
    });
  }

  return (
    <React.Fragment>
      {moderators.map((mod) => {
        const active = chatters.find((chatter) => {
          return mod.id === chatter.userId;
        });
        return <TableRow key={mod.id}>
          {
            active
            ?<TableCell style={{color: 'green'}}>{mod.username}</TableCell>
            :<TableCell>{mod.username}</TableCell>
          }
          <TableCell>{getSentMessages(mod).length}</TableCell>
          <TableCell>{getDeleteMessages(mod).length}</TableCell>
        </TableRow>
      })}
    </React.Fragment>
  )
}

export default ModList;