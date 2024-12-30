import { View, FlatList, Text, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { s } from "./styles";
import { colors } from "@/styles/colors";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type TaskListProps = {
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
};

export default function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
}: TaskListProps) {
  const createdCount = tasks.length;
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <View style={s.container}>
      <View style={s.statusContainer}>
        <View style={s.statusItem}>
          <Text style={s.statusTextCreated}>Criadas</Text>
          <View style={s.statusCounter}>
            <Text style={s.statusCounterText}>{createdCount}</Text>
          </View>
        </View>
        <View style={s.statusItem}>
          <Text style={s.statusTextDone}>Concluídas</Text>
          <View style={s.statusCounter}>
            <Text style={s.statusCounterText}>{completedCount}</Text>
          </View>
        </View>
      </View>
      <FlatList
        style={s.flatList}
        showsVerticalScrollIndicator={false}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={s.taskContainer}>
            <TouchableOpacity
              style={s.taskCheck}
              onPress={() => onToggleTask(item.id)}
            >
              <Icon
                name={
                  item.completed
                    ? "checkbox-marked-circle-outline"
                    : "checkbox-blank-circle-outline"
                }
                size={32}
                color={
                  item.completed ? colors.product.purple : colors.product.blue
                }
                style={{ padding: 2 }}
                s
              />
            </TouchableOpacity>
            <Text style={item.completed ? s.taskTextCompleted : s.taskText}>
              {item.title}
            </Text>
            <TouchableOpacity style={s.taskDelete}>
              <Icon
                name="delete-outline"
                size={32}
                color={colors.base[300]}
                style={{ padding: 2 }}
                onPress={() => onDeleteTask(item.id)}
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
