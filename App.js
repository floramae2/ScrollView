import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';
import information from './src/information';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt1}>LIST OF STUDENTS</Text>
      {information.map((info)=>{
        return(
          <View>
            <ScrollView>
              <Text style={styles.txt1}>{info.name}</Text>
              <Text style={styles.txt2}>{info.place}</Text>

            </ScrollView>

          </View>
        )
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 20,
    marginTop: 100,
    marginLeft: 30
  },
  txt1: {
    fontWeight: 'bold',
    fontSize: 18,

  },
  txt2: {

  }
});