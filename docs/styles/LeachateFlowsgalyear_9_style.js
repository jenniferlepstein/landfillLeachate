var size = 0;
var placement = 'point';

var style_LeachateFlowsgalyear_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("avg_gal_yr");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Franklin Gothic Demi Cond\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get(" format_number(\"avg_gal_yr\")") !== null && resolution > 0 && resolution < 49) {
        labelText = String(feature.get(" format_number(\"avg_gal_yr\")"));
    }
    if (value >= 1.000000 && value <= 2943725.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,0,14,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2943725.000000 && value <= 10491821.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,0,14,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.369999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 10491821.000000 && value <= 21573850.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,0,14,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6.84}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
