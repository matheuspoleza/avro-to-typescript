import { avroToTypeScript, RecordType } from "avro-typescript";
import * as fs from 'fs';
 
const schemaText = fs.readFileSync("example.avsc", { encoding: "utf8" });
const schema = JSON.parse(schemaText) as RecordType;
console.log(avroToTypeScript(schema as RecordType));