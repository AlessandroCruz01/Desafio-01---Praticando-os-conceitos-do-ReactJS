import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export default function Home() {
	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do evento</Text>

			{/* <Text>{Date.now()}</Text> */}

			<View style={styles.form}>
				<TextInput 
					style={styles.input} 
					placeholder="Nome do participante"
					placeholderTextColor={"#fff"}
				/>

				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>

			<Participant name="Alessandro Cruz"/>
			<Participant name="Diego Manuel"/>
			
		</View>
	);
}
