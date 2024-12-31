import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import BMI_calc from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <BMI_calc/>
      <StatusBar style="light" backgroundColor='#121420' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
