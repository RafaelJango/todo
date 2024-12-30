import { View, FlatList, Text, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { s } from "./styles";
import { colors } from "@/styles/colors";

export default function TaskList() {
  return (
    <View style={s.container}>
      <View style={s.statusContainer}>
        <View style={s.statusItem}>
          <Text style={s.statusTextCreated}>Criadas</Text>
          <View style={s.statusCounter}>
            <Text style={s.statusCounterText}>1</Text>
          </View>
        </View>
        <View style={s.statusItem}>
          <Text style={s.statusTextDone}>Concluídas</Text>
          <View style={s.statusCounter}>
            <Text style={s.statusCounterText}>1</Text>
          </View>
        </View>
      </View>
      <FlatList
        style={s.flatList}
        showsVerticalScrollIndicator={false}
        data={[]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={s.taskContainer}>
            <TouchableOpacity style={s.taskCheck}>
              <Icon
                name="checkbox-blank-circle-outline"
                size={32}
                color={colors.product.blue}
                style={{ padding: 2 }}
                s
              />
            </TouchableOpacity>
            <Text style={s.taskText}>{item}</Text>
            <TouchableOpacity style={s.taskDelete}>
              <Icon
                name="delete-outline"
                size={32}
                color={colors.base[300]}
                style={{ padding: 2 }}
              />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={s.listEmptyContainer}>
            <Icon
              style={s.icon}
              size={112}
              name="note-alert-outline"
              color={colors.base[300]}
            />
            <Text style={s.listEmptyTextBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={s.listEmptyTextRegular}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}
