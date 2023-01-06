import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
        ></TextInput>
        <Button title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goal...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "red",
  },
  textInput: {
    width: "70%",
    borderColor: "red",
    borderWidth: 1,
    marginRight: 8,
    padding: 5,
  },
  goalsContainer: {
    flex: 5,
  },
});
