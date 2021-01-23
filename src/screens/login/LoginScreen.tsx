import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Routes} from '../../navigation/routes';
import {Container} from '../../styles/login';
import Props from '../../interfaces/screen/loginScreenProps';
//
// ─── SCREEN LOGIN RENDER ────────────────────────────────────────────────────────
//
const loginScreen: React.FC<Props> = ({navigation}) => {
    function goTo() {
        navigation.navigate(Routes.TABS.name);
    }
    return (
        // <SafeAreaView>
        <Container>
            <Text style={{fontSize: 40}}>Ola mundo</Text>
            <Text onPress={goTo}>Ir</Text>
            <TouchableOpacity onPress={goTo}>
                <Text>OLA</Text>
            </TouchableOpacity>
        </Container>
        // </SafeAreaView>
    );
};

export default loginScreen;
