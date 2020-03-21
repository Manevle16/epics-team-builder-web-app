import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SetupPage from './widgets/SetupPage/containers/SetupPageContainer';
import TeamBuilderPage from './widgets/TeamBuilderPage/containers/TeamBuilderPageContainer';

export default class EpicsTeamBuilder extends React.Component {
  constructor() {
    super();
    this.state = {
      showSetupPage: false
    };
  }

  switchToTeamBuilder = () => {
    this.setState({ showSetupPage: false });
  };

  render() {
    return (
      <Provider store={store}>
        <div className='epics-team-builder'>
          <div className='gray-background' />
          {this.state.showSetupPage ? (
            <SetupPage switchToTeamBuilder={this.switchToTeamBuilder} />
          ) : (
            <TeamBuilderPage />
          )}
        </div>
      </Provider>
    );
  }
}
