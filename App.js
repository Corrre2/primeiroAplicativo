import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button } from 'react-native';
import Title from './Title/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Carol</Text>
      <Text>cleitin estora femea</Text>
      <Title/>
     <Button title='carol broxa'></Button>
     
      <StatusBar style="auto" />
      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
