import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";

export default function Header() {
  return (
    <View style={[styles.header, styles.content]}>
      <Text style={styles.whiteText}>header</Text>
    </View>
  );
}
