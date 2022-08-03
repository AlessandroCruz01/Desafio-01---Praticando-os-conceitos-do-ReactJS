import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Hello World</Text>

			<Text>{Date.now()}</Text>
		</View>
	);
}
