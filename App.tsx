import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import First from './screens/First';
import Second from './screens/Second';

const TankDemoStack = createNativeStackNavigator();

const TankDemoStackNavigator = () => {
  const navigation = useNavigation();

  return (
    <TankDemoStack.Navigator initialRouteName={'First'}>
      <TankDemoStack.Screen name={'First'} component={First} />
      <TankDemoStack.Screen name={'Second'} component={Second} />
    </TankDemoStack.Navigator>
  );
};

export default TankDemoStackNavigator;
