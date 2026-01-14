import { Link } from "expo-router"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const LoginScreen = () => {
    return (
        <SafeAreaView>
            <Text>Hello, Login</Text>
            <Link href="/dashboard">Dashboard</Link>
        </SafeAreaView>
    )
}

export default LoginScreen