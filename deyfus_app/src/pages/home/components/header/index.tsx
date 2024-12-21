import {StyleSheet, Text, View} from 'react-native';

interface Props {
  name: string;
  avatar: string;
}
export const Header: React.FC<Props> = ({name, avatar}) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>Buenos días {name} 👋</Text>
      <Text style={styles.text}>Vamos a elevar nuestras ventas.</Text>
    </View>
    {/* <Pressable style={styles.button}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.pexels.com/photos/11650554/pexels-photo-11650554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
      />
    </Pressable> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  title: {
    fontSize: 20,
    color: '#f5f5f4',
    fontFamily: 'Merriweather-Bold',
  },
  text: {
    fontSize: 18,
    color: '#78716c',
    fontFamily: 'Merriweather-Regular',
  },
  button: {
    width: 45,
    height: 45,
    overflow: 'hidden',
    borderRadius: 255,
  },
  image: {
    width: 45,
    height: 45,
  },
});
