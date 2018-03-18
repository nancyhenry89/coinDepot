<div class="verify-data modal modal-smal" id="verifyData"  style="display: none;">
   <div class="modal-dialog">
      <div class="popup-label">
         <h1 class="title"><b>verifying </b><span class="light">data</span></h1>
      </div>
      <div class="container popup-cont scanning">
         <p>some text about verification takes few moments</p>
         <div class="scan-doc" id="animation_container" style=" width:120px; height:120px">
            <canvas id="canvas" width="120" height="120" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
            <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:120px; height:120px; position: absolute; left: 0px; top: 0px; display: block;">
            </div>
         </div>
      </div>
      <div class="container popup-cont scan-success" style="display:none">
        <div class="icon"><i class="fa fa-check"></i></div>
        <p>Data validation completed successfully</p>
        <div class="popup-footer">
        <div class="btns">
           <button class="btn solid modal-opener" data="paymentMethods" >Continue purchase</button>
        </div>
      </div>
      </div>
   </div>
</div>
