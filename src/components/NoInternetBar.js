import React from 'react'
import {
  Animated,
  NetInfo,
  Text,
  View
} from 'react-native'

import {connect} from 'react-redux'
import {ui} from '../actions/'

class NoInternetBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bottom: new Animated.Value(-36)
    }
  } 
  componentDidMount() {
    NetInfo.isConnected.fetch().then(this.parseConnection);
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.parseConnection
    );
  }
  componentWillUnmount(){
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.parseConnection
    );
  }
  parseConnection = (connected) => {
    if(connected)
      this.props.hideNoInternet()
    else
      this.props.showNoInternet()
  }
  shouldComponentUpdate(nextProps) {
    return this.props.statusText != nextProps.statusText
  }
  componentWillReceiveProps(nextProps) {
    this.animate(nextProps.statusText)
  }
  animate = (statusText) => {
    console.log("NEXT ANIM")
    const toValue = statusText?0:-36
    Animated.timing(this.state.bottom, {toValue}).start()
  }
  render () {
    return (
      <Animated.View style={[{
        position: 'absolute',
        bottom: this.state.bottom,
        left: 0,
        right: 0,
        backgroundColor: '#303030',
        alignItems: 'center',
        justifyContent: 'center',
        height: 36}]} >
        <Text style={{color: '#fff'}}>{this.props.statusText}</Text>
      </Animated.View>
    )
  }
}

export default connect(
  state => ({
    statusText: state.ui.internetStatus,
  }),
  dispatch => ({
    showNoInternet: () => dispatch(ui.showNoInternet()),
    hideNoInternet: () => dispatch(ui.hideNoInternet())
  })
)(NoInternetBar)