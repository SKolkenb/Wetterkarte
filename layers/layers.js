var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_WarngebietedesDWDaufKreisbasis_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.dwd.de/geoserver/dwd/ows?version%3D1.3%26layers%3Ddwd:Warnungen_Landkreise%26bbox%3D6.15,51.76,14.90,55.01%26width%3D512%26he%0Aight%3D418%26srs%3DEPSG:4326%26CQL_FILTER%3DEC_II%20IN%20('51','%0A52')",
    attributions: ' ',
                              params: {
                                "LAYERS": "Warngebiete_Kreise",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Warngebiete des DWD",
                            opacity: 0.5,
                            
                            
                          });
              wms_layers.push([lyr_WarngebietedesDWDaufKreisbasis_1, 0]);
var lyr_WetterwarnungenundVorabinformationenaufLandkreisebene_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.dwd.de/geoserver/dwd/ows?version%3D1.3%26layers%3Ddwd:Warnungen_Landkreise%26bbox%3D6.15,51.76,14.90,55.01%26width%3D512%26he%0Aight%3D418%26srs%3DEPSG:4326%26CQL_FILTER%3DEC_II%20IN%20('51','%0A52')",
    attributions: ' ',
                              params: {
                                "LAYERS": "Warnungen_Gemeinden",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Wetterwarnungen und Vorabinformationen",
                            opacity: 0.75,
                            
                            
                          });
              wms_layers.push([lyr_WetterwarnungenundVorabinformationenaufLandkreisebene_2, 0]);
var lyr_Niederschlagsradar_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.dwd.de/geoserver/dwd/ows?version%3D1.3%26layers%3Ddwd:Warnungen_Landkreise%26bbox%3D6.15,51.76,14.90,55.01%26width%3D512%26he%0Aight%3D418%26srs%3DEPSG:4326%26CQL_FILTER%3DEC_II%20IN%20('51','%0A52')",
    attributions: ' ',
                              params: {
                                "LAYERS": "Niederschlagsradar",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Niederschlagsradar",
                            opacity: 0.750,
                            
                            
                          });
              wms_layers.push([lyr_Niederschlagsradar_3, 0]);

var lyr_Wind_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.dwd.de/geoserver/dwd/ows?version%3D1.3%26layers%3Ddwd:ORKA-DE_PFUZVZ%26bbox%3D6.15,51.76,14.90,55.01%26width%3D512%26he%0Aight%3D418%26srs%3DEPSG:4326%26CQL_FILTER%3DEC_II%20IN%20('51','%0A52')",
    attributions: ' ',
                              params: {
                                "LAYERS": "ORKA-DE_PFUZVZ",
                                "TILED": "true",
                                "VERSION": "1.3"},
                            })),
                            title: "Wind",
                            opacity: 0.750,
                            
                            
                          });
              wms_layers.push([lyr_Wind_3, 0]);


var lyr_Autowarn_Analyse_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.dwd.de/geoserver/dwd/ows?version%3D1.3%26layers%3Ddwd:Warnungen_Landkreise%26bbox%3D6.15,51.76,14.90,55.01%26width%3D512%26he%0Aight%3D418%26srs%3DEPSG:4326%26CQL_FILTER%3DEC_II%20IN%20('51','%0A52')",
    attributions: ' ',
                              params: {
                                "LAYERS": "Autowarn_Analyse",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Automatische Gewittererkennung",
                            opacity: 0.75,
                            
                            
                          });
              wms_layers.push([lyr_Autowarn_Analyse_5, 0]);
var lyr_Autowarn_Vorhersage_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.dwd.de/geoserver/dwd/ows?version%3D1.3%26layers%3Ddwd:Warnungen_Landkreise%26bbox%3D6.15,51.76,14.90,55.01%26width%3D512%26he%0Aight%3D418%26srs%3DEPSG:4326%26CQL_FILTER%3DEC_II%20IN%20('51','%0A52')",
    attributions: ' ',
                              params: {
                                "LAYERS": "Autowarn_Vorhersage",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Automatische Gewittervorhersage",
                            opacity: 0.75,
                            
                            
                          });
              wms_layers.push([lyr_Autowarn_Vorhersage_6, 1]);

lyr_GoogleMaps_0.setVisible(true);lyr_WarngebietedesDWDaufKreisbasis_1.setVisible(false);lyr_WetterwarnungenundVorabinformationenaufLandkreisebene_2.setVisible(true);lyr_Niederschlagsradar_3.setVisible(true);lyr_Wind_3.setVisible(true);lyr_Autowarn_Analyse_5.setVisible(true);lyr_Autowarn_Vorhersage_6.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_WarngebietedesDWDaufKreisbasis_1,lyr_WetterwarnungenundVorabinformationenaufLandkreisebene_2,lyr_Niederschlagsradar_3,lyr_Wind_3,lyr_Autowarn_Analyse_5,lyr_Autowarn_Vorhersage_6];
