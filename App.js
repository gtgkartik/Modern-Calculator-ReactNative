import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  const handleNumberClick = (number) => {
    if (number === "C") {
      setInput(""); // Clear the input
      setResult("0"); // Clear the result
    } else {
      setInput((prevInput) => prevInput + number);
    }
  };

  const handleOperatorClick = (operator) => {
    if (input !== "") {
      setInput((prevInput) => prevInput + operator);
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={7}
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.inputWrapper}>
          <View>
            <Text style={styles.result}>{result}</Text>
          </View>

          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-end",
              marginTop: 30,
            }}
          >
            <TextInput
              value={input}
              style={styles.input}
              placeholder="0"
              placeholderTextColor="#fff"
            />
          </ScrollView>

          <View style={styles.itemsRow}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleNumberClick("C")}
            >
              <Text style={styles.numbersTextC}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.numbersText}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleOperatorClick("/")}
            >
              <Text style={styles.numbersTextdiv}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleOperatorClick("*")}
            >
              <Text style={styles.numbersTextmul}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemsRow}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleNumberClick("1")}
            >
              <Text style={styles.numbersText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleNumberClick("2")}
            >
              <Text style={styles.numbersText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleNumberClick("3")}
            >
              <Text style={styles.numbersText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleOperatorClick("-")}
            >
              <Text style={styles.numbersText}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemsRow}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleNumberClick("4")}
            >
              <Text style={styles.numbersText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleNumberClick("5")}
            >
              <Text style={styles.numbersText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text
                style={styles.numbersText}
                onPress={() => handleNumberClick("6")}
              >
                6
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleOperatorClick("+")}
            >
              <Text style={styles.numbersText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemsRow4}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleNumberClick("7")}
            >
              <Text style={styles.numbersText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleNumberClick("8")}
            >
              <Text style={styles.numbersText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleNumberClick("9")}
            >
              <Text style={styles.numbersText}>9</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.itemsRowLast}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleNumberClick("0")}
            >
              <Text style={styles.numbersText}>0</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.btnEquals}> */}

        {/* </LinearGradient> */}

        <LinearGradient
          colors={["#b37ae3", "#e7a3b3"]}
          style={styles.btnEquals}
          onPress={calculateResult}
        >
          <TouchableOpacity onPress={calculateResult}>
            <Text style={styles.numbersText}>=</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
// #b37ae3
// #e7a3b3
const styles = StyleSheet.create({
  btnEquals: {
    position: "absolute",
    bottom: 145,
    right: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 165,
    width: 75,
    borderRadius: 100,
    backgroundColor: "#1d1d1d",
  },

  itemsRow4: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "75%",
  },
  numbersTextEquals: {
    position: "absolute",
    top: 30,
  },
  itemsRowLast: {
    marginTop: 15,
    flexDirection: "row",
    marginLeft: 94,
    width: "100%",
  },
  numbersTextmul: {
    fontSize: 28,
    color: "#ffffff",
  },
  numbersTextdiv: {
    fontSize: 30,
    color: "#ffffff",
  },
  numbersTextC: {
    color: "#b37ae2",
    fontSize: 30,
  },
  itemsRow: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  numbersText: {
    color: "#ffffff",
    fontSize: 29,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    width: 75,
    borderRadius: 100,
    backgroundColor: "#1d1d1d",
  },
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  image: {
    flex: 1,
    opacity: 0.7,
    paddingHorizontal: 10,
  },
  inputWrapper: {
    paddingTop: 40,
    flexDirection: "column",
  },
  input: {
    position: "relative",
    backgroundColor: "transparent",
    color: "#ffffff",
    height: 100,
    fontSize: 90,
    textAlign: "right",
  },
  result: {
    color: "#ffffff",
    textAlign: "right",
    fontSize: 30,
  },
  //   overlayView: {
  //     height: "100%",
  //     width: "100%",
  //     position: 'absolute',
  //     opacity:0.2,
  //     backgroundColor: 'rgba(0, 204, 0, 0.5)',

  // }
});
