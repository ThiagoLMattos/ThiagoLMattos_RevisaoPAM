import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import '../../assets/Google.png';

export function LoginPage({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/casual_dog.png')} style={styles.mainImage} />
            </View>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Ótimo dia!</Text>
                <Text style={styles.subtitle}>Como deseja acessar?</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={styles.googleButton}
                >
                    <Image source={require('../../assets/Google.png')} style={styles.googleIcon} />
                    <Text style={styles.googleButtonText}>Como deseja acessar?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.optionsButton}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.optionsButtonText}>Outras opções</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        marginVertical: 70,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainImage: {
        width: '90%',
        resizeMode: 'contain',
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
    },
    buttonsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 30,
        gap: 20,
    },
    googleButton: {
        backgroundColor: '#14C871',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 50,
        borderRadius: 10,
    },
    googleIcon: {
        width: 24,
        height: 24,
        position: 'absolute',
        left: 25,
    },
    googleButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    optionsButton: {
        backgroundColor: 'transparent',
        borderColor: '#14C871',
        borderStyle: 'solid',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 50,
        borderRadius: 10,
    },
    optionsButtonText: {
        color: '#2a3844',
        fontWeight: '600',
        fontSize: 16,
    },
});