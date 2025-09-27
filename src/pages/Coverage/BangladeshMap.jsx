import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// 🔹 A helper component to move map when search is triggered
const FlyToLocation = ({ position }) => {
    const map = useMap();
    if (position) {
        map.setView(position, 10); // pan & zoom to the district
    }
    return null;
};

const BangladeshMap = ({ serviceCenters }) => {
    const [search, setSearch] = useState("");
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);

    const handleSearch = () => {
        if (!search.trim()) return;

        // find district (case-insensitive, partial match)
        const found = serviceCenters.find((center) =>
            center.district.toLowerCase().includes(search.toLowerCase())
        );

        if (found) {
            setSelectedPosition([found.latitude, found.longitude]);
            setSelectedDistrict(found.district); // so popup auto-opens
        } else {
            alert("District not found!");
        }
    };

    return (
        <div>
            {/*  Search Box */}
            <div className="md:flex gap-2 mb-3">
                <input
                    type="text"
                    placeholder="Search district..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border px-3 py-2 rounded w-64"
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button onClick={handleSearch} className="btn bg-[#CAEB66] px-8 py-4 rounded-lg  lg:mt-0 mt-3 ">Search</button>
            </div>

            {/* Map */}
            <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
                <MapContainer
                    center={[23.8103, 90.4125]}
                    zoom={7}
                    scrollWheelZoom={true}
                    className="h-full w-full"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* auto fly when search result found */}
                    <FlyToLocation position={selectedPosition} />

                    {serviceCenters.map((center, index) => (
                        <Marker
                            key={index}
                            position={[center.latitude, center.longitude]}
                        >
                            <Popup
                                autoOpen={selectedDistrict === center.district}>
                                <strong>{center.district}</strong> <br />
                                {center.covered_area.join(", ")}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default BangladeshMap;
