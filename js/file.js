/**
 * <ul>
 *   <li>{@link _myspUtil_file.TextDownload}
 * </ul>
 * @constructor
 * 
 */
var _myspUtil_file = function ()
{
    return new _myspUtil_file.prototype.init();
}
_myspUtil_file.prototype = {
    /**
     * Constructor
     */
    init: function () {}
    ,
    /**
     * DownLoad for Text
     * 
     * @param  {string}  data         - download data(plain text)
     * @param  {string}  filename     - output filename
     * @param  {boolean} [nobom=false] - true: this file is not csv or no use for excel.
     * @return {void}
     */
    TextDownload: function (data, filename, nobom)
    {
        var bom = (nobom !== true) ? new Uint8Array([0xEF, 0xBB, 0xBF]) : '';
        var blob = new Blob([ bom, data ], { "type" : "text/plain" });

        if (window.navigator.msSaveBlob) {
            // Internet Explorer or Edge console.log('Download MS Browser');
            window.navigator.msSaveBlob(blob, filename); 
        } else {
            // console.log('Else Browser');
            var urlobj = window.URL.createObjectURL(blob);
            var a = document.createElement('a');

            document.body.appendChild(a);
            a.download = filename;
            a.href = urlobj;
            a.click();
            document.body.removeChild(a);
        }
    }
}
_myspUtil_file.prototype.init.prototype = _myspUtil_file.prototype;