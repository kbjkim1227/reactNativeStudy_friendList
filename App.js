import { StatusBar } from "expo-status-bar";
import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";
import { useState } from "react";
import Profile from "./Profile";
import Header from "./Header";
import { Ionicons } from "@expo/vector-icons";
import { myProfile } from "./data";
import { friendProfiles } from "./data";
import Margin from "./Margin";
import Division from "./Division";
import FriendSection from "./FriendSection";
import FriendList from "./FriendList";
import TabBar from "./TabBar";

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();
// console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`);

export default function App() {
  const [isOpened, setIsOpened] = useState(true);

  const [selectedTabIdx, setSelectedTabIdx] = useState(0);
  console.log("Opened", isOpened, selectedTabIdx);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };

  const ItemSeparatorComponent = () => <Margin height={13} />;
  const renderItem = ({ item }) => (
    <View>
      <Profile
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={false}
      />
    </View>
  );
  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "white" }}>
      <Header />

      <Margin height={10} />

      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />
      <Margin height={15} />

      <Division />

      <Margin height={12} />

      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />
      <Margin height={5} />
    </View>
  );
  const ListFooterComponent = () => <Margin height={10} />;

  return (
    <View style={styles.container}>
      <FlatList //* 많은 데이터를 렌더링 할 때 적절하다.
        data={isOpened ? friendProfiles : []}
        contentContainerStyle={{ paddingHorizontal: 15 }} //* 양 옆 간격
        keyExtractor={(_, index) => index} //* 사용하지 않는 아규먼트가 있으면 "_"로 처리해준다.
        stickyHeaderIndices={[0]} //* 첫번째 헤더만 고정시키겠다.
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem} //* 친구프로필리스트
        ListFooterComponent={ListFooterComponent}
        ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
      />
      <TabBar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
    // paddingHorizontal: 15, //* 양 옆 간격
    paddingBottom: bottomSpace, //*바텀 안전영역?
    // justifyContent: "flex-end", //*맨 밑에
  },
});
