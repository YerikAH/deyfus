import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import logo from '@/assets/logo.png';
import {AccountInquiry} from '@/components';
import {useAppNavigation} from '@/hooks';
import {RoutesApp} from '@/navigation/routes';
import {useState} from 'react';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/solid';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const {navigateTo} = useAppNavigation();
  const navigateToRegister = () => navigateTo(RoutesApp.Register);
  const navigateToDashboard = () => navigateTo(RoutesApp.Tabs);
  const navigateToRecoverPassword = () => navigateTo(RoutesApp.RecoverPassword);

  return (
    <SafeAreaView style={style.containerPage}>
      <StatusBar backgroundColor="transparent" translucent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <Image source={logo} style={style.logo} />
          <Text style={style.title}>Ingresa a tu cuenta</Text>
          <Text style={style.text}>
            Inicia sesión en tu cuenta para acceder a toda la información que
            has guardado.
          </Text>
          <View style={style.containerForm}>
            <View>
              <Text style={style.labelInput}>
                Ingresa tu correo electrónico:
              </Text>
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

            <View style={style.inputSeparator}>
              <Text style={style.labelInput}>Ingresa tu contraseña:</Text>
              <View style={{position: 'relative'}}>
                <TextInput
                  style={style.input}
                  placeholder="Ej. BawW235gS#"
                  placeholderTextColor="#44403c"
                  cursorColor="#eab308"
                  inputMode="text"
                  autoComplete="password"
                  selectionColor="#854d0e"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  style={style.showPassword}
                  onPress={toggleShowPassword}>
                  {showPassword ? (
                    <EyeIcon size={14} color="#78716c" />
                  ) : (
                    <EyeSlashIcon size={14} color="#78716c" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{flex: 1, alignItems: 'flex-end', marginTop: 16}}>
            <TouchableOpacity
              style={style.buttonLink}
              onPress={navigateToRecoverPassword}>
              <Text style={style.buttonLinkText}>
                ¿Olvidaste tu contraseña?
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={style.button} onPress={navigateToDashboard}>
            <Text style={style.buttonText}>Ingresar</Text>
          </TouchableOpacity>

          <AccountInquiry
            action={navigateToRegister}
            buttonText="Crear cuenta"
            text="¿Aún no tienes una cuenta?"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  containerPage: {
    backgroundColor: '#0c0a09',
    height: '100%',
  },
  logo: {
    width: 120,
    height: 70,
    objectFit: 'contain',
    marginHorizontal: 'auto',
    marginTop: 24,
  },
  container: {
    paddingHorizontal: 32,
    marginTop: 40,
  },
  title: {
    fontFamily: 'Merriweather-Black',
    fontSize: 20,
    color: '#fafaf9',
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
  input: {
    zIndex: 5,
    fontFamily: 'Merriweather-Regular',
    borderWidth: 1,
    borderColor: '#292524',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 8,
    color: '#d6d3d1',
    backgroundColor: '#0c0a09',
  },
  showPassword: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    right: 16,
    top: 6,
    bottom: 0,
    marginVertical: 'auto',
    zIndex: 10,
  },
  labelInput: {
    color: '#e7e5e4',
    fontFamily: 'Merriweather-Bold',
  },
  button: {
    width: '100%',
    backgroundColor: '#eab308',
    paddingHorizontal: 32,
    paddingVertical: 18,
    borderRadius: 16,
    marginTop: 42,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputSeparator: {
    marginTop: 16,
  },
  containerForm: {
    marginTop: 42,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0c0a09',
    fontFamily: 'Merriweather-Bold',
    marginLeft: 6,
  },
  buttonLink: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 255,
    backgroundColor: '#eab3081a',
  },
  buttonLinkText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#eab308',
    fontFamily: 'Merriweather-Regular',
    textAlign: 'center',
  },
});
