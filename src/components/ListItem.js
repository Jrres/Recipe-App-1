import * as React from 'react';
import useState from "react"

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';

const CardChoice = (props)=>{
    return(

      <ListItemButton onClick={()=>{
        
        props.state(props.q)
        console.log(props.q)

      }
     
      }>
        <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary={props.text} />
      </ListItemButton>
      

    )
}
export default CardChoice
