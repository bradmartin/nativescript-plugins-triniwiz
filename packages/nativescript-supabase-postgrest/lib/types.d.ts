/**
 * Error format
 *
 * {@link https://postgrest.org/en/stable/api.html?highlight=options#errors-and-http-status-codes}
 */
declare type PostgrestError = {
    message: string;
    details: string;
    hint: string;
    code: string;
};
/**
 * Response format
 *
 * {@link https://github.com/supabase/supabase-js/issues/32}
 */
interface PostgrestResponseBase {
    status: number;
    statusText: string;
}
interface PostgrestResponseSuccess<T> extends PostgrestResponseBase {
    error: null;
    data: T[];
    body: T[];
    count: number | null;
}
interface PostgrestResponseFailure extends PostgrestResponseBase {
    error: PostgrestError;
    data: null;
    body: null;
    count: null;
}
export declare type PostgrestResponse<T> = PostgrestResponseSuccess<T> | PostgrestResponseFailure;
interface PostgrestSingleResponseSuccess<T> extends PostgrestResponseBase {
    error: null;
    data: T;
    body: T;
}
export declare type PostgrestSingleResponse<T> = PostgrestSingleResponseSuccess<T> | PostgrestResponseFailure;
export declare abstract class PostgrestBuilder<T> implements PromiseLike<PostgrestResponse<T>> {
    protected method: 'GET' | 'HEAD' | 'POST' | 'PATCH' | 'DELETE';
    protected url: URL;
    protected headers: {
        [key: string]: string;
    };
    protected schema?: string;
    protected body?: Partial<T> | Partial<T>[];
    constructor(builder: PostgrestBuilder<T>);
    then<TResult1 = PostgrestResponse<T>, TResult2 = never>(onfulfilled?: ((value: PostgrestResponse<T>) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): PromiseLike<TResult1 | TResult2>;
}
export {};
