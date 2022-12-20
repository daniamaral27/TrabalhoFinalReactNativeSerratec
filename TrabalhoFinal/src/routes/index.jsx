import { RotasPrivadas } from './RotasPrivadas';
import { RotasPublicas } from './RotasPublicas';
import { useContext } from 'react'
import AuthContext from '../contexts/AuthContext';
import { View, ActivityIndicator } from 'react-native';

const Routes = () => {
    const { logado, } = useContext(AuthContext)

    return logado ? <RotasPrivadas /> : <RotasPublicas />
}

export default Routes;