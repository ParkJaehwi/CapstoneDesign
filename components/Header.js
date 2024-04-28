import React from "react";
import { View, Text, Button, TouchableOpacity, onPress } from "react-native";
import styles from "../styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Header() {
  return (
    <View style={[styles.header, styles.content]}>
      <View style={styles.headerItem}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Icon name="bars" size={24} color="black" />
        </TouchableOpacity>
        <Text style={[styles.whiteText,styles.headerText]}>BU Market</Text>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Icon name="search" size={24} color="black" />
        </TouchableOpacity>
      </View> 
    </View>
  );
}
