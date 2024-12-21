import {useAppNavigation} from '@/hooks';
import {RoutesApp} from '@/navigation/routes';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';

export default function RecoverPassword() {
  const {navigateTo} = useAppNavigation();
  const navigateToLogin = () => navigateTo(RoutesApp.Login);
  return (
    <SafeAreaView style={style.containerPage}>
      <StatusBar backgroundColor="transparent" translucent />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.content}>
        <View style={style.container}>
          <TouchableOpacity style={style.buttonBack} onPress={navigateToLogin}>
            <ChevronLeftIcon size={14} color="#78716c" />
            <Text style={style.buttonBackText}>Volver</Text>
          </TouchableOpacity>
          <Text style={style.title}>Recuperar tu contraseña</Text>
          <Text style={style.text}>
            Nuestra aplicación está diseñada para que gestiones el inventario de
            los productos Deyfus de manera eficiente y sencilla.
          </Text>

          <View>
            <TextInput
              style={style.input}
              placeholder="Ej. email@email.com"
              placeholderTextColor="#44403c"
              cursorColor="#eab308"
              inputMode="email"
              autoComplete="email"
              selectionColor="#854d0e"
            />
          </View>
        </View>
      </ScrollView>
      <View style={style.buttonContainer}>
        <TouchableOpacity style={style.button} onPress={() => {}}>
          <Text style={style.buttonText}>Mandar código de verificación</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  buttonBack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonBackText: {
    fontFamily: 'Merriweather-Regular',
    color: '#78716c',
    fontSize: 14,
    marginLeft: 4,
  },
  containerPage: {
    flex: 1,
    backgroundColor: '#0c0a09',
  },
  content: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: 32,
    marginTop: 40,
  },

  buttonContainer: {
    paddingHorizontal: 32,
    paddingBottom: 32,
  },

  input: {
    zIndex: 5,
    fontFamily: 'Merriweather-Regular',
    borderWidth: 1,
    borderColor: '#292524',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 16,
    color: '#d6d3d1',
    backgroundColor: '#0c0a09',
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
    fontSize: 20,
    color: '#e7e5e4',
    textAlign: 'center',
    marginTop: 16,
  },
  text: {
    textAlign: 'center',
    marginTop: 4,
    fontFamily: 'Merriweather-Regular',
    fontSize: 14,
    color: '#a8a29e',
  },
});
