import { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });

  const [activeMarker, setActiveMarker] = useState(null);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('/api/property/getAllProperty');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    <Fragment>
      <div className="container">
        <div style={{ height: "20vh", width: "924px" }}>
          {isLoaded ? (
            <GoogleMap
              center={{ lat: 20.5937, lng: 78.9629 }} // Update with your default center
              zoom={13}
              onClick={() => setActiveMarker(null)}
              mapContainerStyle={{ width: "100%", height: "60vh" }}
            >
              {properties.map((property) => (
                <MarkerF
                  key={property._id} // Assuming each property has a unique _id
                  position={{ lat: parseFloat(property.latitude), lng: parseFloat(property.longitude) }}
                  onClick={() => handleActiveMarker(property._id)}
                  icon={{
                    url:"https://cdn0.iconfinder.com/data/icons/kirrkle-maps-and-navigation/60/02_-_Home_map_marker-512.png",
                    scaledSize: { width: 70, height: 60 }
                  }}
                >
                  {activeMarker === property._id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div>
                        <p>{property.location}</p>
                      </div>
                    </InfoWindowF>
                  ) : null}
                </MarkerF>
              ))}
            </GoogleMap>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
