export function exportCSVFile(headers, totalData, fileTitle){
    if(!totalData || !totalData.length){
        return null
    }
    const jsonObject = JSON.stringify(totalData)
   const result = convertToCSV(jsonObject, headers)
   if(!result){
       return null;
   }
        const blob = new Blob([result])
        const expartedFileName = fileTitle ? fileTitle+'.csv':'export.csv'
            if(navigator.msSaveBlob){
                navigator.msSaveBlob(blob, expartedFileName)
            } else if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
                const link = window.document.createElement('a')
                link.href='data:text/csv;charset=utf-8,' + encodeURI(result);
                link.target = "_blank"
                link.download=expartedFileName
                link.click()
            }else{
                const link = window.document.createElement('a')
                if(link.download !== undefined){
                    const url = URL.createObjectURL(blob)
                    link.setAttribute("href",url)
                    link.setAttribute("download", expartedFileName)
                    link.style.visibility='hidden'
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                }
            }
}
function convertToCSV(objArray, headers){
       const columnDelimiter = ','
       const lineDelimiter = '\r\n'
        const actualHeaderKey = Object.keys(headers)
        const headearToShow = Object.values(headers)
        let str = ''
        str+=headearToShow.join(columnDelimiter)
        str+=lineDelimiter
        const data = typeof objArray !=='object' ? JSON.parse(objArray):objArray
        data.forEach(obj=>{
        let line = ''
        actualHeaderKey.forEach(key=>{
            if(line != ''){
                line+=columnDelimiter
            }
            let strItem = obj[key]+''
            line+=strItem? strItem.replace(/,/g, ''):strItem
        })
        str+=line+lineDelimiter
    })
    
    return str;
}
