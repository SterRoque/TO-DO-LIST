import { Text, View } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants/colors";

type CounterProps = {
  title: string
  color: string
  count: number
}
export function Counter({ count = 0, title, color }: CounterProps) {

  return (


    <View style={styles.textContainer}>
      <Text style={{ ...styles.text, ...{ color: color } }}>{title}</Text>
      <View style={styles.circle}>
        <Text style={{ ...styles.text, ...styles.textCount }}>{count}</Text>
      </View>
    </View>





  )

}