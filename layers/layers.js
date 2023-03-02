var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_deptbdcr76_1 = new ol.format.GeoJSON();
var features_deptbdcr76_1 = format_deptbdcr76_1.readFeatures(json_deptbdcr76_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_deptbdcr76_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_deptbdcr76_1.addFeatures(features_deptbdcr76_1);
var lyr_deptbdcr76_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_deptbdcr76_1, 
                style: style_deptbdcr76_1,
                interactive: true,
                title: '<img src="styles/legend/deptbdcr76_1.png" /> dept bdc r76 '
            });
var format_deptbdcr75_2 = new ol.format.GeoJSON();
var features_deptbdcr75_2 = format_deptbdcr75_2.readFeatures(json_deptbdcr75_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_deptbdcr75_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_deptbdcr75_2.addFeatures(features_deptbdcr75_2);
var lyr_deptbdcr75_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_deptbdcr75_2, 
                style: style_deptbdcr75_2,
                interactive: true,
                title: '<img src="styles/legend/deptbdcr75_2.png" /> dept bdc r75 '
            });
var format_fichiercompletavecUAInom_3 = new ol.format.GeoJSON();
var features_fichiercompletavecUAInom_3 = format_fichiercompletavecUAInom_3.readFeatures(json_fichiercompletavecUAInom_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fichiercompletavecUAInom_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fichiercompletavecUAInom_3.addFeatures(features_fichiercompletavecUAInom_3);
var lyr_fichiercompletavecUAInom_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fichiercompletavecUAInom_3, 
                style: style_fichiercompletavecUAInom_3,
                interactive: true,
                title: '<img src="styles/legend/fichiercompletavecUAInom_3.png" /> fichier complet avec UAI & nom'
            });
var format_nepasprendretouscayratsverdalle_4 = new ol.format.GeoJSON();
var features_nepasprendretouscayratsverdalle_4 = format_nepasprendretouscayratsverdalle_4.readFeatures(json_nepasprendretouscayratsverdalle_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nepasprendretouscayratsverdalle_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nepasprendretouscayratsverdalle_4.addFeatures(features_nepasprendretouscayratsverdalle_4);
var lyr_nepasprendretouscayratsverdalle_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nepasprendretouscayratsverdalle_4, 
                style: style_nepasprendretouscayratsverdalle_4,
                interactive: true,
                title: '<img src="styles/legend/nepasprendretouscayratsverdalle_4.png" /> ne pas prendre touscayrats verdalle'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_deptbdcr76_1.setVisible(true);lyr_deptbdcr75_2.setVisible(true);lyr_fichiercompletavecUAInom_3.setVisible(true);lyr_nepasprendretouscayratsverdalle_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_deptbdcr76_1,lyr_deptbdcr75_2,lyr_fichiercompletavecUAInom_3,lyr_nepasprendretouscayratsverdalle_4];
lyr_deptbdcr76_1.set('fieldAliases', {'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', });
lyr_deptbdcr75_2.set('fieldAliases', {'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', });
lyr_fichiercompletavecUAInom_3.set('fieldAliases', {'NOM': 'NOM', 'UAI_ETBLT': 'UAI_ETBLT', });
lyr_nepasprendretouscayratsverdalle_4.set('fieldAliases', {'NOM': 'NOM', 'UAI_ETBLT': 'UAI_ETBLT', });
lyr_deptbdcr76_1.set('fieldImages', {'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', });
lyr_deptbdcr75_2.set('fieldImages', {'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', });
lyr_fichiercompletavecUAInom_3.set('fieldImages', {'NOM': 'TextEdit', 'UAI_ETBLT': 'TextEdit', });
lyr_nepasprendretouscayratsverdalle_4.set('fieldImages', {'NOM': 'TextEdit', 'UAI_ETBLT': 'TextEdit', });
lyr_deptbdcr76_1.set('fieldLabels', {'NOM_DEP': 'inline label', 'INSEE_DEP': 'no label', });
lyr_deptbdcr75_2.set('fieldLabels', {'NOM_DEP': 'inline label', 'INSEE_DEP': 'no label', });
lyr_fichiercompletavecUAInom_3.set('fieldLabels', {'NOM': 'no label', 'UAI_ETBLT': 'no label', });
lyr_nepasprendretouscayratsverdalle_4.set('fieldLabels', {'NOM': 'no label', 'UAI_ETBLT': 'no label', });
lyr_nepasprendretouscayratsverdalle_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});