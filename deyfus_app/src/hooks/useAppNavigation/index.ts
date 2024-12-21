import {useNavigation} from '@react-navigation/native';

export const useAppNavigation = () => {
  const navigation = useNavigation();

  const navigateTo = (screen: any, params?: any) => {
    if (params) {
      navigation.navigate(screen, params);
    } else {
      navigation.navigate(screen);
    }
  };

  return {navigateTo};
};
