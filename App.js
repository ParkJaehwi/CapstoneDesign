import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Footer from "./components/Footer";
import styles from "./styles";
import Article from "./components/Article";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Article />
      <Footer />
    </View>
  );
}
