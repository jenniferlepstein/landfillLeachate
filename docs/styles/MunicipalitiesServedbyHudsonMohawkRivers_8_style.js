var size = 0;
var placement = 'point';
function categories_MunicipalitiesServedbyHudsonMohawkRivers_8(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Great Flats Aquifer':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(136,136,136,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(255,212,127,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hudson River':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(136,136,136,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(255,160,82,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mohawk River':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(136,136,136,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(121,151,220,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_MunicipalitiesServedbyHudsonMohawkRivers_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("source_name");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Franklin Gothic Medium\', sans-serif";
    var labelFill = "#1a1a1a";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("muni_name") !== null && resolution > 0 && resolution < 112) {
        labelText = String(feature.get("muni_name"));
    }
    
var style = categories_MunicipalitiesServedbyHudsonMohawkRivers_8(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
