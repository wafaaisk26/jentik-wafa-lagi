var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KelurahanPasirkaliki_1 = new ol.format.GeoJSON();
var features_KelurahanPasirkaliki_1 = format_KelurahanPasirkaliki_1.readFeatures(json_KelurahanPasirkaliki_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KelurahanPasirkaliki_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KelurahanPasirkaliki_1.addFeatures(features_KelurahanPasirkaliki_1);
var lyr_KelurahanPasirkaliki_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KelurahanPasirkaliki_1, 
                style: style_KelurahanPasirkaliki_1,
                popuplayertitle: "Kelurahan Pasirkaliki",
                interactive: true,
                title: '<img src="styles/legend/KelurahanPasirkaliki_1.png" /> Kelurahan Pasirkaliki'
            });
var format_KawasanPenyebaranJentik_2 = new ol.format.GeoJSON();
var features_KawasanPenyebaranJentik_2 = format_KawasanPenyebaranJentik_2.readFeatures(json_KawasanPenyebaranJentik_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanPenyebaranJentik_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanPenyebaranJentik_2.addFeatures(features_KawasanPenyebaranJentik_2);
var lyr_KawasanPenyebaranJentik_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanPenyebaranJentik_2, 
                style: style_KawasanPenyebaranJentik_2,
                popuplayertitle: "Kawasan Penyebaran Jentik",
                interactive: true,
                title: '<img src="styles/legend/KawasanPenyebaranJentik_2.png" /> Kawasan Penyebaran Jentik'
            });
var format_TitikJentik_3 = new ol.format.GeoJSON();
var features_TitikJentik_3 = format_TitikJentik_3.readFeatures(json_TitikJentik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikJentik_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikJentik_3.addFeatures(features_TitikJentik_3);
var lyr_TitikJentik_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikJentik_3, 
                style: style_TitikJentik_3,
                popuplayertitle: "Titik Jentik",
                interactive: true,
                title: '<img src="styles/legend/TitikJentik_3.png" /> Titik Jentik'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_KelurahanPasirkaliki_1.setVisible(true);lyr_KawasanPenyebaranJentik_2.setVisible(true);lyr_TitikJentik_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KelurahanPasirkaliki_1,lyr_KawasanPenyebaranJentik_2,lyr_TitikJentik_3];
lyr_KelurahanPasirkaliki_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_KawasanPenyebaranJentik_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TitikJentik_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_KelurahanPasirkaliki_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_KawasanPenyebaranJentik_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_TitikJentik_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_KelurahanPasirkaliki_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_KawasanPenyebaranJentik_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TitikJentik_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TitikJentik_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});