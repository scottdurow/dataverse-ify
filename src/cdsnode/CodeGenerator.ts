// export class CodeGenerator {
//   static generate = false;
//   static generateCreate(entityLogicalName: string, record: any, response: EntityReference): any {
//     if (!CodeGenerator.generate)
//       return;
//     const entityShape = CodeGenerator.getObjectShape(record);
//     const responseShape = CodeGenerator.getObjectShape(response);
//     const codeOut = `
//             var record : {
//                 ${entityShape}} = ${JSON.stringify(record, null, 2)};
//         var response : {
//             ${responseShape}
//          } = await Xrm.WebApi.createRecord('${entityLogicalName}',record);`;
//     console.log(codeOut);
//   }
//   static generateExcecute(request: CdsSdk.WebApiExecuteRequest, response: any) {
//     if (!CodeGenerator.generate)
//       return;
//     const metadata = request.getMetadata();
//     let responseShape = "{}";
//     if (response.responseText && response.responseText.length > 0) {
//       responseShape = CodeGenerator.getObjectShape(JSON.parse(response.responseText));
//     }
//     // Get the execute parameters
//     let params = "";
//     for (const param in request) {
//       if (param == "getMetadata")
//         continue;
//       params += `    ${param} = ${JSON.stringify(request[param], null, 2)};
//             `;
//     }
//     const codeOut = `
// // Execute request
// var request = new class {
//     ${params}
//     getMetadata(): any {
//         return ${JSON.stringify(metadata, null, 2)};
//     };
// };
// var rawResponse = await Xrm.WebApi.online.execute(request);
// var response : {${responseShape}} = await rawResponse.json();
// `;
//     console.log(codeOut);
//   }
//   static generateRetrieveMultiple(response: Xrm.RetrieveMultipleResult, entityType: string, options?: string, maxPageSize?: number) {
//     if (!CodeGenerator.generate)
//       return;
//     let responseShape = "";
//     if (response.entities && response.entities.length > 0) {
//       responseShape = CodeGenerator.getObjectShape(response.entities[0]);
//     }
//     const codeOut = `
// // Retrieve Multiple
// var response : { entities: {
//     ${responseShape}}[], nextLink: string;} = await Xrm.WebApi.retrieveMultipleRecords(${JSON.stringify(entityType)},${JSON.stringify(options)},${JSON.stringify(maxPageSize)});
// `;
//     console.log(codeOut);
//   }
//   // For the purposes of using responses, the shape of the repsonse is created as an anonymous type
//   static getObjectShape(value: any) {
//     let objectShape = "";
//     for (const field of Object.keys(value).sort()) {
//       let fieldValueShape = "";
//       if (field.indexOf("@") > -1)
//         continue;
//       const fieldValue = value[field];
//       fieldValueShape = fieldValue ? fieldValue.constructor.name : "any";
//       if (fieldValueShape == "Array") {
//         if (fieldValue && fieldValue.length > 0) {
//           // Get the type of the array values
//           fieldValueShape = `{${CodeGenerator.getObjectShape(fieldValue[0])}}[]`;
//         }
//         else {
//           fieldValueShape = "any[]";
//         }
//       }
//       objectShape += `${field} : ${fieldValueShape};\n `;
//     }
//     return objectShape;
//   }
// }
