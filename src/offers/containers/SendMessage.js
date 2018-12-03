// @flow

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSession } from '../../authentication/selectors/authenticationSelectors';
import { getChatUser } from '../../offers/selectors/offerSelector';
import TextField from '@material-ui/core/TextField';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';
import { Metrics, Colors } from '../../main/themes';

const ChatInputContainer = styled.div`
  display: flex !important;
  height: 45px !important;
  width: 100% !important;
  min-height: 45px !important;
  border-top: 1px solid ${Colors.divider};
  align-items: center important;
  padding-top: ${Metrics.spacing.small}px !important;
  padding-left: ${Metrics.spacing.small}px !important;
  padding-right: ${Metrics.spacing.small}px important; 
`;

const TextFieldContainer = styled.div`
  display: flex !important;
  flex-grow: 1 !important;
`;

const AttachFileContainer = styled.div`
  display: flex;
  padding-left: ${Metrics.spacing.small}px;
  padding-right: ${Metrics.spacing.small}px;
  padding-top: ${Metrics.spacing.tiny}px;
`;

type Props = {
}
type State = {
  message: string,
  sending: boolean,
}
export class SendMessage extends React.Component<Props, State> {

  state = {
    message: '',
    sending: false,
  };

  reset = () => this.setState({ message: '' });

  sendMessage() {
      this.setState({ message: '', sending: true });
  }

  userPressedKey = (key: string) => {
    console.log('user pressed key');
    if (key === 'Enter') {
      this.sendMessage();
    }
  }

  render() {

    return (
      <ChatInputContainer style={{ backgroundColor: Colors.highlightedBackground}} >
        <TextFieldContainer>
          <TextField
            fullWidth
            id="messageTextField"
            onChange={(event)=> this.setState({ message: event.target.value })}
            onKeyPress={(event) => this.userPressedKey(event.key)}
            placeholder={'Vous pouvez entrer un message'}
            value={this.state.message}
          />
        </TextFieldContainer>

        <AttachFileContainer>
          <AttachFileIcon id="attachFileButton" />
        </AttachFileContainer>

        <AttachFileContainer>
          <SendIcon id="sendButton" onClick={() => this.sendMessage()} type="submit" />
        </AttachFileContainer>

      </ChatInputContainer>
    );
  }

}

const mapStateToProps = (state: any) => {
  return {
    session: getSession(state),
    chatUser: getChatUser(state),
  };
};

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
    }, dispatch),
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(SendMessage);