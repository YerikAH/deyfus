import {useAppNavigation} from '@/hooks';
import {RoutesApp} from '@/navigation/routes';
import {Svg, Defs, LinearGradient, Stop, Rect} from 'react-native-svg';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Intro() {
  const {navigateTo} = useAppNavigation();
  const navigateToRegister = () => navigateTo(RoutesApp.Register);
  return (
    <SafeAreaView style={style.containerPage}>
      <StatusBar backgroundColor="transparent" translucent />

      <Svg height="100%" width="120%" style={style.svgBackground}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="5%" stopColor="#0c0a09" stopOpacity="1" />
            <Stop offset="50%" stopColor="transparent" stopOpacity="0" />
            <Stop offset="100%" stopColor="#0c0a09" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/6261862/pexels-photo-6261862.jpeg?',
        }}
        style={style.backgroundImage}></ImageBackground>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.content}>
        <View style={style.container}>
          <Text style={style.title}>Bienvenido a Deyfus</Text>
          <Text style={style.text}>
            Nuestra aplicación está diseñada para que gestiones el inventario de
            los productos Deyfus de manera eficiente y sencilla.
          </Text>
        </View>
      </ScrollView>
      <View style={style.buttonContainer}>
        <TouchableOpacity style={style.button} onPress={navigateToRegister}>
          <Text style={style.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  containerPage: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: 32,
    marginTop: 40,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -10,
  },
  svgBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    paddingHorizontal: 32,
    paddingBottom: 32,
  },
  button: {
    width: '100%',
    backgroundColor: '#eab308',
    paddingHorizontal: 32,
    paddingVertical: 18,
    borderRadius: 16,
    marginTop: 42,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0c0a09',
    fontFamily: 'Merriweather-Bold',
    marginLeft: 6,
  },
  title: {
    fontFamily: 'Merriweather-Black',
    fontSize: 24,
    color: '#e7e5e4',
    textAlign: 'left',
    marginTop: 16,
  },
  text: {
    textAlign: 'left',
    marginTop: 8,
    fontFamily: 'Merriweather-Regular',
    fontSize: 16,
    color: '#a8a29e',
  },
});
