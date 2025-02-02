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
        center: [51.505, -0.09], // Example coordinates: London
        zoom: 13,
      });

      // Add CartoDB Positron with transport features (good for displaying transport routes)
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
      ).addTo(map);

      const customIcon = L.icon({
        iconUrl: "/svgs/marker.svg", // Path to your custom marker image
        iconSize: [32, 32], // Size of the icon
        iconAnchor: [16, 32], // Anchor the icon to the bottom center (adjust based on your image)
        popupAnchor: [0, -32], // Position of the popup relative to the icon
      });

      // Add a marker at the specified location
      L.marker([52.08626, -0.31854], { icon: customIcon }) // Example coordinates: London
        .addTo(map)
        .bindPopup("This is my location!")
        .openPopup();

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
