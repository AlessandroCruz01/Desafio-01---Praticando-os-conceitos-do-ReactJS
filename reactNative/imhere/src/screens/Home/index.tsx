import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";


export default function Home() {

	const [participantes, setParticipantes] = useState<string[]>([])
	const [participantName, setParticipanteName] = useState('')

	function handleParticipantAdd(){
		if(participantes.includes(participantName)){
			return Alert.alert("Participante","Ja existe um participante na lista com esse nome")
		}

		setParticipantes(prevState => [...prevState, participantName]) //Recupera o valor antigo e adiciona mais um
		setParticipanteName('')
	}

	function handleParticipantRemove(name: String){

		
	
		Alert.alert('Remover?', `Deseja remover o participante ${name}?`, [
			{
				text: 'Sim',
				onPress: () => setParticipantes(prevState => prevState.filter(participantes => participantes !== name))
			}, 
			{
				text: 'Não',
				style: 'cancel'
			}
		])
	}

	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do evento</Text>

			<Text>08/08/2022</Text>

			<View style={styles.form}>
				<TextInput 
					style={styles.input}
					placeholder="Nome do participante"
					placeholderTextColor={"#fff"}
					onChangeText={setParticipanteName}//Ja transfere o valor do estado para função
					value={participantName}
				/>

				<TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
					<Text style={styles.buttonText}>
						+
					</Text>
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
