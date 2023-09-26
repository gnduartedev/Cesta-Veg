
import { SafeAreaView, StatusBar,} from 'react-native';
import Cesta from './src/telas/Cesta'
import { useFonts, 
  Montserrat_400Regular, 
  Montserrat_400Regular_Italic, 
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import mock from  './src/telas/mocks/cesta'
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontcarregada] = useFonts ({
    "montSerratRegular": Montserrat_400Regular,
    "montSerratBold":Montserrat_700Bold,
})
if(!fontcarregada){
  return<AppLoading/>
}
return<>
      <SafeAreaView style ={{flex: 1}}>
      <StatusBar />
      <Cesta {...mock}/>
    </SafeAreaView>
   </>
}

