/**
 * Buddy-tab component for the project, Check-In, that presents the view with
 * which the user checks information about buddies.
 *
 * @author Michael David Gill <michaelgill1969@gmail.com>
 * @license
 * Copyright 2019 Cryonics Institute
 *
 * This file is part of Check-In.
 *
 * Check-In is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * Check-In is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * Check-In.  If not, see <https://www.gnu.org/licenses/>.
 */

// @flow
import * as React from 'react'
import { ActivityIndicator, StatusBar, View } from 'react-native'
import { Text } from 'react-native-elements'
import { connect, useSelector } from 'react-redux'
import moment from 'moment'
import { setListener } from '../redux/ActionThunks'
import { styles } from '../styles/Styles'

type ComponentProps = {
  buddyAlertIsActive: boolean,
  buddyEmail: string,
  buddyIsAdded: boolean,
  setListener: (email: string) => number
}

const mapStateToProps = state => {
  return {
    buddyAlertIsActive: state.buddy.alertIsActive,
    buddyEmail: state.buddy.email,
    buddyIsAdded: state.buddy.isAdded
  }
}

const mapDispatchToProps = dispatch => (
  { setListener: (email: string) => dispatch(setListener(email)) }
)

// TODO: The prop, buddyAlertIsActive, is currently undefined in Redux or anywhere
// else.  This view will never be shown.
function RenderActiveAlertView () {
  const checkinTime: string = useSelector(state => state.buddy.checkinTime)
  const lastAlertTime: string = useSelector(state => state.buddy.lastAlertTime)

  const [lastAlertTimeMoment: string, setLastAlertTimeMoment] =
    React.useState('')

  React.useEffect(
    () => {
      const currentLastAlertTime: string = moment(lastAlertTime).toISOString()
      setLastAlertTimeMoment(
        moment()
          .startOf('date')
          .add(
            (((((parseInt(currentLastAlertTime.slice(-13, -11), 10) * 60) +
              parseInt(currentLastAlertTime.slice(-10, -8), 10)) * 60) +
              parseInt(currentLastAlertTime.slice(-7, -5), 10)) * 1000) +
              parseInt(currentLastAlertTime.slice(-4, -1), 10),
            'milliseconds'
          )
          .add(moment().utcOffset(), 'minutes')
      )
    },
    [lastAlertTime]
  )

  return (
    <View style = { styles.containerCentered }>
      <Text h1 style = { styles.title }>ALERT</Text>
      <Text style = { styles.paragraph }>
        The member should have {'\n'}
        checked in at { moment(lastAlertTimeMoment).format('h:mm A') }.
      </Text>
      <Text h4 style = { styles.title }>Check-In Time</Text>
      <Text style = { styles.text }>
        { moment(checkinTime).format('dddd, MMMM D, YYYY, h:mm A') }
      </Text>
    </View>
  )
}

function RenderNullBuddyStatusView () {
  return (
    <View style = { styles.containerCentered }>
      <Text h4 style = { styles.title }>
        Retrieving Buddy Data
      </Text>
      <ActivityIndicator />
      <StatusBar barStyle='default' />
    </View>
  )
}

function RenderSignedInBuddyView () {
  const checkinTime: string = useSelector(state => state.buddy.checkinTime)

  return (
    <View style = { styles.containerCentered }>
      <Text h4 style = { styles.title }>Check-In Time</Text>
      <Text style = { styles.text }>
        { moment(checkinTime).format('dddd, MMMM D, YYYY, h:mm A') }
      </Text>
    </View>
  )
}

function RenderSignedOutBuddyView () {
  const buddyEmail: string = useSelector(state => state.buddy.email)

  return (
    <View style = { styles.containerCentered }>
      <Text h4 style = { styles.paragraph }>
        The buddy with e-mail
        {'\n'}
        { buddyEmail }
        {'\n'}
        is not signed in.
      </Text>
    </View>
  )
}

// TODO: What happens if the network is down?
class Buddy extends React.Component<ComponentProps> {
  componentDidMount () {
    if (this.props.buddyEmail !== null) {
      this.props.setListener(this.props.buddyEmail)
    }
  }

  render () {
    if (this.props.buddyIsAdded == null) {
      return (
        <RenderNullBuddyStatusView/>
      )
    } else if (this.props.buddyIsAdded && !this.props.buddyAlertIsActive) {
      return (
        <RenderSignedInBuddyView/>
      )
    } else if (this.props.buddyIsAdded && this.props.buddyAlertIsActive) {
      return (
        <RenderActiveAlertView/>
      )
    } else {
      return (
        <RenderSignedOutBuddyView/>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buddy)
