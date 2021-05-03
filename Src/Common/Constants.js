import Api from './Api';
import SqlService from '../Common/SqlService';

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
};

export default Constants;