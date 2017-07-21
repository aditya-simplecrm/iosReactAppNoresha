
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Drawer } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';

import { closeDrawer } from './actions/drawer';

import Login from './components/login/';
import Home from './components/home/';
import BlankPage from './components/blankPage';
import SideBar from './components/sideBar';
import Leads from './components/leads';
import Calls from './components/calls';
import Meetings from './components/meetings';
import Tasks from './components/tasks';
import LeadsDetailView from './components/leads/detailView.js';
import LeadsEditView from './components/leads/editView.js';
import LeadsInlineedit from './components/leads/inlineedit.js';
import CallsDetailView from './components/calls/detailView.js';
import Maps from './components/location';

import { statusBarColor } from './themes/base-theme';


const RouterWithRedux = connect()(Router);

class AppNavigator extends Component {

  static propTypes = {
    drawerState: React.PropTypes.string,
    closeDrawer: React.PropTypes.func,
  }


  componentDidUpdate() {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer._root.close();
    }
  }


  openDrawer() {
    this._drawer._root.open();
  }   

  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer();
    }
  }

  _renderScene(props) { // eslint-disable-line class-methods-use-this
    switch (props.scene.route.key) {
      case 'login':
        return <Login />;
      case 'home':
        return <Home />;
      case 'blankPage':
        return <BlankPage />;
      case 'leads':
        return <Leads />;
      case 'callsedit':
        return <Calls />;
      case 'meetingsedit':
        return <Meetings />;
      case 'tasksedit':
        return <Tasks />;
        case 'leadsDetailView':
        return <LeadsDetailView />;
      case 'leadsEditView':
        return <LeadsEditView />;
    case 'callsdetailview':
        return <CallsDetailView />; 
    case 'leadsinlinedit':
        return <LeadsInlineedit />;
      case 'location':
        return <Maps />;
      default :
        return <Login />;
    }
  }

  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        type="overlay"
        tweenDuration={150}
        content={<SideBar />}
        tapToClose
        acceptPan={false}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        styles={{
          drawer: {
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
          },
        }}
        tweenHandler={(ratio) => {  //eslint-disable-line
          return {
            drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
            main: {
              opacity: (2 - ratio) / 2,
            },
          };
        }}
        negotiatePan
      >
        <StatusBar
          backgroundColor={statusBarColor}
          barStyle="default"
        />
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="login" component={Login} hideNavBar initial />
            <Scene key="home" component={Home} />
            <Scene key="blankPage" component={BlankPage} />
            <Scene key="leads" component={Leads} />
            <Scene key="callsedit" component={Calls} />
            <Scene key="meetingsedit" component={Meetings} />
            <Scene key="tasksedit" component={Tasks} />
             <Scene key="leadsDetailView" component={LeadsDetailView} />
            <Scene key="leadsEditView" component={LeadsEditView} />
            <Scene key="callsdetailview" component={CallsDetailView} />
            <Scene key="leadsinlinedit" component={LeadsInlineedit} />
            <Scene key="location" component={Maps} />
          </Scene>
        </RouterWithRedux>
      </Drawer>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
