export class SessionStorage {
    static get<T>(key: string): T | null {
        try {
            const value = sessionStorage.getItem(key);
            if (!value) return null;
            return JSON.parse(value) as T;
        } catch (err) {
            console.error(
                `Error reading from SessionStorage [key: ${key}]:`,
                err,
            );
            return null;
        }
    }

    static set<T>(key: string, value: T): void {
        try {
            const serializedValue = JSON.stringify(value);
            sessionStorage.setItem(key, serializedValue);
        } catch (err) {
            console.error(`Error saving to SessionStorage [key: ${key}]:`, err);
        }
    }
}
