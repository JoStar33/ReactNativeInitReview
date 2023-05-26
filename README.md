
## 초기 설정을 위해 설치한 라이브러리들
### 왜 아래 라이브러리들을 설치한 것인가?
화면 라우팅, 아이콘 사용, 절대경로 설정, env사용을 위해 필요한 라이브러리들입니다.

- yarn add react-native-reanimated@2.15.0
  - 반드시 먼저 설치하기를 권장하고 "react-native-reanimated/plugin",을 babel.config.js내에 작성한다.
- yarn add babel-plugin-module-resolver
- yarn add react-native-dotenv
- yarn add @react-navigation/stack react-native-gesture-handler
- yarn add @react-navigation/material-bottom-tabs react-native-paper react-native-pager-view react-native-safe-area-context react-native-tab-view @react-navigation/native
- yarn add @react-navigation/drawer
- yarn add react-native-vector-icons
- yarn add @types/react-native-vector-icons --dev
  - android/app/build.gradle에 apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"를 작성.