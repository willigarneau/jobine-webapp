// @flow

import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import Popover from '@material-ui/core/Popover';
import { Avatar } from '@material-ui/core';
import LogoutButton from '../../authentication/containers/LogoutButton';
import { Metrics } from '../../main/themes';

type Props = {
  session: Session,
  status: string,
};

type State = {
  anchorEl: any,
};

const UserInfo = styled(Grid)`
  &:hover {
    cursor: pointer !important;
  }
`;

class NavigationBarUser extends React.Component<Props, State> {

  state = {
    anchorEl: null,
  };

  handleClick = (event: any) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  close = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Grid container spacing={16}>
          <Grid item>
            <Avatar alt="Unknown contact avatar">#</Avatar>
          </Grid>

          <UserInfo item onClick={this.handleClick}>
            <Typography>{`William Garneau`}</Typography>
            <Typography>{'En ligne'}</Typography>
          </UserInfo>
          <Popover
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            id="simple-popper"
            onClose={this.close}
            open={open}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <div style={{ padding: Metrics.spacing.medium }}>
              <LogoutButton />
            </div>
          </Popover>
        </Grid>
      </div>
    );
  }

}

export default NavigationBarUser;