import { View, Text, TextInput, Image, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import LogoIcon from "../../assets/icons/Logo.svg"
import ClipIcon from "../../assets/icons/Clipboard.svg"
import { colors } from "../../constants/colors";
import { AntDesign } from '@expo/vector-icons';
import { Counter } from "../../components/Counter";
import React, { useState } from "react";
import { Input } from "../../components/Input";
import { Task, TaskProps } from "../../components/Task";



export function Home() {
  const [textInput, setTextInput] = useState<string>("")
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const completedTasks = tasks.filter(task => task.isCompleted)

  function addTask() {
    const task = {
      title: textInput,
      isCompleted: false
    }
    const taskExists = tasks.find(item => item.title === textInput)

    if (taskExists) {
      return Alert.alert('Tarefa Existe', 'Esta tarefa ja existe na lista')
    }
    if (!textInput) {
      return alert('O campo não pode estar vazio')
    }
    setTasks(prevState => [...prevState, task])
    setTextInput('')

  }

  function removeTask(taskTitle: string) {

    Alert.alert('Remover tarefa', 'Deseja remover esta tarefa?', [
      {
        text: 'Sim',
        onPress: () => {
          setTasks(
            prevState => prevState.filter(task => task.title !== taskTitle)
          )
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])

  }


  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <LogoIcon width={110} height={32} />
      </View>

      <View style={styles.inputContainer}>
        <Input value={textInput} onChangeText={text => setTextInput(text)} />
        <TouchableOpacity style={styles.buttonAdd} onPress={addTask}>
          <AntDesign name="pluscircleo" size={16} color={colors.white} />
        </TouchableOpacity>

      </View>


      <View style={styles.countContainer}>
        <Counter count={tasks.length} title="Criadas" color={colors.blue} />
        <Counter count={completedTasks.length} title="Concluidas" color={colors.purple} />
      </View>

      <FlatList
        style={{ width: '92%', marginTop: 20 }}
        contentContainerStyle={{ gap: 8, alignItems: 'center' }}
        data={tasks}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.title}
        renderItem={({ item, index }) => (
          <Task
            title={item.title}
            isCompleted={item.isCompleted}
            onRemove={() => removeTask(item.title)}
            onComplete={(isChecked) => {
              setTasks(prevState => {
                prevState[index].isCompleted = isChecked
                return [...prevState]
              })
            }}
          />
        )}

        ListEmptyComponent={() => (
          <View style={styles.clipContainer}>
            <ClipIcon height={56} width={56} />
            <View>
              <Text style={{ ...styles.clipText, fontWeight: '700' }}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.clipText}>Crie tarefas e organize seus itens a fazer</Text>

            </View>
          </View>

        )}

      />

    </View>
  );
}