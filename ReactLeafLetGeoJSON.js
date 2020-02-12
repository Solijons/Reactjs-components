import React from 'react';

const OverLayWithGeoJSON = () => {
  
  // Dummy map
  const polygonWithFieldName = {
    type: "Feature"
    properties: {name: "My Polygon Label or Popup"}
    geometry: {type: "Polygon", coordinates: Array(1)}
    id: 1
  };

  return (
    <GeoJSON
      key={polygonWithFieldName}
      data={polygonWithFieldName}
      onEachFeature={(feature, layer) => {
        layer.bindTooltip(feature.properties.name, {
          direction: 'center',
          permanent: true,
        }).openTooltip();
        layer.bindPopup(feature.properties.name);
      }}
    />
  );
}

export default OverLayWithGeoJSON;
