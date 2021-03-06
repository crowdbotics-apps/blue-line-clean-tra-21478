import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile142016Navigator from '../features/UserProfile142016/navigator';
import Tutorial142015Navigator from '../features/Tutorial142015/navigator';
import NotificationList141987Navigator from '../features/NotificationList141987/navigator';
import Settings141986Navigator from '../features/Settings141986/navigator';
import Settings141978Navigator from '../features/Settings141978/navigator';
import UserProfile141976Navigator from '../features/UserProfile141976/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile142016: { screen: UserProfile142016Navigator },
Tutorial142015: { screen: Tutorial142015Navigator },
NotificationList141987: { screen: NotificationList141987Navigator },
Settings141986: { screen: Settings141986Navigator },
Settings141978: { screen: Settings141978Navigator },
UserProfile141976: { screen: UserProfile141976Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
