// import { Request } from "apollo-server-env";
// import { GraphQLRequestContext, GraphQLResponse } from "apollo-server-plugin-base";
// import chalk from "chalk";
// import { DocumentNode, GraphQLFormattedError, GraphQLResolveInfo } from "graphql";
// import { GraphQLExtension } from "graphql-extensions";
// import prettyBytes = require("pretty-bytes");

// interface FieldStat {
//     fieldName: string;
//     count: number;
// }
// interface FieldStats {
//     fields: { [name: string]: FieldStat };
// }

// type ExtensionResponse<TPropertyName extends EventName> = { [key in TPropertyName]: TelemetryPayload[] };

// export class GraphQLInsight<TContext extends ApolloConfigurationContext> implements GraphQLExtension<TContext> {
//     private static readonly MAX_CONSOLE_PARAM_CHAR = 80;
//     private startingTime: [number, number] | undefined;
//     private fieldResolved: number = 0;
//     private fieldStats: FieldStats = { fields: {} };
//     private extensionResponse: ExtensionResponse<EventName> = {
//         graphqlRequest: [],
//         apiRequest: [],
//         nodeEdge: [],
//     };
//     public constructor() {
//         //
//     }

//     public requestDidStart(o: {
//         request: Pick<Request, "url" | "method" | "headers">;
//         queryString?: string;
//         parsedQuery?: DocumentNode;
//         operationName?: string;
//         variables?: { [key: string]: any };
//         persistedQueryHit?: boolean;
//         persistedQueryRegister?: boolean;
//         context: TContext;
//         requestContext: GraphQLRequestContext<TContext>;
//     }) {
//         this.startingTime = process.hrtime();

//         return () => {
//             const totalNanoSecondsElapsed = process.hrtime(this.startingTime);
//             const totalMilliSecondsElaspsed = totalNanoSecondsElapsed[0] * 1000 + totalNanoSecondsElapsed[1] / 1000000;
//             const listUniqueEndpoints = o.context.stats.backendRequests;
//             let totalEndpoints = listUniqueEndpoints.length;
//             console.log(
//                 chalk.yellow.bgHex("#072F5F")(
//                     `New GraphQL Request: ${chalk.bold.bgHex("#1261A0")(o.operationName || "unknown")}`
//                 ) + chalk.blueBright(` [${Math.ceil(totalMilliSecondsElaspsed)} ms] `)
//             );

//             console.log(
//                 chalk.greenBright("🛫 Backend Request: ") +
//                     chalk.keyword(o.context.stats.prematureEnding ? "red" : "white")(totalEndpoints + "")
//             );
//             if (o.context.stats.prematureEnding) {
//                 console.log(
//                     "🛑  " +
//                         chalk.bgRed.white("REQUEST VALIDATION: ") +
//                         chalk.white("The count of request to the backend has reached the maximum threshold. ")
//                 );
//             }

//             listUniqueEndpoints.forEach((urlObj) => {
//                 console.log(
//                     chalk.green(`\tURL: `) +
//                         chalk.white(urlObj.url) +
//                         chalk.blueBright(` [${Math.ceil(urlObj.elapsedTimeMs)} ms] `) +
//                         chalk.white(`${prettyBytes(urlObj.totalBytes)}`)
//                 );
//                 const param = urlObj.urlSearchParams;
//                 const paramString = param.toString();
//                 if (paramString !== "") {
//                     let paramStringFormatted = paramString;
//                     if (paramString.length > GraphQLInsight.MAX_CONSOLE_PARAM_CHAR) {
//                         paramStringFormatted = paramString.substr(0, GraphQLInsight.MAX_CONSOLE_PARAM_CHAR) + "...";
//                     }
//                     console.log(chalk.green(`\t\tParam: `) + chalk.white(paramStringFormatted));
//                 }
//                 this.collectData(o.context, {
//                     kind: "EventPayload",
//                     name: "apiRequest",
//                     data: {
//                         url: urlObj.url,
//                         urlParameters: paramString,
//                         totalElapsedTimeMs: urlObj.elapsedTimeMs,
//                         totalBytes: urlObj.totalBytes,
//                     },
//                 });
//             });
//             console.log(chalk.greenBright("🏠  Field Resolved: ") + chalk.white(this.fieldResolved + ""));
//             const fields = Object.values(this.fieldStats.fields);
//             fields
//                 .sort((a, b) => {
//                     return b.count - a.count;
//                 })
//                 .forEach((f) => {
//                     console.log(chalk.greenBright(`\t${f.fieldName}: `) + chalk.white(f.count + ""));
//                     this.collectData(o.context, {
//                         kind: "EventPayload",
//                         name: "nodeEdge",
//                         data: {
//                             nodeEdgeName: f.fieldName,
//                             countInRequest: f.count,
//                         },
//                     });
//                 });
//             let totalBytes = 0;
//             let dataBytes = 0;
//             let errorBytes = 0;
//             let extensionsBytes = 0;

//             if (o.requestContext.response !== undefined) {
//                 const dataWarningThresholdSize = 1 * 1024 * 1024; // 5 megs
//                 const dataErrorThresholdSize = 5 * 1024 * 1024; // 5 megs
//                 console.log(chalk.green("📊  Response Payload Size"));
//                 this.colorSizeData(
//                     "Total",
//                     o.requestContext.response,
//                     dataWarningThresholdSize,
//                     dataErrorThresholdSize,
//                     1
//                 );
//                 this.colorSizeData(
//                     "Data",
//                     o.requestContext.response.data,
//                     dataWarningThresholdSize,
//                     dataErrorThresholdSize,
//                     2
//                 );
//                 this.colorSizeData(
//                     "Error",
//                     o.requestContext.response.errors,
//                     dataWarningThresholdSize,
//                     dataErrorThresholdSize,
//                     2
//                 );

//                 totalBytes = JSON.stringify(o.requestContext.response).length;
//                 dataBytes = JSON.stringify(o.requestContext.response.data || {}).length;
//                 errorBytes = JSON.stringify(o.requestContext.response.errors || []).length;
//                 extensionsBytes = JSON.stringify(o.requestContext.response.extensions || {}).length;

//                 if (o.requestContext.response.extensions !== undefined) {
//                     this.colorSizeData(
//                         "Extensions",
//                         o.requestContext.response.extensions,
//                         dataWarningThresholdSize,
//                         dataErrorThresholdSize,
//                         2
//                     );
//                     const extensions = Object.entries(o.requestContext.response.extensions);
//                     extensions.forEach((keyValue) => {
//                         this.colorSizeData(
//                             keyValue[0],
//                             keyValue[1],
//                             dataWarningThresholdSize,
//                             dataErrorThresholdSize,
//                             3
//                         );
//                     });
//                 }
//             }
//             this.collectData(o.context, {
//                 kind: "EventPayload",
//                 name: "graphqlRequest",
//                 data: {
//                     name: o.operationName || "Unknown",
//                     didEndPrematurely: o.context.stats.prematureEnding,
//                     totalFieldResolved: this.fieldResolved,
//                     totalBackendRequests: totalEndpoints,
//                     totalBytes,
//                     dataBytes,
//                     errorBytes,
//                     extensionsBytes,
//                     totalElapsedTimeMs: totalMilliSecondsElaspsed,
//                     queryString: o.queryString,
//                     queryVariables: o.variables,
//                 },
//             });
//         };
//     }
//     public willSendResponse?(o: {
//         graphqlResponse: GraphQLResponse;
//         context: TContext;
//     }): void | { graphqlResponse: GraphQLResponse; context: TContext } {
//         if (o.graphqlResponse.extensions === undefined) {
//             o.graphqlResponse.extensions = {};
//         }
//         o.graphqlResponse.extensions[GraphQLInsight.name] = this.extensionResponse;

//         if (o.graphqlResponse.errors !== undefined) {
//             let allArgumentsInfo: string[];
//             o.graphqlResponse.errors.forEach((e: GraphQLFormattedError | ErrorWithPayload) => {
//                 console.log(chalk.green(`💀  Error: `) + chalk.red(e.message));
//                 let payload = undefined;
//                 let name = undefined;

//                 if (isErrorWithOriginalError(e) && isErrorWithPayload(e.originalError)) {
//                     payload = e.originalError.payload;
//                     name = e.originalError.name;
//                 }
//                 this.collectData(o.context, {
//                     kind: "TracePayload",
//                     type: TraceType.Error,
//                     message: e.message,
//                     data: {
//                         queryArguments: allArgumentsInfo,
//                         queryLocations: isGraphQLFormattedError(e) ? `${e.locations}` : "",
//                         queryName: isGraphQLFormattedError(e) ? e.path?.join("->") : "",
//                         ...payload,
//                     },
//                     name: name,
//                 });
//             });
//         }
//         return o;
//     }

//     public willResolveField(
//         source: any,
//         args: { [argName: string]: any },
//         context: TContext,
//         info: GraphQLResolveInfo
//     ) {
//         this.fieldResolved++;
//         const name = this.getFieldName(info);
//         if (this.fieldStats.fields[name] === undefined) {
//             this.fieldStats.fields[name] = { count: 1, fieldName: name };
//         } else {
//             this.fieldStats.fields[name].count++;
//         }
//         return (error: Error | null, result: any) => {
//             // console.log("willResolveField STOP");
//         };
//     }

//     private collectData(context: TContext, telemetry: TelemetryPayload): void {
//         context.telemetry.send(telemetry);
//         if (telemetry.kind === "EventPayload") {
//             this.extensionResponse[telemetry.name].push(telemetry);
//         }
//     }

//     private getFieldName(info: GraphQLResolveInfo) {
//         if (info.fieldNodes && info.fieldNodes.length > 0 && info.fieldNodes[0].alias) {
//             return info.fieldNodes[0].alias.value;
//         }

//         return info.parentType.name + ">" + info.fieldName || "field";
//     }

//     private colorSizeData(
//         label: string,
//         data: any,
//         warningThreshold: number,
//         errorThreshold: number,
//         indentation: number
//     ): void {
//         if (data !== undefined) {
//             const totalDataBytes = JSON.stringify(data).length;
//             const color =
//                 totalDataBytes > warningThreshold ? (totalDataBytes > errorThreshold ? "red" : "yellow") : "white";
//             console.log(
//                 chalk.green(`${"\t".repeat(indentation)}${label}: ${chalk.keyword(color)(prettyBytes(totalDataBytes))}`)
//             );
//         }
//     }
// }
