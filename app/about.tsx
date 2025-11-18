import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, I'm the about page</Text>
      <Link href="/" style={styles.link}>
        Home
      </Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1d1d",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
    padding: 10,
    cursor: "pointer",
  },

  link: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
    backgroundColor: "#0c524fff",
    padding: 10,
    cursor: "pointer",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
