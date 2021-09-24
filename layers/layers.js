var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_PercentageofthePopulation_1 = new ol.format.GeoJSON();
var features_PercentageofthePopulation_1 = format_PercentageofthePopulation_1.readFeatures(json_PercentageofthePopulation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PercentageofthePopulation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PercentageofthePopulation_1.addFeatures(features_PercentageofthePopulation_1);
var lyr_PercentageofthePopulation_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PercentageofthePopulation_1, 
                style: style_PercentageofthePopulation_1,
                interactive: true,
    title: 'Percentage of the Population <br />\
    <img src="styles/legend/PercentageofthePopulation_1_0.png" /> No Data Available <br />\
    <img src="styles/legend/PercentageofthePopulation_1_1.png" /> Eliminated Extreme Poverty<br />\
    <img src="styles/legend/PercentageofthePopulation_1_2.png" /> <10%<br />\
    <img src="styles/legend/PercentageofthePopulation_1_3.png" /> 10% - 20%<br />\
    <img src="styles/legend/PercentageofthePopulation_1_4.png" /> 20% - 30%<br />\
    <img src="styles/legend/PercentageofthePopulation_1_5.png" /> >30%<br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_PercentageofthePopulation_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_PercentageofthePopulation_1];
lyr_PercentageofthePopulation_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Pro_50': 'Pro_50', 'field_1': 'field_1', 'id': 'id', 'Geographic Area Name': 'Geographic Area Name', 'Estimate!!Total!!Population for whom poverty status is determined': 'Estimate!!Total!!Population for whom poverty status is determined', 'Estimate!!Total!!Population for whom poverty status is determined!!ALL INDIVIDUALS WITH INCOME BELOW THE FOLLOWING POVERTY RATIOS!!50 percent of poverty level': 'Estimate!!Total!!Population for whom poverty status is determined!!ALL INDIVIDUALS WITH INCOME BELOW THE FOLLOWING POVERTY RATIOS!!50 percent of poverty level', 'Proportion': 'Percent', });
lyr_PercentageofthePopulation_1.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'Pro_50': 'Hidden', 'field_1': 'Hidden', 'id': 'Hidden', 'Geographic Area Name': 'Hidden', 'Estimate!!Total!!Population for whom poverty status is determined': 'Hidden', 'Estimate!!Total!!Population for whom poverty status is determined!!ALL INDIVIDUALS WITH INCOME BELOW THE FOLLOWING POVERTY RATIOS!!50 percent of poverty level': 'Hidden', 'Proportion': 'TextEdit', });
lyr_PercentageofthePopulation_1.set('fieldLabels', {'Proportion': 'inline label', });
lyr_PercentageofthePopulation_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});