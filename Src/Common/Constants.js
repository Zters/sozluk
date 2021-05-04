import Api from './Api';
import SqlService, { componentDidMount } from './SqlService';
import Tables from './Tables';

const Constants = {
    ...Api,
    siteUrl: "http://sozluk.gov.tr/",
    logo: "konum",
    SqlService: SqlService,
    Light: 'ZillaSlab-Light',
    Italic: 'ZillaSlab-Italic',
    Medium: 'ZillaSlab-Medium',
    Regular: 'ZillaSlab-Regular',
    Bold: 'ZillaSlab-Bold',
    Tables
};

export default Constants;