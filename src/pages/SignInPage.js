import Checkbox from "expo-checkbox";
import { ArrowLeft, Eye, EyeClosed } from "lucide-react-native";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export function SignIn({ navigation }) {
    const [canSeePassword, setCanSeePassword] = useState(true);
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.arrowContainer}>
                <ArrowLeft size={40} color={'#14C871'} onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Acesse</Text>
                <Text style={styles.headerSubtitle}>com e-mail e senha</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>E-mail:</Text>
                    <TextInput placeholder="Digite seu E-mail" style={styles.textInput} keyboardType="email-address" />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Senha:</Text>
                    <View style={styles.passwordInputContainer}>
                        <TextInput
                            placeholder="Digite sua senha"
                            style={styles.passwordTextInput}
                            secureTextEntry={canSeePassword}
                        />
                        {canSeePassword ? (
                            <Eye onPress={() => setCanSeePassword(false)} />
                        ) : (
                            <EyeClosed onPress={() => setCanSeePassword(true)} />
                        )}
                    </View>
                </View>

                <View style={styles.optionsContainer}>
                    <View style={styles.checkboxContainer}>
                        <Checkbox
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#14C871' : undefined}
                        />
                        <Text style={styles.rememberText}>Lembrar senha</Text>
                    </View>
                    <View>
                        <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.registerButtonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.socialLoginContainer}>
                <View style={styles.line}></View>
                <Text>Ou continue com</Text>
                <View style={styles.line}></View>
            </View>

            <View style={styles.socialIconsContainer}>
                <Image source={require('../../assets/Google.png')} style={styles.socialIcon} />
                <Image source={require('../../assets/Facebook.png')} style={styles.socialIcon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    arrowContainer: {
        marginTop: 50,
        marginLeft: 20,
    },
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginLeft: 20,
        marginTop: 20,
    },
    headerTitle: {
        color: '#2a3844',
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'left',
    },
    headerSubtitle: {
        color: '#2a3844',
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'left',
    },
    formContainer: {
        maxWidth: '90%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginLeft: 20,
        marginTop: 20,
        gap: 20,
    },
    inputGroup: {
        gap: 10,
    },
    inputLabel: {
        color: '#2a3844',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'left',
    },
    textInput: {
        backgroundColor: '#E3E7F3',
        padding: 10,
        borderRadius: 8,
    },
    passwordInputContainer: {
        backgroundColor: '#E3E7F3',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20,
        borderRadius: 8,
    },
    passwordTextInput: {
        maxWidth: '90%',
        flex: 1,
        padding: 10,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    rememberText: {
        color: '#2a3844',
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'left',
    },
    forgotPasswordText: {
        color: '#2a3844',
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'left',
    },
    buttonsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%',
        marginTop: 30,
    },
    loginButton: {
        backgroundColor: '#14C871',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: 50,
        borderRadius: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    registerButton: {
        backgroundColor: 'transparent',
        borderColor: '#14C871',
        borderStyle: 'solid',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        height: 50,
        borderRadius: 10,
    },
    registerButtonText: {
        color: '#2a3844',
        fontWeight: '600',
        fontSize: 16,
    },
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 40,
        width: '90%',
        marginLeft: '5%',
    },
    line: {
        backgroundColor: '#2a3844',
        height: 1,
        width: '30%',
    },
    socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,
        width: '90%',
        marginLeft: '5%',
    },
    socialIcon: {
        width: 50,
        height: 50,
    },
});