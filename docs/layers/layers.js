ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:6347").setExtent([452410.604700, 4582554.149961, 707723.082800, 4811027.850039]);
var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Basemap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_StateBoundaries_1 = new ol.format.GeoJSON();
var features_StateBoundaries_1 = format_StateBoundaries_1.readFeatures(json_StateBoundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_StateBoundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateBoundaries_1.addFeatures(features_StateBoundaries_1);
var lyr_StateBoundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateBoundaries_1, 
                style: style_StateBoundaries_1,
                popuplayertitle: "State Boundaries",
                interactive: false,
                title: '<img src="styles/legend/StateBoundaries_1.png" /> State Boundaries'
            });
var format_StudyArea_2 = new ol.format.GeoJSON();
var features_StudyArea_2 = format_StudyArea_2.readFeatures(json_StudyArea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_StudyArea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StudyArea_2.addFeatures(features_StudyArea_2);
var lyr_StudyArea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StudyArea_2, 
                style: style_StudyArea_2,
                popuplayertitle: "Study Area",
                interactive: false,
                title: '<img src="styles/legend/StudyArea_2.png" /> Study Area'
            });
var format_CountyBoundaries_3 = new ol.format.GeoJSON();
var features_CountyBoundaries_3 = format_CountyBoundaries_3.readFeatures(json_CountyBoundaries_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_CountyBoundaries_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyBoundaries_3.addFeatures(features_CountyBoundaries_3);
var lyr_CountyBoundaries_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountyBoundaries_3, 
                style: style_CountyBoundaries_3,
                popuplayertitle: "County Boundaries",
                interactive: false,
                title: '<img src="styles/legend/CountyBoundaries_3.png" /> County Boundaries'
            });
var format_TownBoundaries_4 = new ol.format.GeoJSON();
var features_TownBoundaries_4 = format_TownBoundaries_4.readFeatures(json_TownBoundaries_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_TownBoundaries_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TownBoundaries_4.addFeatures(features_TownBoundaries_4);
var lyr_TownBoundaries_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TownBoundaries_4,
maxResolution:196.03126306583374,
 
                style: style_TownBoundaries_4,
                popuplayertitle: "Town Boundaries",
                interactive: false,
                title: '<img src="styles/legend/TownBoundaries_4.png" /> Town Boundaries'
            });
var format_Villages_5 = new ol.format.GeoJSON();
var features_Villages_5 = format_Villages_5.readFeatures(json_Villages_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_Villages_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villages_5.addFeatures(features_Villages_5);
var lyr_Villages_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Villages_5, 
                style: style_Villages_5,
                popuplayertitle: "Villages",
                interactive: false,
                title: '<img src="styles/legend/Villages_5.png" /> Villages'
            });
var format_Cities_6 = new ol.format.GeoJSON();
var features_Cities_6 = format_Cities_6.readFeatures(json_Cities_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_Cities_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cities_6.addFeatures(features_Cities_6);
var lyr_Cities_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cities_6, 
                style: style_Cities_6,
                popuplayertitle: "Cities",
                interactive: false,
                title: '<img src="styles/legend/Cities_6.png" /> Cities'
            });
var format_Rivers_7 = new ol.format.GeoJSON();
var features_Rivers_7 = format_Rivers_7.readFeatures(json_Rivers_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_Rivers_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rivers_7.addFeatures(features_Rivers_7);
var lyr_Rivers_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rivers_7, 
                style: style_Rivers_7,
                popuplayertitle: "Rivers",
                interactive: false,
                title: '<img src="styles/legend/Rivers_7.png" /> Rivers'
            });
var format_NYSPotentialEnvironmentalJusticeAreas_8 = new ol.format.GeoJSON();
var features_NYSPotentialEnvironmentalJusticeAreas_8 = format_NYSPotentialEnvironmentalJusticeAreas_8.readFeatures(json_NYSPotentialEnvironmentalJusticeAreas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_NYSPotentialEnvironmentalJusticeAreas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NYSPotentialEnvironmentalJusticeAreas_8.addFeatures(features_NYSPotentialEnvironmentalJusticeAreas_8);
var lyr_NYSPotentialEnvironmentalJusticeAreas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NYSPotentialEnvironmentalJusticeAreas_8, 
                style: style_NYSPotentialEnvironmentalJusticeAreas_8,
                popuplayertitle: "NYS Potential Environmental Justice Areas",
                interactive: false,
                title: '<img src="styles/legend/NYSPotentialEnvironmentalJusticeAreas_8.png" /> NYS Potential Environmental Justice Areas'
            });
var format_MunicipalitiesServedbyHudsonMohawkRivers_9 = new ol.format.GeoJSON();
var features_MunicipalitiesServedbyHudsonMohawkRivers_9 = format_MunicipalitiesServedbyHudsonMohawkRivers_9.readFeatures(json_MunicipalitiesServedbyHudsonMohawkRivers_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_MunicipalitiesServedbyHudsonMohawkRivers_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalitiesServedbyHudsonMohawkRivers_9.addFeatures(features_MunicipalitiesServedbyHudsonMohawkRivers_9);
var lyr_MunicipalitiesServedbyHudsonMohawkRivers_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalitiesServedbyHudsonMohawkRivers_9, 
                style: style_MunicipalitiesServedbyHudsonMohawkRivers_9,
                popuplayertitle: "Municipalities Served by Hudson & Mohawk Rivers",
                interactive: true,
    title: 'Municipalities Served by Hudson & Mohawk Rivers<br />\
    <img src="styles/legend/MunicipalitiesServedbyHudsonMohawkRivers_9_0.png" /> Great Flats Aquifer<br />\
    <img src="styles/legend/MunicipalitiesServedbyHudsonMohawkRivers_9_1.png" /> Hudson River<br />\
    <img src="styles/legend/MunicipalitiesServedbyHudsonMohawkRivers_9_2.png" /> Mohawk River<br />'
        });
var format_LeachateFlowsgalyear_10 = new ol.format.GeoJSON();
var features_LeachateFlowsgalyear_10 = format_LeachateFlowsgalyear_10.readFeatures(json_LeachateFlowsgalyear_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_LeachateFlowsgalyear_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeachateFlowsgalyear_10.addFeatures(features_LeachateFlowsgalyear_10);
var lyr_LeachateFlowsgalyear_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeachateFlowsgalyear_10, 
                style: style_LeachateFlowsgalyear_10,
                popuplayertitle: "Leachate Flows (gal/year)",
                interactive: true,
    title: 'Leachate Flows (gal/year)<br />\
    <img src="styles/legend/LeachateFlowsgalyear_10_0.png" /> < 3,000,000<br />\
    <img src="styles/legend/LeachateFlowsgalyear_10_1.png" /> 3,000,000 - 15,000,000<br />\
    <img src="styles/legend/LeachateFlowsgalyear_10_2.png" /> 15,000,000 - 24,000,000<br />'
        });
var format_LandfillsContributingLeachategalyear_11 = new ol.format.GeoJSON();
var features_LandfillsContributingLeachategalyear_11 = format_LandfillsContributingLeachategalyear_11.readFeatures(json_LandfillsContributingLeachategalyear_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_LandfillsContributingLeachategalyear_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandfillsContributingLeachategalyear_11.addFeatures(features_LandfillsContributingLeachategalyear_11);
var lyr_LandfillsContributingLeachategalyear_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandfillsContributingLeachategalyear_11, 
                style: style_LandfillsContributingLeachategalyear_11,
                popuplayertitle: "Landfills Contributing Leachate (gal/year)",
                interactive: true,
    title: 'Landfills Contributing Leachate (gal/year)<br />\
    <img src="styles/legend/LandfillsContributingLeachategalyear_11_0.png" /> < 3,000,000<br />\
    <img src="styles/legend/LandfillsContributingLeachategalyear_11_1.png" /> 3,000,000 - 15,000,000<br />\
    <img src="styles/legend/LandfillsContributingLeachategalyear_11_2.png" /> 15,000,000 - 24,000,000<br />'
        });
var format_WWTPsReceivingLeachategalyear_12 = new ol.format.GeoJSON();
var features_WWTPsReceivingLeachategalyear_12 = format_WWTPsReceivingLeachategalyear_12.readFeatures(json_WWTPsReceivingLeachategalyear_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_WWTPsReceivingLeachategalyear_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WWTPsReceivingLeachategalyear_12.addFeatures(features_WWTPsReceivingLeachategalyear_12);
var lyr_WWTPsReceivingLeachategalyear_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WWTPsReceivingLeachategalyear_12, 
                style: style_WWTPsReceivingLeachategalyear_12,
                popuplayertitle: "WWTPs Receiving Leachate (gal/year)",
                interactive: true,
    title: 'WWTPs Receiving Leachate (gal/year)<br />\
    <img src="styles/legend/WWTPsReceivingLeachategalyear_12_0.png" /> < 4,000,000<br />\
    <img src="styles/legend/WWTPsReceivingLeachategalyear_12_1.png" /> 4,000,000 - 15,000,000<br />\
    <img src="styles/legend/WWTPsReceivingLeachategalyear_12_2.png" /> 15,000,000 - 53,000,000<br />'
        });
var format_DrinkingWaterIntakespopserved_13 = new ol.format.GeoJSON();
var features_DrinkingWaterIntakespopserved_13 = format_DrinkingWaterIntakespopserved_13.readFeatures(json_DrinkingWaterIntakespopserved_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6347'});
var jsonSource_DrinkingWaterIntakespopserved_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrinkingWaterIntakespopserved_13.addFeatures(features_DrinkingWaterIntakespopserved_13);
var lyr_DrinkingWaterIntakespopserved_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrinkingWaterIntakespopserved_13, 
                style: style_DrinkingWaterIntakespopserved_13,
                popuplayertitle: "Drinking Water Intakes (pop served)",
                interactive: true,
    title: 'Drinking Water Intakes (pop served)<br />\
    <img src="styles/legend/DrinkingWaterIntakespopserved_13_0.png" /> < 13,000<br />\
    <img src="styles/legend/DrinkingWaterIntakespopserved_13_1.png" /> 13,000 - 28,000<br />\
    <img src="styles/legend/DrinkingWaterIntakespopserved_13_2.png" /> 28,000 - 86,000<br />'
        });
var group_FacilityLeachateInformation = new ol.layer.Group({
                                layers: [lyr_MunicipalitiesServedbyHudsonMohawkRivers_9,lyr_LeachateFlowsgalyear_10,lyr_LandfillsContributingLeachategalyear_11,lyr_WWTPsReceivingLeachategalyear_12,lyr_DrinkingWaterIntakespopserved_13,],
                                fold: "open",
                                title: "Facility & Leachate Information"});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_Basemap_0,lyr_StateBoundaries_1,lyr_StudyArea_2,lyr_CountyBoundaries_3,lyr_TownBoundaries_4,lyr_Villages_5,lyr_Cities_6,lyr_Rivers_7,lyr_NYSPotentialEnvironmentalJusticeAreas_8,],
                                fold: "open",
                                title: "Basemap"});

lyr_Basemap_0.setVisible(true);lyr_StateBoundaries_1.setVisible(true);lyr_StudyArea_2.setVisible(true);lyr_CountyBoundaries_3.setVisible(true);lyr_TownBoundaries_4.setVisible(true);lyr_Villages_5.setVisible(true);lyr_Cities_6.setVisible(true);lyr_Rivers_7.setVisible(true);lyr_NYSPotentialEnvironmentalJusticeAreas_8.setVisible(false);lyr_MunicipalitiesServedbyHudsonMohawkRivers_9.setVisible(false);lyr_LeachateFlowsgalyear_10.setVisible(false);lyr_LandfillsContributingLeachategalyear_11.setVisible(false);lyr_WWTPsReceivingLeachategalyear_12.setVisible(true);lyr_DrinkingWaterIntakespopserved_13.setVisible(true);
var layersList = [group_Basemap,group_FacilityLeachateInformation];
lyr_StateBoundaries_1.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_StudyArea_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'objectid': 'objectid', 'name': 'name', 'area': 'area', });
lyr_CountyBoundaries_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'ABBREV': 'ABBREV', 'GNIS_ID': 'GNIS_ID', 'FIPS_CODE': 'FIPS_CODE', 'SWIS': 'SWIS', 'NYSP_ZONE': 'NYSP_ZONE', 'POP1990': 'POP1990', 'POP2000': 'POP2000', 'POP2010': 'POP2010', 'POP2020': 'POP2020', 'DOS_LL': 'DOS_LL', 'DOSLL_DATE': 'DOSLL_DATE', 'NYC': 'NYC', 'CALC_SQ_MI': 'CALC_SQ_MI', 'DATEMOD': 'DATEMOD', });
lyr_TownBoundaries_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'MUNI_TYPE': 'MUNI_TYPE', 'MUNITYCODE': 'MUNITYCODE', 'COUNTY': 'COUNTY', 'GNIS_ID': 'GNIS_ID', 'FIPS_CODE': 'FIPS_CODE', 'SWIS': 'SWIS', 'POP1990': 'POP1990', 'POP2000': 'POP2000', 'POP2010': 'POP2010', 'POP2020': 'POP2020', 'DOS_LL': 'DOS_LL', 'DOSLL_DATE': 'DOSLL_DATE', 'MAP_SYMBOL': 'MAP_SYMBOL', 'CALC_SQ_MI': 'CALC_SQ_MI', 'DATEMOD': 'DATEMOD', });
lyr_Villages_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'objectid': 'objectid', 'name': 'name', 'town': 'town', 'county': 'county', 'gnis_id': 'gnis_id', 'fips_code': 'fips_code', 'swis': 'swis', 'pop1990': 'pop1990', 'pop2000': 'pop2000', 'pop2010': 'pop2010', 'pop2020': 'pop2020', 'dos_ll': 'dos_ll', 'dosll_date': 'dosll_date', 'map_symbol': 'map_symbol', 'calc_sq_mi': 'calc_sq_mi', 'datemod': 'datemod', 'muni_type': 'muni_type', });
lyr_Cities_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'objectid': 'objectid', 'name': 'name', 'muni_type': 'muni_type', 'munitycode': 'munitycode', 'county': 'county', 'gnis_id': 'gnis_id', 'fips_code': 'fips_code', 'swis': 'swis', 'pop1990': 'pop1990', 'pop2000': 'pop2000', 'pop2010': 'pop2010', 'pop2020': 'pop2020', 'dos_ll': 'dos_ll', 'dosll_date': 'dosll_date', 'map_symbol': 'map_symbol', 'calc_sq_mi': 'calc_sq_mi', 'datemod': 'datemod', });
lyr_Rivers_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'name': 'name', });
lyr_NYSPotentialEnvironmentalJusticeAreas_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GEOID_DATA': 'GEOID_DATA', 'BPOVRATE': 'BPOVRATE', 'MINPOPCOUNT': 'MINPOPCOUNT', 'MINPOPRATE': 'MINPOPRATE', 'PEJA': 'PEJA', 'in_dw_area': 'in_dw_area', });
lyr_MunicipalitiesServedbyHudsonMohawkRivers_9.set('fieldAliases', {'id': 'id', 'muni_name': 'Municipality', 'muni_type': 'Type', 'num_intakes': 'Number of Drinking Water Intakes Serving the Municipality', 'num_pws': 'Number of Public Water Supplies Serving the Municipality', 'tot_pop': 'Total Population Served', 'num_viols': 'num_viols', 'source_name': 'Water Source Name', });
lyr_LeachateFlowsgalyear_10.set('fieldAliases', {'id': 'id', 'src_name': 'Landfill Name', 'dest_name': 'WWTP Name', 'year_start': 'year_start', 'year_end': 'year_end', 'avg_gal_yr': 'Leachate Gallons/Year (Average)', 'avg_gal_day': 'Leachate Gallons/Day (Average)', 'avg_cost_gal': 'Cost/Gallon (Average)', 'dest_spdes': 'dest_spdes', });
lyr_LandfillsContributingLeachategalyear_11.set('fieldAliases', {'src_name': 'Landfill Name', 'disp_name': 'disp_name', 'disp_name_2': 'disp_name_2', 'tot_gal_yr_out': 'Leachate Gallons/Year (Average)', 'tot_gal_day_out': 'Leachate Gallons/Day (Average)', });
lyr_WWTPsReceivingLeachategalyear_12.set('fieldAliases', {'dest_name': 'WWTP Name', 'disp_name': 'disp_name', 'disp_name_2': 'disp_name_2', 'tot_gal_yr_in': 'Leachate Gallons/Year (Average)', 'tot_gal_day_in': 'Leachate Gallons/Day (Average)', 'avg_cost_gal': 'Cost Per Gallon (Average)', 'num_landfills_in': 'Number of Landfills Contributing', 'dest_spdes': 'dest_spdes', });
lyr_DrinkingWaterIntakespopserved_13.set('fieldAliases', {'intake_f_name': 'Intake Name', 'disp_name': 'disp_name', 'disp_name_2': 'disp_name_2', 'total_pop': 'Population Served', });
lyr_StateBoundaries_1.set('fieldImages', {'fid': 'TextEdit', 'STATEFP': 'TextEdit', 'STATENS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_StudyArea_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'objectid': 'TextEdit', 'name': 'TextEdit', 'area': '', });
lyr_CountyBoundaries_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'ABBREV': 'TextEdit', 'GNIS_ID': 'TextEdit', 'FIPS_CODE': 'TextEdit', 'SWIS': 'TextEdit', 'NYSP_ZONE': 'TextEdit', 'POP1990': 'Range', 'POP2000': 'Range', 'POP2010': 'Range', 'POP2020': 'Range', 'DOS_LL': 'TextEdit', 'DOSLL_DATE': 'DateTime', 'NYC': 'TextEdit', 'CALC_SQ_MI': 'TextEdit', 'DATEMOD': 'DateTime', });
lyr_TownBoundaries_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'MUNI_TYPE': 'TextEdit', 'MUNITYCODE': 'Range', 'COUNTY': 'TextEdit', 'GNIS_ID': 'TextEdit', 'FIPS_CODE': 'TextEdit', 'SWIS': 'TextEdit', 'POP1990': 'Range', 'POP2000': 'Range', 'POP2010': 'Range', 'POP2020': 'Range', 'DOS_LL': 'TextEdit', 'DOSLL_DATE': 'DateTime', 'MAP_SYMBOL': 'TextEdit', 'CALC_SQ_MI': 'TextEdit', 'DATEMOD': 'DateTime', });
lyr_Villages_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'objectid': 'TextEdit', 'name': 'TextEdit', 'town': 'TextEdit', 'county': 'TextEdit', 'gnis_id': 'TextEdit', 'fips_code': 'TextEdit', 'swis': 'TextEdit', 'pop1990': 'Range', 'pop2000': 'Range', 'pop2010': 'Range', 'pop2020': 'Range', 'dos_ll': 'TextEdit', 'dosll_date': 'DateTime', 'map_symbol': 'TextEdit', 'calc_sq_mi': 'TextEdit', 'datemod': 'DateTime', 'muni_type': 'TextEdit', });
lyr_Cities_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'objectid': 'TextEdit', 'name': 'TextEdit', 'muni_type': 'TextEdit', 'munitycode': 'Range', 'county': 'TextEdit', 'gnis_id': 'TextEdit', 'fips_code': 'TextEdit', 'swis': 'TextEdit', 'pop1990': 'Range', 'pop2000': 'Range', 'pop2010': 'Range', 'pop2020': 'Range', 'dos_ll': 'TextEdit', 'dosll_date': 'DateTime', 'map_symbol': 'TextEdit', 'calc_sq_mi': 'TextEdit', 'datemod': 'DateTime', });
lyr_Rivers_7.set('fieldImages', {'fid': '', 'OBJECTID': '', 'name': '', });
lyr_NYSPotentialEnvironmentalJusticeAreas_8.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GEOID_DATA': 'TextEdit', 'BPOVRATE': 'TextEdit', 'MINPOPCOUNT': 'TextEdit', 'MINPOPRATE': 'TextEdit', 'PEJA': 'TextEdit', 'in_dw_area': '', });
lyr_MunicipalitiesServedbyHudsonMohawkRivers_9.set('fieldImages', {'id': 'TextEdit', 'muni_name': 'TextEdit', 'muni_type': 'TextEdit', 'num_intakes': 'TextEdit', 'num_pws': 'TextEdit', 'tot_pop': 'TextEdit', 'num_viols': 'TextEdit', 'source_name': 'TextEdit', });
lyr_LeachateFlowsgalyear_10.set('fieldImages', {'id': 'TextEdit', 'src_name': 'TextEdit', 'dest_name': 'TextEdit', 'year_start': '', 'year_end': '', 'avg_gal_yr': 'TextEdit', 'avg_gal_day': 'TextEdit', 'avg_cost_gal': 'TextEdit', 'dest_spdes': 'TextEdit', });
lyr_LandfillsContributingLeachategalyear_11.set('fieldImages', {'src_name': 'TextEdit', 'disp_name': '', 'disp_name_2': '', 'tot_gal_yr_out': 'TextEdit', 'tot_gal_day_out': 'TextEdit', });
lyr_WWTPsReceivingLeachategalyear_12.set('fieldImages', {'dest_name': 'TextEdit', 'disp_name': '', 'disp_name_2': '', 'tot_gal_yr_in': 'TextEdit', 'tot_gal_day_in': 'TextEdit', 'avg_cost_gal': 'TextEdit', 'num_landfills_in': 'TextEdit', 'dest_spdes': 'TextEdit', });
lyr_DrinkingWaterIntakespopserved_13.set('fieldImages', {'intake_f_name': 'TextEdit', 'disp_name': '', 'disp_name_2': '', 'total_pop': 'TextEdit', });
lyr_StateBoundaries_1.set('fieldLabels', {'fid': 'inline label - always visible', 'STATEFP': 'inline label - always visible', 'STATENS': 'inline label - always visible', 'AFFGEOID': 'inline label - always visible', 'GEOID': 'inline label - always visible', 'STUSPS': 'inline label - always visible', 'NAME': 'inline label - always visible', 'LSAD': 'inline label - always visible', 'ALAND': 'inline label - always visible', 'AWATER': 'inline label - always visible', });
lyr_StudyArea_2.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'inline label - always visible', 'objectid': 'inline label - always visible', 'name': 'inline label - always visible', 'area': 'inline label - always visible', });
lyr_CountyBoundaries_3.set('fieldLabels', {'fid': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'NAME': 'inline label - always visible', 'ABBREV': 'inline label - always visible', 'GNIS_ID': 'inline label - always visible', 'FIPS_CODE': 'inline label - always visible', 'SWIS': 'inline label - always visible', 'NYSP_ZONE': 'inline label - always visible', 'POP1990': 'inline label - always visible', 'POP2000': 'inline label - always visible', 'POP2010': 'inline label - always visible', 'POP2020': 'inline label - always visible', 'DOS_LL': 'inline label - always visible', 'DOSLL_DATE': 'inline label - always visible', 'NYC': 'inline label - always visible', 'CALC_SQ_MI': 'inline label - always visible', 'DATEMOD': 'inline label - always visible', });
lyr_TownBoundaries_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAME': 'no label', 'MUNI_TYPE': 'no label', 'MUNITYCODE': 'no label', 'COUNTY': 'no label', 'GNIS_ID': 'no label', 'FIPS_CODE': 'no label', 'SWIS': 'no label', 'POP1990': 'no label', 'POP2000': 'no label', 'POP2010': 'no label', 'POP2020': 'no label', 'DOS_LL': 'no label', 'DOSLL_DATE': 'no label', 'MAP_SYMBOL': 'no label', 'CALC_SQ_MI': 'no label', 'DATEMOD': 'no label', });
lyr_Villages_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'objectid': 'hidden field', 'name': 'inline label - always visible', 'town': 'hidden field', 'county': 'hidden field', 'gnis_id': 'hidden field', 'fips_code': 'hidden field', 'swis': 'hidden field', 'pop1990': 'hidden field', 'pop2000': 'hidden field', 'pop2010': 'hidden field', 'pop2020': 'hidden field', 'dos_ll': 'hidden field', 'dosll_date': 'hidden field', 'map_symbol': 'hidden field', 'calc_sq_mi': 'hidden field', 'datemod': 'hidden field', 'muni_type': 'hidden field', });
lyr_Cities_6.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'objectid': 'hidden field', 'name': 'inline label - always visible', 'muni_type': 'hidden field', 'munitycode': 'hidden field', 'county': 'hidden field', 'gnis_id': 'hidden field', 'fips_code': 'hidden field', 'swis': 'hidden field', 'pop1990': 'hidden field', 'pop2000': 'hidden field', 'pop2010': 'hidden field', 'pop2020': 'hidden field', 'dos_ll': 'hidden field', 'dosll_date': 'hidden field', 'map_symbol': 'hidden field', 'calc_sq_mi': 'hidden field', 'datemod': 'hidden field', });
lyr_Rivers_7.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'name': 'no label', });
lyr_NYSPotentialEnvironmentalJusticeAreas_8.set('fieldLabels', {'fid': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'GEOID_DATA': 'inline label - always visible', 'BPOVRATE': 'inline label - always visible', 'MINPOPCOUNT': 'inline label - always visible', 'MINPOPRATE': 'inline label - always visible', 'PEJA': 'inline label - always visible', 'in_dw_area': 'no label', });
lyr_MunicipalitiesServedbyHudsonMohawkRivers_9.set('fieldLabels', {'id': 'hidden field', 'muni_name': 'hidden field', 'muni_type': 'inline label - always visible', 'num_intakes': 'inline label - always visible', 'num_pws': 'inline label - always visible', 'tot_pop': 'inline label - always visible', 'num_viols': 'hidden field', 'source_name': 'inline label - always visible', });
lyr_LeachateFlowsgalyear_10.set('fieldLabels', {'id': 'hidden field', 'src_name': 'inline label - always visible', 'dest_name': 'inline label - always visible', 'year_start': 'hidden field', 'year_end': 'hidden field', 'avg_gal_yr': 'inline label - always visible', 'avg_gal_day': 'hidden field', 'avg_cost_gal': 'inline label - always visible', 'dest_spdes': 'hidden field', });
lyr_LandfillsContributingLeachategalyear_11.set('fieldLabels', {'src_name': 'hidden field', 'disp_name': 'hidden field', 'disp_name_2': 'hidden field', 'tot_gal_yr_out': 'inline label - always visible', 'tot_gal_day_out': 'hidden field', });
lyr_WWTPsReceivingLeachategalyear_12.set('fieldLabels', {'dest_name': 'hidden field', 'disp_name': 'hidden field', 'disp_name_2': 'hidden field', 'tot_gal_yr_in': 'inline label - always visible', 'tot_gal_day_in': 'hidden field', 'avg_cost_gal': 'inline label - always visible', 'num_landfills_in': 'inline label - always visible', 'dest_spdes': 'hidden field', });
lyr_DrinkingWaterIntakespopserved_13.set('fieldLabels', {'intake_f_name': 'hidden field', 'disp_name': 'hidden field', 'disp_name_2': 'hidden field', 'total_pop': 'inline label - always visible', });
lyr_DrinkingWaterIntakespopserved_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});