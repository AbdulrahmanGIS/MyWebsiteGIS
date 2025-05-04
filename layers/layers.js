var wms_layers = [];

var format_world_0 = new ol.format.GeoJSON();
var features_world_0 = format_world_0.readFeatures(json_world_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_world_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_world_0.addFeatures(features_world_0);
var lyr_world_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_world_0, 
                style: style_world_0,
                popuplayertitle: "world",
                interactive: true,
                title: '<img src="styles/legend/world_0.png" /> world'
            });
var format_Countries_1 = new ol.format.GeoJSON();
var features_Countries_1 = format_Countries_1.readFeatures(json_Countries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Countries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Countries_1.addFeatures(features_Countries_1);
var lyr_Countries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Countries_1, 
                style: style_Countries_1,
                popuplayertitle: "Countries",
                interactive: true,
                title: '<img src="styles/legend/Countries_1.png" /> Countries'
            });

lyr_world_0.setVisible(true);lyr_Countries_1.setVisible(true);
var layersList = [lyr_world_0,lyr_Countries_1];
lyr_world_0.set('fieldAliases', {'NAME': 'NAME', 'NAME_AR': 'NAME_AR', 'NAME_BN': 'NAME_BN', 'NAME_EL': 'NAME_EL', 'NAME_HI': 'NAME_HI', 'NAME_JA': 'NAME_JA', 'NAME_KO': 'NAME_KO', 'NAME_RU': 'NAME_RU', 'NAME_ZH': 'NAME_ZH', });
lyr_Countries_1.set('fieldAliases', {'NAME': 'NAME', 'name_ru': 'name_ru', 'name_zh': 'name_zh', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_el': 'name_el', 'name_hi': 'name_hi', 'name_ja': 'name_ja', 'name_ko': 'name_ko', });
lyr_world_0.set('fieldImages', {'NAME': 'TextEdit', 'NAME_AR': 'TextEdit', 'NAME_BN': 'TextEdit', 'NAME_EL': 'TextEdit', 'NAME_HI': 'TextEdit', 'NAME_JA': 'TextEdit', 'NAME_KO': 'TextEdit', 'NAME_RU': 'TextEdit', 'NAME_ZH': 'TextEdit', });
lyr_Countries_1.set('fieldImages', {'NAME': 'TextEdit', 'name_ru': 'TextEdit', 'name_zh': 'TextEdit', 'name_ar': 'TextEdit', 'name_bn': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'name_ja': 'TextEdit', 'name_ko': 'TextEdit', });
lyr_world_0.set('fieldLabels', {'NAME': 'no label', 'NAME_AR': 'no label', 'NAME_BN': 'no label', 'NAME_EL': 'no label', 'NAME_HI': 'no label', 'NAME_JA': 'no label', 'NAME_KO': 'no label', 'NAME_RU': 'no label', 'NAME_ZH': 'no label', });
lyr_Countries_1.set('fieldLabels', {'NAME': 'no label', 'name_ru': 'no label', 'name_zh': 'no label', 'name_ar': 'no label', 'name_bn': 'no label', 'name_el': 'no label', 'name_hi': 'no label', 'name_ja': 'no label', 'name_ko': 'no label', });
lyr_Countries_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});