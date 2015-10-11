
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2040,function(sym,e){window.open("http://megaman.capcom.com/","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_order_now_button}","click",function(sym,e){window.open("http://megaman.capcom.com/","_blank");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-68911879");