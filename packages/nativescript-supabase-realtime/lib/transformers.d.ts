/**
 * Helpers to convert the change Payload into native JS types.
 */
export declare enum PostgresTypes {
    abstime = "abstime",
    bool = "bool",
    date = "date",
    daterange = "daterange",
    float4 = "float4",
    float8 = "float8",
    int2 = "int2",
    int4 = "int4",
    int4range = "int4range",
    int8 = "int8",
    int8range = "int8range",
    json = "json",
    jsonb = "jsonb",
    money = "money",
    numeric = "numeric",
    oid = "oid",
    reltime = "reltime",
    time = "time",
    timestamp = "timestamp",
    timestamptz = "timestamptz",
    timetz = "timetz",
    tsrange = "tsrange",
    tstzrange = "tstzrange"
}
declare type Column = {
    flags: string[];
    name: string;
    type: string;
    type_modifier: number;
};
declare type Records = {
    [key: string]: string;
};
/**
 * Takes an array of columns and an object of string values then converts each string value
 * to its mapped type.
 *
 * @param {{name: String, type: String}[]} columns
 * @param {Object} records
 * @param {Object} options The map of various options that can be applied to the mapper
 * @param {Array} options.skipTypes The array of types that should not be converted
 *
 * @example convertChangeData([{name: 'first_name', type: 'text'}, {name: 'age', type: 'int4'}], {first_name: 'Paul', age:'33'}, {})
 * //=>{ first_name: 'Paul', age: 33 }
 */
export declare const convertChangeData: (columns: Column[], records: Records, options?: {
    skipTypes?: string[];
}) => {
    [key: string]: any;
};
/**
 * Converts the value of an individual column.
 *
 * @param {String} columnName The column that you want to convert
 * @param {{name: String, type: String}[]} columns All of the columns
 * @param {Object} records The map of string values
 * @param {Array} skipTypes An array of types that should not be converted
 * @return {object} Useless information
 *
 * @example convertColumn('age', [{name: 'first_name', type: 'text'}, {name: 'age', type: 'int4'}], ['Paul', '33'], [])
 * //=> 33
 * @example convertColumn('age', [{name: 'first_name', type: 'text'}, {name: 'age', type: 'int4'}], ['Paul', '33'], ['int4'])
 * //=> "33"
 */
export declare const convertColumn: (columnName: string, columns: Column[], records: Records, skipTypes: string[]) => any;
/**
 * If the value of the cell is `null`, returns null.
 * Otherwise converts the string value to the correct type.
 * @param {String} type A postgres column type
 * @param {String} stringValue The cell value
 *
 * @example convertCell('bool', 'true')
 * //=> true
 * @example convertCell('int8', '10')
 * //=> 10
 * @example convertCell('_int4', '{1,2,3,4}')
 * //=> [1,2,3,4]
 */
export declare const convertCell: (type: string, stringValue: string) => any;
export declare const toBoolean: (stringValue: string) => boolean;
export declare const toDate: (stringValue: string) => Date;
export declare const toDateRange: (stringValue: string) => Date[];
export declare const toFloat: (stringValue: string) => number;
export declare const toInt: (stringValue: string) => number;
export declare const toIntRange: (stringValue: string) => number[];
export declare const toJson: (stringValue: string) => any;
/**
 * Converts a Postgres Array into a native JS array
 *
 * @example toArray('{1,2,3,4}', 'int4')
 * //=> [1,2,3,4]
 * @example toArray('{}', 'int4')
 * //=> []
 */
export declare const toArray: (stringValue: string, type: string) => any[];
/**
 * Fixes timestamp to be ISO-8601. Swaps the space between the date and time for a 'T'
 * See https://github.com/supabase/supabase/issues/18
 *
 * @example toTimestampString('2019-09-10 00:00:00')
 * //=> '2019-09-10T00:00:00'
 */
export declare const toTimestampString: (stringValue: string) => string;
export {};
