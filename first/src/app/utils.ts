export class StringUtils {
    public toUpperCase(arg: string) {
        if (typeof arg !== 'string' || arg.length <= 0) {
            throw new Error('Invalide argument');
        }
        return arg.toUpperCase();
    }
}
