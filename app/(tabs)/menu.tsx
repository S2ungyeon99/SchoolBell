import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, BackHandler, StyleSheet, View } from "react-native";
import { WebView, WebView as WebViewType } from "react-native-webview";

const MealPlanScreen = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const webViewRef = useRef<WebViewType>(null);

  const mealUrl = "https://www.hanbat.ac.kr/prog/carteGuidance/kor/sub06_030301/C1/calendar.do";

  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      if (webViewRef.current) {
        webViewRef.current.goBack();
        return true;
      }
      return false;
    });

    return () => backHandler.remove(); // ✅ 최신 방식: removeEventListener 대신 remove()
  }, []);

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator
          size="large"
          color="#007AFF"
          style={styles.loader}
        />
      )}
      <WebView
        ref={webViewRef}
        source={{ uri: mealUrl }}
        onLoad={() => setLoading(false)}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript={`window.scrollTo(0, 730); true;`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
});

export default MealPlanScreen;
