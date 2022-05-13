import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------

//---------------- Object Destructuring--------------

// alt+Shift+A : commenter/decommenter

// const obj = {
//   name: "Aurore",
//   age: 36,
//   metier: "dev",
// };

// const { metier } = obj;
// console.log(`${obj.name} a ${obj.age} ans et veut devenir ${metier}`);

// --------------Array Destructuring -----------------

// const arr = ["andre", "aurore", "Prem", "marc"];
// const [name1, name2, ...rest] = arr;
// console.log(name1, rest);

//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
const CustomBtn = (props) => {
  const { label } = props;
  const { type } = props;
  // on peut mettre autant de cas que nous voulons
  // s'il n'y a aucun des cas qui correspond alors c'est le défault
  let colorBackground = "";

  let colorText = "white";

  // switch (type) {
  //   case "warning":
  //     colorBackground = "#ffc107";
  //     break;
  //   case "light":
  //     colorBackground = "#f8f9fa";
  //     break;
  //   case "light":
  //     colorBackground = "#f8f9fa";
  //     colorText = "black";
  //     break;
  //   default:
  //     colorText = "white";
  //     break;
  // }

  switch (type) {
    case "primary":
      colorBackground = "#007bff";
      break;
    case "secondary":
      colorBackground = "#6c757d";
      break;
    case "sucess":
      colorBackground = "#28a745";
      break;
    case "danger":
      colorBackground = "#dc3545";
      break;
    case "warning":
      colorBackground = "#ffc107";
      break;
    case "info":
      colorBackground = "#17a2b8";
      break;

    case "light":
      colorBackground = "#f8f9fa";
      colorText = "black";

      break;
    case "dark":
      colorBackground = "black";
      break;
    case "link":
      colorBackground = "transparent";
      colorText = "#007bff";
      break;

    default:
      colorBackground = "#6c757d";
      colorText = "white";
      break;
  }
  console.log(type);
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: colorBackground }]}
    >
      <Text style={[styles.text, { color: colorText }]}>{label}</Text>
    </TouchableOpacity>
  );
};

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <CustomBtn label="Danger" type="red" />
//     </View>
//   );
// };

export default function App() {
  return (
    <View style={styles.container}>
      <CustomBtn label="Primary" type="primary" />
      <CustomBtn label="Secondary" type="secondary" />
      <CustomBtn label="sucess" type="sucess" />
      <CustomBtn label="danger" type="danger" />
      <CustomBtn label="warning" type="warning" />
      <CustomBtn label="info" type="info" />
      <CustomBtn label="Light" type="light" />
      <CustomBtn label="Dark" type="dark" />
      <CustomBtn label="link" type="link" />
    </View>
  );
}

// mes styles container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  btn: {
    width: "60%",
    height: 70,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.51,
    shadowRadius: 13.32,
    elevation: 20,
    paddingHorizontal: 20,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center", //justifié le texte à la vertical, centré le texte à la vertical
  },
  text: {
    alignSelf: "center", //centré à l'horizontal
    textTransform: "uppercase",
    fontSize: 20,
  },
});
