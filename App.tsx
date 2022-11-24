import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [animate] = useState(new Animated.Value(0));

  const boxInterpolation = animate.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  const startAnimate = () => {
    Animated.timing(animate, {
      toValue: 360,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animate, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <Button title="click" onPress={startAnimate} />
      <Animated.View
        style={[
          { backgroundColor: "orange", marginTop: 30 },
          { transform: [{ rotate: boxInterpolation }] },
        ]}
      >
        <Animated.Text style={{ fontSize: 25, padding: 20 }}>App</Animated.Text>
      </Animated.View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
