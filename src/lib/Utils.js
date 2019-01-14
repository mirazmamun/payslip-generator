import _ from 'lodash';
import CSVParser from 'papaparse';
/**
 * Validate a File object against list of valid file MIME types
 * 
 * @param {File} fileObj The File object
 * @param {Array<String>} acceptedMimeTypes List of accepted file MIME types
 * @returns {Boolean}       Will return the result of the validation, wrong argument will result in false
 */
export function validateMimeType(fileObj = null, acceptedMimeTypes = []) {
    if (_.isObject(fileObj) && fileObj instanceof File && !_.isEmpty(acceptedMimeTypes)) {
        let type = fileObj.type;
        acceptedMimeTypes = _.isArray(acceptedMimeTypes) ? acceptedMimeTypes : new Array(acceptedMimeTypes);
        if (_.indexOf(acceptedMimeTypes, fileObj)) {
            return true;
        }
    }
    return false;
}
/**
 * Read the file content of a File object
 * @param {File} fileObj 
 * @return {Promise}    the Promise object
 */
export function readFileContent(fileObj) {
    return new Promise((resolve, reject) => {
        if (_.isObject(fileObj) && fileObj instanceof File) {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                let csvResult = getCSVContentFromString(e.target.result);
                resolve(csvResult);
            }
            fileReader.onerror = function () {
                reject(e.error);
            }
            fileReader.readAsText(fileObj);
        } else {
            reject(new Error(`Invalid argument for fileObj`));
        }
    });
}
export function getCSVContentFromString(csvString) {
    const csvParserConfig = {
        header: true
    };
    return CSVParser.parse(csvString, csvParserConfig);
}
export default { validateMimeType, readFileContent, getCSVContentFromString };