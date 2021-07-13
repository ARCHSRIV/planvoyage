import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  Onetimepassword,
  ChangePasswordScreen,
  SelectEventType,
  CorporateWhen,
  CorporateWhere,
  CorporateHowmany,
  Ballpark,
  BallparkProgElements,
  CorporateEventSchedule,
  CorporateEventSchedule2,
  CorporateEventSchedule3
} from './screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    Onetimepassword,
    ChangePasswordScreen,
    SelectEventType,
    CorporateWhen,
    CorporateWhere,
    CorporateHowmany,
    Ballpark,
    BallparkProgElements,
    CorporateEventSchedule,
    CorporateEventSchedule2,
    CorporateEventSchedule3
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
