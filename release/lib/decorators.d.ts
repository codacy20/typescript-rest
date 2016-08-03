/// <reference path="../../typings/index.d.ts" />
import "reflect-metadata";
export declare function Path(path: string): (...args: any[]) => any;
export declare function AcceptLanguage(...languages: string[]): (...args: any[]) => any;
export declare function Accept(...accepts: string[]): (...args: any[]) => any;
export declare function Context(...args: any[]): any;
export declare function ContextRequest(...args: any[]): any;
export declare function ContextResponse(...args: any[]): any;
export declare function ContextNext(...args: any[]): any;
export declare function ContextLanguage(...args: any[]): any;
export declare function ContextAccept(...args: any[]): any;
export declare function GET(target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
export declare function POST(target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
export declare function PUT(target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
export declare function DELETE(target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
export declare function HEAD(target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
export declare function OPTIONS(target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
export declare function PATCH(target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
export declare function PathParam(name: string): (target: Object, propertyKey: string, parameterIndex: number) => void;
export declare function FileParam(name: string): (target: Object, propertyKey: string, parameterIndex: number) => void;
export declare function FilesParam(name: string): (target: Object, propertyKey: string, parameterIndex: number) => void;
export declare function QueryParam(name: string): (target: Object, propertyKey: string, parameterIndex: number) => void;
export declare function HeaderParam(name: string): (target: Object, propertyKey: string, parameterIndex: number) => void;
export declare function CookieParam(name: string): (target: Object, propertyKey: string, parameterIndex: number) => void;
export declare function FormParam(name: string): (target: Object, propertyKey: string, parameterIndex: number) => void;