var size = 0;
var placement = 'point';

var style_LandfillsContributingLeachategalyear_11 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("tot_gal_yr_out");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Franklin Gothic Medium\', sans-serif";
    var labelFill = "#63000a";
    var bufferColor = "#fafaf8";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("disp_name_2") !== null && resolution > 0 && resolution < 336) {
        labelText = String(feature.get("disp_name_2"));
    }
    if (value >= 1000.000000 && value <= 2943725.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.8 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(204,0,14,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2943725.000000 && value <= 14667479.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.4 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(204,0,14,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 14667479.000000 && value <= 24086437.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(204,0,14,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
