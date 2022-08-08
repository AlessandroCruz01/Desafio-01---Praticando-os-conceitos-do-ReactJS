import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Home() {
	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Hello World</Text>

			{/* <Text>{Date.now()}</Text> */}

			<View style={styles.form}>
				<TextInput 
					style={styles.input} 
					placeholder="Nome do participante"
					placeholderTextColor={"#fff"}
				/>

				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Submit</Text>
				</TouchableOpacity>
			</View>
			

		</View>
	);
}
