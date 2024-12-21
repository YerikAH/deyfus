import {
  HomeIcon,
  ViewfinderCircleIcon,
  ArchiveBoxIcon,
} from 'react-native-heroicons/solid';
import {
  HomeIcon as HomeIconInactive,
  ViewfinderCircleIcon as ViewfinderCircleIconInactive,
  ArchiveBoxIcon as ArchiveBoxIconInactive,
} from 'react-native-heroicons/outline';
import {RoutesTabs, TabParamList} from '../routes';
import {Home, Products, Scan} from '@/pages';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Tabs = [
  {
    name: RoutesTabs.Dashboard,
    component: Home,
    iconActive: HomeIcon,
    iconInactive: HomeIconInactive,
    label: 'Dashboard',
  },

  {
    name: RoutesTabs.Scan,
    component: Scan,
    iconActive: ViewfinderCircleIcon,
    iconInactive: ViewfinderCircleIconInactive,
    label: 'Escanear',
  },
  {
    name: RoutesTabs.Products,
    component: Products,
    iconActive: ArchiveBoxIcon,
    iconInactive: ArchiveBoxIconInactive,
    label: 'Productos',
  },
];

const screenOptions: BottomTabNavigationOptions = {
  tabBarStyle: {
    backgroundColor: '#0c0a09',
    borderWidth: 0,
    borderColor: '#0c0a09',
    elevation: 0,
    height: 60,
  },
};

const tabOptions: BottomTabNavigationOptions = {
  headerShown: false,
};
export default function TabNavigator() {
  const navigation = useNavigation<NavigationProp<TabParamList>>();
  const [tabActive, setTabActive] = useState(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', e => {
      const state = e.data.state;
      if (state) {
        const currentRoute = state.routes[state.index];

        if (currentRoute.name === 'Tabs' && currentRoute.state) {
          const tabState = currentRoute.state;
          setTabActive(tabState.index || 0);
        }
      }
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <Tab.Navigator
      initialRouteName={RoutesTabs.Dashboard}
      screenOptions={{
        ...screenOptions,
        tabBarItemStyle: {
          paddingVertical: 18,
        },
      }}>
      {Tabs.map((tab, idx) => (
        <Tab.Screen
          key={idx}
          name={tab.name}
          component={tab.component}
          options={{
            ...tabOptions,
            tabBarLabel: `${tab.label}`,
            tabBarIcon: ({size}) => {
              return tabActive === idx ? (
                <tab.iconActive color="#eab308" size={size} />
              ) : (
                <tab.iconInactive color="#78716c" size={size} />
              );
            },
            tabBarShowLabel: false,
            // tabBarLabelStyle: {
            //   color: tabActive === idx ? '#2563eb' : '#6b7280',
            //   fontSize: 12,
            //   letterSpacing: -0.4,
            //   fontFamily:
            //     tabActive === idx ? 'Lexend-SemiBold' : 'Lexend-Regular',
            // },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
