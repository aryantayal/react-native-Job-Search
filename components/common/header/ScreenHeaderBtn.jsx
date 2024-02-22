import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.btnContainer}>
        <Image
          onPress={handlePress}
          source={iconUrl}
          resizeMode="cover"
          style={styles.btnImg(dimension)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ScreenHeaderBtn;
