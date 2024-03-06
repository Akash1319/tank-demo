import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
type Props = {};

const First = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>First</Text>
      <Button
        title='Go to second screen'
        onPress={() => navigation.navigate('Second' as never)}
      />
    </View>
  );
};

export default First;

const styles = StyleSheet.create({});
