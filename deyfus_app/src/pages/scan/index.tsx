import {useAppNavigation} from '@/hooks';
import {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Svg, {Defs, G, Mask, Rect} from 'react-native-svg';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

const {width, height} = Dimensions.get('window');
const frameWidth = 300;
const frameHeight = 230;
const frameX = (width - frameWidth) / 2;
const frameY = (height - frameHeight) / 2;

export default function Scan() {
  const [code, setCode] = useState('');
  const device = useCameraDevice('back');
  const {hasPermission} = useCameraPermission();
  const {navigateTo} = useAppNavigation();
  // const navigateToSuccess = () => navigateTo(RoutesSpace.SuccessSpace);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      setCode(codes[0].value ?? '');
    },
  });

  if (!hasPermission) return <Text> No permission </Text>;
  if (device == null) return <Text>Error devices</Text>;
  return (
    <SafeAreaView style={style.containerPage}>
      <StatusBar backgroundColor="transparent" translucent />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Camera
          codeScanner={codeScanner}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
        <Svg height={height} width={width} style={StyleSheet.absoluteFill}>
          <Defs>
            <Mask id="mask">
              <Rect x="0" y="0" width={width} height={height} fill="white" />
              <Rect
                x={frameX}
                y={frameY}
                width={frameWidth}
                height={frameHeight}
                rx={20}
                ry={20}
                fill="black"
              />
            </Mask>
          </Defs>

          <G mask="url(#mask)">
            <Rect
              x="0"
              y="0"
              width={width}
              height={height}
              fill="rgba(0, 0, 0, 0.5)"
            />
          </G>
        </Svg>
        <View style={style.container}></View>
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
