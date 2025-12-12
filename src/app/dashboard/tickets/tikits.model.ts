export interface Tikets {
    id: string;
    title: string;
    request: string;
    status: 'open' | 'closed';
}