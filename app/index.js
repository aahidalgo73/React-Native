import { Link } from 'expo-router';
import Logo from '../components/Logo';
import { Main } from '../components/Main' ;
import { View,StyleSheet , Text, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Index() {

 
  return (
    <View style={styles.container}>
      <StatusBar style = 'light'/>
      <Logo style = {styles.logo}/>
      <Link href="/about" asChild >
        <TouchableOpacity style = {StyleSheetList.aboutButton}>
          <Text style={styles.aboutButtonText}>Acerca de</Text>
        </TouchableOpacity>
      </Link>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
       backgroundColor: '#333',
       padding :20,
  }
});
