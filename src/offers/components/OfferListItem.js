// @flow 

import React from 'react';
import styled from 'styled-components';
import { Grid, TextField, Button, CardMedia, Card, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux';
import { getSession } from '../../authentication/selectors/authenticationSelectors';
import { Medias, Metrics } from '../../main/themes';
import Profile from '../../authentication/domain/Profile';
import Offer from '../domain/Offer';

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
  actions: {
  },
  offer: Offer
}

type State = {
  titleOffer: string,
  descriptionOffer: string,
  domainOffer: string,
  daysOffer: string,
  addressOffer: string,
  imgOffer: string,
}


export class OfferListItem extends React.Component<Props, State> {

  state = {
    titleOffer: this.props.offer.titleOffer,
    descriptionOffer: this.props.offer.descriptionOffer,
    domainOffer: this.props.offer.domainOffer,
    daysOffer: this.props.offer.daysOffer,
    addressOffer: this.props.offer.addressOffer,
    imgOffer: this.props.offer.imgOffer
  }

  render() {
    return (
      <Container>
        <MainArea>

            <Card style={{marginTop: Metrics.spacing.large, width: '300px'}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Offer image card"
                  style={{ height: 125, width: 150, marginLeft: 75 }}
                  image={this.state.imgOffer || 'http://polishlinux.org/wp-content/uploads/2017/11/Preview-2-icon.png'}
                  title="Offer image"
                />
                <CardContent>
                  <div style={{ flexDirection:'row'}}>
                  <Typography gutterBottom variant="h5" component="h2">
                  {this.state.titleOffer}
                  </Typography>
                  </div>
                  <Typography component="p">
                  {this.state.descriptionOffer}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="secondary">
                  Postuler
                </Button>
                <Button size="small" color="secondary">
                  En savoir plus
                </Button>
              </CardActions>
            </Card>

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

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferListItem);