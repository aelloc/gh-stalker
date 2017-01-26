import moment from 'moment';

export function date(value) {
    return new Date(value).toLocaleDateString();
};

export function timeFromNow(value) {
    return moment(value).fromNow();
};