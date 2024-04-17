import React from "react";
import { Text, View, Button } from "react-native";
import styles from "../styles";

export default function Footer() {
  return (
    <View style={[styles.footer, styles.content]}>
      <Button title="1" style={styles.whiteText}></Button>
      <Button title="2" style={styles.whiteText}></Button>
      <Button title="3" style={styles.whiteText}></Button>
      <Button title="4"></Button>
    </View>
  );
}
