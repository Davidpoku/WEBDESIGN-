/***********************
* Adobe Edge Animate Composition Actions
*
By David Poku UX /UI designer HTML5 BANNER 
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2040, function(sym, e) {
         // insert code here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://megaman.capcom.com/", "_blank");
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_order_now_button}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://megaman.capcom.com/", "_blank");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-68911879");