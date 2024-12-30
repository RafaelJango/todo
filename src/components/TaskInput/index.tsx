import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import { s } from "./style";
import { colors } from "../../styles/theme";

export default function TaskInput({}) {
  return (
    <View style={s.form}>
      <TextInput
        style={s.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors.base[300]}
      />
      <TouchableOpacity style={s.button}>
        <Icon name="add-circle-outline" size={24} color={colors.base[100]} />
      </TouchableOpacity>
    </View>
  );
}
