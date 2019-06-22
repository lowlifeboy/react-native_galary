import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import { PHOTOS_GALARY_HOME, PHOTOS_GALARY_DETAILS } from '../../constants/routes'

export default createStackNavigator(
  {
    [PHOTOS_GALARY_HOME]: HomeScreen
  },
  {
    headerMode: 'none'
  }
)