import {NavigationProp} from '@react-navigation/native';

export default interface Props
    extends NavigationProp<Record<string, object | undefined>> {
    routes: any;
    navigation: any;
    // eslint-disable-next-line semi
}
