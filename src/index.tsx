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
  CorporateEventSchedule3,
  CorporateEventSchedule4,
  CorporateEventSchedule5,
  CorporateEventSchedule6,
  CorporateEventSchedule7,
  CorporateEventSchedule8,
  CorporateEventSchedule9,
  CorporateEventSchedule10
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
    CorporateEventSchedule3,
    CorporateEventSchedule4,
    CorporateEventSchedule5,
    CorporateEventSchedule6,
    CorporateEventSchedule7,
    CorporateEventSchedule8,
    CorporateEventSchedule9,
    CorporateEventSchedule10
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
