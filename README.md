# Leaflet.TileLayer.MIERUNE  

Leaflet.TileLayer.MIERUNE is a Leaflet plugin for creating tile layers from [MIERUNE MAP](https://mierune.co.jp/tile.html). (Leaflet v0.7.x - v1.x.x)

<br>

## Usage  

![Leaflet.TileLayer.MIERUNE](./img/img_01.gif)

<br>

### Demo  

[MIERUNE MAP](https://tile.mierune.co.jp)

<br>

### Option  

```javascript

m_style: "Style Name"   
m_key: "API Key"  

```

<br>

### Example

index.html
```html

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>Leaflet.TileLayer.MIERUNE example</title>

    <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" />

    <script src="./plugin/Leaflet.TileLayer.MIERUNE/dist/L.TileLayer.MIERUNE.js"></script>

    <link href="./css/stylesheet.css" rel="stylesheet" />

</head>
<body>

    <div id="map"></div>
    <script src="./js/script.js"></script>

</body>
</html>

```

stylesheet.css
```css

html, body {
    height: 100%;
    padding: 0;
    margin: 0;
}

#map {
    z-index: 0;
    height: 100%;
}

```

script.js
```javascript

//Free
//Style: mierune, mierune_mono
var m_color = L.TileLayer.mierune({
    m_style: "mierune"
});


//Paid
var key = "xxxxxxxxxx";

//Style: normal, gray, bright, blue, warm, MIERUNE
var m_normal = L.TileLayer.mierune({
    m_style: "normal",
    m_key: key
});


//Map
var map = L.map('map', {
    center: [35.6831925, 139.7511307],
    zoom: 13,
    zoomControl: true,
    layers: [m_color]
});


//Layer
var Map_BaseLayer = {
    "MIERUNE Color": m_color,
    "MIERUNE normal": m_normal
};
L.control.layers(Map_BaseLayer, null, {
    collapsed: true
}).addTo(map);

```

<br/>

## License
MIT

Copyright (c) 2018 MIERUNE Inc.

<br/>

---

<br/>

