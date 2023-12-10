import { Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Bomba = () => {
	const navigation = useNavigation();
	return (
		<>
			<Text>Bomba</Text>
			<Button
				// legal a bomba do navigate tá com ts error fuck
				onPress={() => navigation.navigate("Tinder")}
				title="ir para tinder"
			/>
		</>
	);
};

export default Bomba;
