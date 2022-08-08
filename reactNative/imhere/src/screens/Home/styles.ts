import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: 'brown'
	},

	eventName: {
		color: "#fdfcfe",
		fontWeight: "bold",
		fontSize: 20,
		marginTop: 32
	},

	form: {
		width: '100%',
		flexDirection: "row",
		marginTop: 36,
		marginBottom: 42
	},

	input: {
		flex: 1,
		backgroundColor: "#1f1e25",
		height: 56,
		borderRadius: 5,
		padding: 16,
		fontSize: 16,
		color: "#fff",
		marginRight: 12
	},

	button :{
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: 'green',
		alignItems: 'center',
		justifyContent: 'center',
	},

	buttonText: {
		color: '#fff',
		fontSize: 15
	},

	listEmptyText: {
		color: '#fff',
		fontSize: 14,
		textAlign: 'center'
	}
});
