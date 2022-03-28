import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import React, {useState} from 'react';

var token = "";
const TokenInput = () => {
	const [firstFile, setFirstFile] = useState('');
	let requestFiles = (e) => {
		fetch('https://wanderers.cloud/api/files', {
			headers: {
				'authentication': `${token}`,
			}
		}).then(res => res.json().then(res => {
			setFirstFile(res[0].originalName);
		}))
	}
	return (
		<View style={styles.container}>
			<TextInput style={{height: 40, color: "black"}} placeholder="typey typey" onChangeText={newText => token = newText}/>
			<Button title="Authorize" onPress={requestFiles}/>
			<Text>{firstFile}</Text>
		</View>
	);
}

export default function App() {
	return (
		<View style={styles.container}>
			<TokenInput> </TokenInput>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		color: "black",
		alignItems: 'center',
		justifyContent: 'center',
	},
});
