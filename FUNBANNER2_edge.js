/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'HTL5A',
                type: 'image',
                rect: ['68px', '0px','1200px','200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"HTL5A..jpg",'0px','0px']
            },
            {
                id: 'mm12',
                type: 'image',
                rect: ['-140px', '35px','229px','165px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mm12.gif",'0px','0px']
            },
            {
                id: 'order_now_button',
                type: 'image',
                rect: ['0', '0','218px','88px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"order_now_button.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '100%'],
                ["style", "height", '100%'],
                ["style", "overflow", 'hidden']
            ],
            "${_HTL5A}": [
                ["style", "left", '-5px'],
                ["style", "width", '1205px']
            ],
            "${_order_now_button}": [
                ["style", "height", '65px'],
                ["style", "top", '11px'],
                ["style", "left", '1035px'],
                ["style", "width", '156px']
            ],
            "${_mm12}": [
                ["style", "top", '35px'],
                ["style", "height", '165px'],
                ["style", "left", '-153px'],
                ["style", "width", '229px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2040,
            autoPlay: true,
            timeline: [
                { id: "eid50", tween: [ "style", "${_order_now_button}", "width", '156px', { fromValue: '156px'}], position: 2040, duration: 0 },
                { id: "eid29", tween: [ "style", "${_mm12}", "left", '1225px', { fromValue: '-153px'}], position: 0, duration: 2040 },
                { id: "eid52", tween: [ "style", "${_order_now_button}", "top", '11px', { fromValue: '11px'}], position: 2040, duration: 0 },
                { id: "eid48", tween: [ "style", "${_order_now_button}", "height", '65px', { fromValue: '65px'}], position: 2040, duration: 0 },
                { id: "eid51", tween: [ "style", "${_order_now_button}", "left", '1035px', { fromValue: '1035px'}], position: 2040, duration: 0 },
                { id: "eid35", tween: [ "style", "${_HTL5A}", "left", '-5px', { fromValue: '-5px'}], position: 2040, duration: 0 },
                { id: "eid36", tween: [ "style", "${_HTL5A}", "width", '1205px', { fromValue: '1205px'}], position: 2040, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-68911879");
