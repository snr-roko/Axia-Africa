import { Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"

const LandingScreen = () => {
    return (
        <SafeAreaView>
            <Link href="/login">Login</Link>
        </SafeAreaView>
    )
}

export default LandingScreen