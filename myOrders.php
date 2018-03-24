<div class="my-orders page-popup" id="myOrders"  style="display: none;">
   <h1 class="page-title">
      <span><b>my</b> orders</span>
      <ul class="nav nav-tabs">
         <li class=""><a data-toggle="tab" href="#pending" aria-expanded="false">Pending</a></li>
         <li class="active"><a data-toggle="tab" href="#closed" aria-expanded="true">Closed</a></li>
      </ul>
   </h1>
   <div class="container popup-cont">
      <div class="tab-content">
         <div id="pending" class="tab-pane fade active in">
            pending
         </div>
         <div id="closed" class="tab-pane fade">
           <div class="table-head">
             <div class="title">Date</div>
             <div class="title">Time</div>
             <div class="title">Amount</div>
           </div>
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
               <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingOne">
                     <h4 class="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <div class="panel-plus panel-icon">+</div>
                        <div class="panel-minus panel-icon">-</div>
                        <div class="table-row">
                          <div class="item date">31/01/18</div>
                          <div class="item time">16:46</div>
                          <div class="item price"><b>1,000</b> EUR</div>
                        </div>
                        </a>
                     </h4>
                  </div>
                  <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                     <div class="panel-body">
                        <div class="order-detail">
                          <div class="item">
                            <div class="icon watch"><i class="fa fa-hourglass-half"></i></div>
                            <div class="value">0.12345 BTC</div>
                            <div class="code">hAGF16388hAGF16388</div>
                          </div>
                        </div>
                        <div class="order-detail">
                          <div class="item">
                            <div class="icon check"><i class="fa fa-check"></i></div>
                            <div class="value">2345 ETH</div>
                            <div class="code">ETGF16388hAGF1</div>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>
                  <div class="panel panel-default">
                     <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                           <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseOne">
                           <div class="panel-plus panel-icon">+</div>
                           <div class="panel-minus panel-icon">-</div>
                           <div class="table-row">
                             <div class="item date">31/01/18</div>
                             <div class="item time">16:46</div>
                             <div class="item price"><b>1,000</b> EUR</div>
                           </div>
                           </a>
                        </h4>
                     </div>
                     <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                       <div class="panel-body">
                          <div class="order-detail">
                            <div class="item">
                              <div class="icon watch"><i class="fa fa-hourglass-half"></i></div>
                              <div class="value">0.12345 BTC</div>
                              <div class="code">hAGF16388hAGF16388</div>
                            </div>
                          </div>
                          <div class="order-detail">
                            <div class="item">
                              <div class="icon check"><i class="fa fa-check"></i></div>
                              <div class="value">2345 ETH</div>
                              <div class="code">ETGF16388hAGF1</div>
                            </div>
                          </div>
                       </div>
                     </div>
                  </div>
            </div>
            <!-- panel-group -->
         </div>
      </div>
   </div>
</div>
