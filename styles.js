import { StyleSheet, Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    backgroundColor: "rgba(55, 100, 180, 1)",
  },
  article: {
    flex: 6,
  },
  footer: {
    flex: 1,
    backgroundColor: "rgba(55, 100, 180, 1)",
    flexDirection: "row",
    alignItems: "space-between",
  },
  whiteText: {
    color: "white",
  },
  headerText: {
    fontSize: 20,
    flex: 1,
    textAlign: "center",
  },
  headerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between', // 텍스트와 버튼을 각각 시작과 끝에 배치합니다.
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    margin: 15,
    marginBottom: 25,
  },
});

export default styles;
