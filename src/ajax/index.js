import {ajax} from 'rxjs/observable/dom/ajax';


let defaultHeaders = {
    'Content-Type': 'application/json',
}

export const get = (url, headers) => {
    return ajax({url: url, method: 'GET', responseType: 'json', withCredentials: false, crossDomain: true, headers: Object.assign(defaultHeaders, headers)});
}

export const post = (url, headers) => {
    return ajax({url: url, method: 'POST', responseType: 'json', withCredentials: false, crossDomain: true, headers: Object.assign(defaultHeaders, headers)});
}