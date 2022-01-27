import { useState } from "react";
import { StyleSheet, Button, View, Text } from "react-native";

export default function HomeScreen({ navigation }) {
   const [errorHandler , setErrorHandler] = useState(false); 
  const onClickHandler = async () => {
    try {
      let response = await fetch("https://dog.ceo/api/breeds/image/random");
      let json = await response.json();
      setErrorHandler(false);
      navigation.navigate("Image", { url: json.message });
    } catch (error) {
        return setErrorHandler(true);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Fetch" onPress={onClickHandler} color="#f194ff" />
      {errorHandler && <Text style={styles.error}>Something Went Wrong, Try Again Later !</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  error:{
      marginTop:10,
  }
});
