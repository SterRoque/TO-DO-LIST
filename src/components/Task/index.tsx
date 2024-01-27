import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from "../../constants/colors";

export type TaskProps = {
  title: string,
  isCompleted?: boolean,
}

type Props = {
  onRemove: () => void
  onComplete: (isChecked: boolean) => void
} & TaskProps

export function Task({ title, isCompleted = false, onRemove, onComplete }: Props) {
  return (

    <View style={styles.taskContainer}>
      <BouncyCheckbox
        isChecked={isCompleted}
        onPress={onComplete}
        size={24}
        fillColor={isCompleted ? colors['purple-dark'] : colors['blue-dark']}
      />
      <Text style={isCompleted ? { ...styles.taskText, ...styles.taskCompletedText } : styles.taskText}>{title}</Text>
      <TouchableOpacity style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center' }} onPress={onRemove}>
        <FontAwesome5 name="trash-alt" size={18} color={colors['gray-300']} />


      </TouchableOpacity>
    </View>
  )
}