// @flow

import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'; 
import { Medias } from '../../../main/themes';
import { getSession } from '../../../authentication/selectors/authenticationSelectors';
import Profile from '../../../authentication/domain/Profile';
import { Avatar } from '@material-ui/core';

const Container = styled(Grid)`
  display: flex !important;
  width: 100% !important;
  height: 100% !important;
  flex-grow: 1 !important;
  align-self: stretch !important;

  ${Medias.xs} {
    flex-direction: column-reverse !important;
  }
  ${Medias.md} {
    flex-direction: row !important;
  }
`;

const StyledAvatar = styled(Avatar)`
width: 40px !important;
height: 40px !important;
align-items: center !important;
`;

const MainArea = styled.div`
  display: flex !important;
  height: 100% !important;
  justify-content: space-between !important;
  align-self: stretch !important;
  flex-direction: column !important;
  flex-grow: 1 !important;
`;


type Props = {
  session: Profile,
}

type State = {}

export class ProfileItem extends React.Component<Props, State> {

  state = {}
  render() {
    return (
      <Container>
        <MainArea>

            <Grid container style={{ height: '725px', backgroundColor: 'white'}}>
                <StyledAvatar src={this.props.session.imgUser}/>
            </Grid>

        </MainArea>
      </Container>
    );
  }

}

const mapStateToProps = (state: any) => {
  return {
    session: getSession(state),
  };
};

export default connect(mapStateToProps)(ProfileItem);