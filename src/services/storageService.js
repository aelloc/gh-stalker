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
        
        if (!storageValue.some(e => e.login == value.login))
            storageValue.push(value);
            this.set(key, storageValue);
    },
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
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