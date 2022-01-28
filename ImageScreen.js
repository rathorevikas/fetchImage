import { Dimensions, Image, StyleSheet, View } from "react-native";
import React from "react";

const ImageScreen = ({ route }) => {
  return (
    <View style={styles.container} >
      <Image
        source={{
          uri: `${route.params.url}`,
        }}
        style={styles.image}
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      image: {
          width:Dimensions.get("window").width - 40,
          height:Dimensions.get("window").height -200
      }
});
