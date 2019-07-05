import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function ChatList(props) {
  const { chat } = props;
  console.log(chat);
  return chat.map((chatMessage) => {
    const { data: { user_name, message: { message } } } = chatMessage;
    return (
      <TableRow>
        <TableCell>{user_name}</TableCell>
        <TableCell>{message.map((messageFragment) => {
          return messageFragment.text;
        })}</TableCell>
      </TableRow>
    )
  })
}

export default ChatList;
