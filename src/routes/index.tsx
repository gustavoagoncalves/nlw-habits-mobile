// Contexto para que o app tenha acesso as rotas criadas no routes de qualquer lugar

import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes';

export function Routes() {
    return (
        <View className='flex-1 bg-background'>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    )
}