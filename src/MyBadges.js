import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';


const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


  const classes = useStyles();

export class MyBadges extends Component {
    
    render() {
       
        return (
            <div className={classes.root}>
            <Badge badgeContent={4} color="primary">
              <MailIcon />
            </Badge>
            <Badge badgeContent={10} color="secondary">
              <MailIcon />
            </Badge>
            <IconButton aria-label="4 pending messages">
              <Badge badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
            </IconButton>
          </div>
        )

        
    }
}

export default MyBadges
