import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ color: "grey" }}>친구 {props.friendProfileLen}</Text>

      <TouchableOpacity onPress={props.onPressArrow}>
        <MaterialIcons
          name={props.isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          color="lightgrey"
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
};
