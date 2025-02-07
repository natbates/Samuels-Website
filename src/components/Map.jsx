// MapComponent.js
import React, { useEffect, useRef } from "react";
import L from "leaflet"; // Import Leaflet
import "leaflet/dist/leaflet.css"; // Import Leaflet styles

const MapComponent = () => {
  const mapContainerRef = useRef(null); // Create a ref to store the map container

  useEffect(() => {
    if (mapContainerRef.current) {
      // Check if the map is already initialized
      const map = L.map(mapContainerRef.current, {
        center: [52.08999, -0.32251],
        zoom: 19,
        dragging: true, 
        scrollWheelZoom: true, 
        touchZoom: true, 
        doubleClickZoom: true, 
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
      ).addTo(map);

      const customIcon = L.icon({
        iconUrl: "/svgs/marker.svg", 
        iconSize: [32, 32], 
        iconAnchor: [16, 32],
        popupAnchor: [0, -32], 
      });

      const marker = L.marker([52.08999, -0.32251], { icon: customIcon }) 
        .addTo(map)
        .bindPopup("Shuttleworth")
        .openPopup();

      map.setView(marker.getLatLng(), 13);

      // Cleanup the map when the component is unmounted
      return () => {
        map.remove(); // Destroy the map instance
      };
    }
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{ height: "800px", width: "100%"}}
      className="map"
    />
  );
};

export default MapComponent;
