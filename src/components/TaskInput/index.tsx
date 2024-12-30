import { useState } from "react";
import { View, TextInput, TouchableOpacity, Alert } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import { s } from "./style";
import { colors } from "../../styles/theme";

interface TaskInputProps {
  onAddTask: (taskTitle: string) => void;
}

export default function TaskInput({ onAddTask }: TaskInputProps) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() === "") {
      Alert.alert("Erro", "A tarefa não pode estar vazia!");
      return;
    }
    onAddTask(task);
    setTask("");
  };

  return (
    <View style={s.form}>
      <TextInput
        style={s.input}
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChangeText={setTask}
        placeholderTextColor={colors.base[300]}
      />
      <TouchableOpacity style={s.button} onPress={handleAddTask}>
        <Icon name="add-circle-outline" size={24} color={colors.base[100]} />
      </TouchableOpacity>
    </View>
  );
}
