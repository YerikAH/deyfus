import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Products() {
  return (
    <SafeAreaView style={style.containerPage}>
      <StatusBar backgroundColor="transparent" translucent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <Text>Products</Text>
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
