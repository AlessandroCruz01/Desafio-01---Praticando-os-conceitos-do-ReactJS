import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

function handleParticipantRemove(name: String){
	console.log('On Remove ' + name)
}

export default function Home() {

	const participantes = [
		'Alessandro', 
		'Fernando', 
		'Renato', 
		'Manoel', 
		'Ana', 
		'Melissa', 
		'Lucas', 
		'Dorivaldo', 
		'Francisco', 
		'Douglas'
	]

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

			{/* Ativar a rolagem com o scrollView  (Carrega todos os componentes de uma vez na tela)*/}
			{/* RECOMENDADO PARA LISTAS PEQUENAS = EX: MENU*/}
			
			{/* <ScrollView showsVerticalScrollIndicator={false}>
				{
					participantes.map(participante => (
						<Participant 
							key={participante} 
							name={participante} 
							onRemove={() => handleParticipantRemove(`${participante}`)}/>
					))
				}
			</ScrollView> */}

			{/* Ativar a listagem com a flatList (So carrega o que cabe na tela, Muito mais performatica!)*/}
			{/* RECOMENDADO PARA LISTAS GRANDES*/}
			<FlatList 
				data={participantes} 
				keyExtractor={item => item}
				renderItem={({item}) => (
					<Participant 
						key={item} 
						name={item} 
						onRemove={() => handleParticipantRemove(`${item}`)}
					/>
				)}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={() => (
					<Text style={styles.listEmptyText}>
						Lista vazia! Adicione participantes.
					</Text>
				)}
			/>

		
		</View>
	);
}
