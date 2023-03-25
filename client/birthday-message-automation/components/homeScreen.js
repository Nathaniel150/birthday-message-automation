import { ImageBackground, Image, StyleSheet, Text, View, Pressable } from "react-native";


export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <Pressable 
        style={styles.container}
        onPress={() => navigation.navigate("Birthdays")}
      >

      <ImageBackground
        resizeMode="cover"
        style={styles.background}
      >

        <Image
          source={require("../assets/favicon.png")}
          style={styles.image}
        />

        <Text
          style={styles.title}
        >
          Birthday Wishes
        </Text>

        <Text
          style={styles.content}
        >
          boosts productivity and friendship
        </Text>

      </ImageBackground>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    // borderWidth: 5,
    // borderColor: "blue",

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffeee",

    paddingBottom: 130,
  },
  image: {
    // borderWidth: 5,
    // borderColor: "pink",

    flex: 1,
    justifyContent: "flex-end",
    height: 200,
    maxHeight: 200,
    width: 200,
  },
  title: {
    // borderWidth: 5,
    // borderColor: "orange",

    flex: 0,
    height: "auto",
    textAlign: "center",
    fontSize: 30,
    
  },
  content: {
    flex: 0,
    height: "auto",
    textAlign: "center",
    fontSize: 15,
  }
});
