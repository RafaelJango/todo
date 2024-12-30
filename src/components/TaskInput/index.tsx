import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { s } from "./style";
import { colors } from "../../styles/theme";

export default function TaskInput() {
  return (
    <View style={s.form}>
      <TextInput
        style={s.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors.base[300]}
      />
      <TouchableOpacity style={s.button}>
        <Text style={s.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
