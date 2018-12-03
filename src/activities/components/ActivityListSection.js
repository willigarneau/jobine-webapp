// @flow

import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import TitledDivider from '../../main/components/TitledDivider';
import { Metrics } from '../../main/themes';
import OfferListItem from '../../offers/components/OfferListItem';
import { getMessages } from '../../chat/selector/chatSelector';

const StyledTitledDivider = styled(TitledDivider)`
  margin-top: ${Metrics.spacing.medium}px;
  margin-bottom: ${Metrics.spacing.large}px;
`;

type Props = {
  activities: any,
  tab: string;
}
export class ActivityListSection extends React.Component<Props> {
  render() {
    console.log('activity list section', this.props.messages);
    return (
      <React.Fragment>
        <Grid item xs={12} style={{  marginLeft:'15px', marginRight:'50px' }}>
          <StyledTitledDivider id="sectionTitle" title={this.props.tab === 'recents' ? "Fil d'actualité" : "Fil des messages"} />
        </Grid>
        {console.log('test', this.props.activities)}
        {this.props.activities && this.props.activities.map(a =>
              <div key={a.idOffer}>
                {this.props.tab === 'recents' ?
                  <div style={{ marginLeft: '100px', alignSelf:'center', justifyContent:'space-between', color: 'blue' }}>
                    <OfferListItem offer={a}/>
                  </div>
                :
                  <Typography key={a.idMsg} style={{ marginLeft: '60px', alignSelf:'center', justifyContent:'space-between', color: 'blue' }}>{a.contentMsg}</Typography>
                }
              </div>
        )}
      </React.Fragment>
    );
  }
};

function mapStateToProps(state) {
  return {
    messages: getMessages(state),
  };
}



export default connect(mapStateToProps)(ActivityListSection);