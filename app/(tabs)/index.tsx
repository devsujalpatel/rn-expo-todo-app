import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  const todo = useQuery(api.todos.getTodos);
  console.log(todo);

  const addTodo = useMutation(api.todos.addTodo);
  const clearAllTodos = useMutation(api.todos.clearAllTodos);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, This is home page</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle the mode</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addTodo({ text: "create a app" })}>
        <Text>Add a new todo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clearAllTodos()}>
        <Text>Clear all</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
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
