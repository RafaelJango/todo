import React, { useState } from "react";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Alert, View } from "react-native";

import { s } from "./styles";
import Header from "../../components/Header";
import TaskInput from "../../components/TaskInput";
import Loading from "../../components/Loading";
import TaskList from "@/components/TaskList";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontLoaded) {
    return <Loading />;
  }

  const handleAddTask = (taskTitle: string) => {
    const newTask = {
      id: Date.now().toString(),
      title: taskTitle,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleToggleTask = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId: string) => {
    Alert.alert("Remover", "Você deseja remover esta tarefa?", [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevTasks) =>
            prevTasks.filter((task) => task.id !== taskId)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  return (
    <>
      <Header />
      <View style={s.container}>
        <TaskInput onAddTask={handleAddTask} />

        <TaskList
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </View>
    </>
  );
}
