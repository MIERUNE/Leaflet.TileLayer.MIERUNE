L.TileLayer.MIERUNE = L.TileLayer.extend({
    options: {
        //Style name
        m_style: "",
        //API Key
        m_key: "",
        //License
        attribution: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
    },
    initialize: function (options) {
        options = L.setOptions(this, options);
        if (options.m_style === "mierune" || options.m_style === "mierune_mono") {
            URL = "https://tile.mierune.co.jp/" + options.m_style + "/{z}/{x}/{y}.png";
            //console.log ("Free!!");
        }else if (options.m_style === "MIERUNE" || options.m_style === "normal" || options.m_style === "bright" || options.m_style === "gray" || options.m_style === "blue" || options.m_style === "warm") {
            URL = "https://tile.cdn.mierune.co.jp/styles/" + options.m_style + "/{z}/{x}/{y}.png?key=" + options.m_key;
            //console.log ("Paid!!");
        }else {
            alert ("Style name is incorrect.");
        }
        //console.log ("URL: " + URL);
        L.TileLayer.prototype.initialize.call(this, URL, options);
    }
});

L.TileLayer.mierune = function(options){
    return new L.TileLayer.MIERUNE(options);
};
