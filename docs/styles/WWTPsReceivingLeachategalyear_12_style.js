var size = 0;
var placement = 'point';

var style_WWTPsReceivingLeachategalyear_12 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("tot_gal_yr_in");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Franklin Gothic Medium\', sans-serif";
    var labelFill = "#7b5b10";
    var bufferColor = "#fafaf8";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("disp_name_2") !== null && resolution > 0 && resolution < 140) {
        labelText = String(feature.get("disp_name_2"));
    }
    if (value >= 1000.000000 && value <= 4138967.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(243,182,31,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 4138967.000000 && value <= 14667479.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(243,182,31,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 14667479.000000 && value <= 52521830.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(243,182,31,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
