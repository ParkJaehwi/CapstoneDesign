import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";

export default function Article() {
  return (
    <View style={[styles.article, styles.content]}>
      <Text>Main Page</Text>
    </View>
  );
}
