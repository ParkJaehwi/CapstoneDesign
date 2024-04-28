import React from "react";
import { Text, View, TouchableOpacity, onPress, Button} from "react-native";
import styles from "../styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Footer() {
  return (
    <View style={[styles.footer, styles.content]}>
      <View style={styles.button}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Icon name="home" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Icon name="shopping-cart" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Icon name="comment" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Icon name="gear" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}