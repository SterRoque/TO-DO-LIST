import { TextInput } from "react-native";
import { styles } from "./styles"
import { colors } from "../../constants/colors";
import { useState } from "react";

type Props = {
  value: string,
  onChangeText: (text: string) => void

}

export function Input({ value, onChangeText }: Props) {

  const [isFocused, setIsFocused] = useState<boolean>(false)

  return (

    <TextInput
      style={[styles.input, isFocused && { borderColor: colors.purple }]}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor={colors["gray-300"]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      value={value}
      onChangeText={onChangeText}

    />
  )
}

