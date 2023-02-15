import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ name, bgColor }) => {
  return (
    <TouchableOpacity
      hitSlop={{ top: 15, bottom: 15 }} // 터치범위를 위,아래 15만큼 늘림
      style={{ paddingHorizontal: 6, backgroundColor: bgColor }}
    >
      <Ionicons name={name} size={24} color="black" />
    </TouchableOpacity>
  );
};

export default () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Friend</Text>
      <View style={{ flexDirection: "row" }}>
        <IconButton name="search-outline" />
        <IconButton name="person-add-outline" />
        <IconButton name="md-musical-notes-outline" />
        <IconButton name="ios-settings-outline" />
      </View>
    </View>
  );
};
