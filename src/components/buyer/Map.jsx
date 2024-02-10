import { Fragment, useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";


const markers = [
  {
    id: 1,
    name: "DYPIMR",
    position: { lat: 18.62282314957873, lng: 73.81655091163232 },
  },
  {
    id: 2,
    name: "Elpro Mall",
    position: { lat: 18.628946150305197, lng: 73.78405235026077 },
  },
  {
    id: 3,
    name: "Temple",
    position: { lat: 18.67417341838097, lng: 73.88912279015263 },
  }
];

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });

  const [activeMarker, setActiveMarker] = useState(null);

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
              center={markers[0].position}
              zoom={13}
              onClick={() => setActiveMarker(null)}
              mapContainerStyle={{ width: "100%", height: "60vh" }}
            >
              {markers.map(({ id, name, position }) => (
                <MarkerF
                  key={id}
                  position={position}
                  onClick={() => handleActiveMarker(id)}
                  icon={{
                    url:"https://cdn0.iconfinder.com/data/icons/kirrkle-maps-and-navigation/60/02_-_Home_map_marker-512.png",
                    scaledSize: { width: 70, height: 60 }
                  }}
                >
                  {activeMarker === id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div>
                        <p>{name}</p>
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
