export const local = {
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    add(key, value) {
        let storageValue = this.get(key);
        if (!storageValue) {
            this.set(key, JSON.stringify([]));
            storageValue = [];
        }

        let index = storageValue.findIndex(e => e.login == value.login);
        if (index == -1) storageValue.push({ ...value, lastView: new Date()});
        else storageValue[index].lastView = new Date();

        this.set(key, storageValue);
    },
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    remove(key) {
        localStorage.removeItem(key);
    }
};

export const session = {
    get(key) {
        return JSON.parse(sessionStorage.getItem(key));
    },
    set(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
};

export const keys = {
    MOST_VIEWED: 'MOST_VIEWED',
    LAST_SEARCH: 'LAST_SEARCH'
}