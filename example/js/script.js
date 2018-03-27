//Free
var m_color = L.TileLayer.mierune({
    m_style: "mierune"
});

var m_mono = L.TileLayer.mierune({
    m_style: "mierune_mono"
});


//Paid
var key = "xxxxxxxxxxxxxxxxxxxx";

var m_color2 = L.TileLayer.mierune({
    m_style: "MIERUNE",
    m_key: key
});

var m_normal = L.TileLayer.mierune({
    m_style: "normal",
    m_key: key
});

var m_bright = L.TileLayer.mierune({
    m_style: "bright",
    m_key: key
});

var m_gray = L.TileLayer.mierune({
    m_style: "gray",
    m_key: key
});

var m_blue = L.TileLayer.mierune({
    m_style: "blue",
    m_key: key
});

var m_warm = L.TileLayer.mierune({
    m_style: "warm",
    m_key: key
});

//MAP
var map = L.map('map', {
    center: [35.6831925, 139.7511307],
    zoom: 13,
    zoomControl: true,
    layers: [m_color]
});

//Layer
var Map_BaseLayer = {
    "MIERUNE Color": m_color,
    "MIERUNE MONO": m_mono,
    "MIERUNE Color+": m_color2,
    "MIERUNE normal": m_normal,
    "MIERUNE bright": m_bright,
    "MIERUNE gray": m_gray,
    "MIERUNE blue": m_blue,
    "MIERUNE warm": m_warm
};
L.control.layers(Map_BaseLayer, null, {
    collapsed: true
}).addTo(map);
