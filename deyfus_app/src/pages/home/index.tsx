import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Header} from './components';

export default function Home() {
  return (
    <SafeAreaView style={style.containerPage}>
      <StatusBar backgroundColor="transparent" translucent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <Header avatar="" name="Cindy" />
          <Text>Home</Text>
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
  container: {
    paddingHorizontal: 32,
    marginTop: 40,
  },
});
