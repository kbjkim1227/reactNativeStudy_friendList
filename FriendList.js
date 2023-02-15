import { ScrollView, View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Margin from "./Margin";
import Profile from "./Profile";

const bottomSpace = getBottomSpace();

export default (props) => {
  /**
   * Case 1. 삼항연산자로
   */
  //   return props.isOpened ? (
  //     // isOpened가 true일때는 랜더링해주고 그렇지 않을 때는 null을 반환
  //     <ScrollView
  //       showsVerticalScrollIndicator={false}
  //       //  어디까지 스크롤 되는지 알 수 있는 기능
  //       contentContainerStyle={{ paddingBottom: bottomSpace }}
  //     >
  //       {props.data.map((item, index) => (
  //         <View key={index}>
  //           {/* key 최상단 루트 컴포넌트에 있어야한다  */}
  //           <Profile
  //             uri={item.uri}
  //             name={item.name}
  //             introduction={item.introduction}
  //           />
  //           <Margin height={10} />
  //         </View>
  //       ))}
  //     </ScrollView>
  //   ) : null;
  // };

  /**
   * Case 2. if문으로 먼저 예외처리
   */
  if (!props.isOpened) return null;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* 어디까지 스크롤 되는지 알 수 있는 기능  */}
      {props.data.map((item, index) => (
        <View key={index}>
          {/* key 최상단 루트 컴포넌트에 있어야한다  */}
          <Profile
            uri={item.uri}
            name={item.name}
            introduction={item.introduction}
          />
          <Margin height={10} />
        </View>
      ))}
    </ScrollView>
  );
};

/**
 * Case 3. && 이용
 */

//   return (
//     props.isOpened && (
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         //  어디까지 스크롤 되는지 알 수 있는 기능
//         contentContainerStyle={{ paddingBottom: bottomSpace }}
//       >
//         {props.data.map((item, index) => (
//           <View key={index}>
//             <Profile
//               uri={item.uri}
//               name={item.name}
//               introduction={item.introduction}
//             />
//             <Margin height={10} />
//           </View>
//         ))}
//       </ScrollView>
//     )
//   );
// };
