
import { newDatabaseUsingSecret } from '../../../lib/core/resources/index';

export function apply(applyGenerator, resources, targetDir, props: any = {}) {
    return newDatabaseUsingSecret(resources, props.application, 'mysql', {
        'MYSQL_ROOT_PASSWORD': 'verysecretrootpassword',
        'MYSQL_DATABASE': { 'secret': props.secretName, 'key': 'database' },
        'MYSQL_USER': { 'secret': props.secretName, 'key': 'user'},
        'MYSQL_PASSWORD': { 'secret': props.secretName, 'key': 'password'}
    });
}

export function info() {
    return require('./info.json');
}