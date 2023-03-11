import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import COLORS from "../../constant/Color";

export default Loader = ({}) => {
  return (
    <View style={style.container}>
      <ActivityIndicator size="large" color={COLORS.BLACK} />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
