import { Image, Text, View } from "react-native";
import styled from "styled-components/native";

import Margin from "./Margin";

// const Container = styled.View`
//   flexdirection: row;
// `;

// const ProfileImage = styled.Image`
//   width: ${(props) => props.size}px;
//   height: ${(props) => props.size}px;
//   borderradius: ${(props) => props.size * 0.4}px;
// `;

export default ({ uri, name, introduction, isMe }) => {
  const size = isMe ? 50 : 40;
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{ uri }}
        style={{ width: size, height: size, borderRadius: size * 0.3 }}
      />
      {/* <Container> */}
      {/* <ProfileImage source={{ uri }} size={size} /> */}
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        <Text
          style={{
            fontWeight: isMe ? "bold" : undefined,
            fontSize: isMe ? 16 : 15,
          }}
        >
          {name}
        </Text>
        {!!introduction && (
          //* !! 써서  컴포넌트로 감싸주지않고 블리언 값으로 바꿔주움
          <View>
            <View style={{ height: isMe ? 6 : 2 }} />
            <Text style={{ fontSize: isMe ? 12 : 11, color: "grey" }}>
              {introduction}
            </Text>
          </View>
        )}
      </View>
      {/* </Container> */}
    </View>
  );
};
