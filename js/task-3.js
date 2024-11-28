function getElementWidth(content,padding,border){
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2; 
    const borderWidth = parseFloat(border) * 2;
    const sum = contentWidth + paddingWidth + borderWidth;
    console.log(sum);
    
}
getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");