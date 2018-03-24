<div class="user-profile my-profile page-popup" id="userProfile"  style="display: none;">
   <h1 class="page-title"><b>my</b> profile</h1>
   <div class="container popup-cont">
      <div class="profile-data">
         <div class="form">
            <div class="row">
               <div class="col-xs-12 col-md-7">
                  <div class="form-section">
                     <div class="section-label">personal informationn</div>
                     <div class="form-item">
                        <label class="form-detail">John Doe</label>
                     </div>
                     <div class="form-item">
                        <label class="form-detail">mymail.gmail.com</label>
                     </div>
                     <div class="form-item">
                        <label class="form-detail">+972-54-4433221</label>
                     </div>
                     <div class="form-item">
                        <label class="form-detail">178q14 streetname</label>
                     </div>
                     <div class="form-item">
                        <label class="form-detail">Sydney</label>
                     </div>
                     <div class="form-item read-only">
                        <label class="form-detail">Australia</label>
                     </div>
                  </div>
                  <div class="form-section">
                     <div class="section-label">ID verification</div>
                     <div class="form-item">
                        <div class="upload-box">
                           <div class="tag">Government issued photo ID/ Passport, Driving license</div>
                           <div class="form-detail upload-detail">
                              <span>MyIDFile.jpg</span><span class="icon"><i class="fa fa-check"></i></span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="form-section">
                     <div class="section-label">proof of address</div>
                     <div class="form-item">
                        <div class="upload-box">
                           <div class="tag">utility bill:  Electricity bill / property tax</div>
                           <div class="form-detail upload-detail upload-warning"><span>MyIDFile.jpg</span><span class="icon">!</span></div>
                           <div class="upload-btn">
                              <form>
                                 <span class="fileUpload btn btn-default">
                                 Upload New
                                 <input type="file" id="uploadFile" />
                                 </span>
                              </form>
                              <p id="fileUploadError" class="text-danger hide"></p>
                              <div class="list-group" id="files"></div>
                              <script id="fileUploadProgressTemplate" type="text/x-jquery-tmpl">
                                 <div class="list-group-item">
                                     <div class="progress progress-striped active">
                                         <div class="progress-bar progress-bar-info" style="width: 0%;"></div>
                                     </div>
                                 </div>
                              </script>
                              <script id="fileUploadItemTemplate" type="text/x-jquery-tmpl">
                                 <div class="list-group-item">
                                     <button type="button" class="close">&times;</button>
                                 </div>
                              </script>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="profile-footer">
           <a class="link modal-opener" data="changePassword">Change Password</a>
           <div class="support">
             <span>To update your personal details, please contact us</span>
             <br/>
             <span>by email </span>
             <a class="mailto" href="mailto:Support@coindepot.com">Support@coindepot.com</a>
           </div>
         </div>
      </div>
   </div>
</div>
