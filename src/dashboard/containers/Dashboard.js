// @flow

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import NavigationBar from '../components/NavigationBar';
import Activities from './Activities';
import Scenes from '../../main/navigation/Scenes';
import LoginScene from '../../authentication/containers/LoginScene';
import { isAuthenticated } from  '../../authentication/selectors/authenticationSelectors'; 
import Sidebar from './Sidebar';
import { Colors } from '../../main/themes';

type Props = {
  authenticated: boolean,
  history: any,
};

const PageRoot = styled.div`
  display: flex;
  flex-flow: column;
  height: 100% !important;
`;

const Header = styled.div`
  flex: 0 1 auto;
`;

const StyledContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
`;

const StyledContent = styled.div`
  flex: 1;
  background-color: ${Colors.primaryBackground};
`;

const StyledSidebarContainer = styled(Grid)`
  overflow: auto;
  z-index:200;
  box-shadow: 2px 0 3px rgba(0,0,0,0.12);
  min-width: 315px !important;
`;
export const Dashboard = ({ authenticated }: Props) => {
  return (
    <BrowserRouter>
      {!authenticated ?
        <LoginScene />
        :
        <PageRoot>
          <Header>
            <NavigationBar />
          </Header>

          <StyledContainer id="main-container">
            <StyledSidebarContainer>
              <Sidebar />
            </StyledSidebarContainer>

            <StyledContent id="content">

              <Switch>
                <Route component={Activities} exact path={Scenes.Dashboard} />
              </Switch>
            </StyledContent>
          </StyledContainer>
        </PageRoot>
      }
    </BrowserRouter>
  );
};

const mapStateToProps = (state: any) => {
  return {
    authenticated: isAuthenticated(state),
  };
};

export default connect(mapStateToProps)(Dashboard);