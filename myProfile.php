<div class="my-profile page-popup" id="myProfile"  style="display: none;">
   <h1 class="page-title"><b>my</b> profile</h1>
   <div class="container popup-cont">
      <div class="row">
         <div class="col-md-12">
            <p class="note">In order to make a purchase you need to complete your profile information</p>
         </div>
      </div>
      <div class="profile-data">
         <div class="form">
            <div class="row">
               <div class="col-md-6 col-xs-12">
                 <div class="form-section">
                  <div class="section-label">personal informationn</div>
                  <div class="form-item">
                     <label class="form-label">First Name</label>
                     <input class="form-input" name="fName" type="text" placeholder="First Name">
                  </div>
                  <div class="form-item">
                     <label class="form-label">Last Name</label>
                     <input class="form-input" name="lName" type="text" placeholder="Last Name">
                  </div>
                  <div class="form-item">
                     <label class="form-label">Country</label>
                     <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="country" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Country
                        </button>
                        <div class="dropdown-menu" aria-labelledby="country">
                           <a class="dropdown-item" href="#">UK</a>
                           <a class="dropdown-item" href="#">India</a>
                           <a class="dropdown-item" href="#">USA</a>
                        </div>
                     </div>
                  </div>
                  <div class="form-item">
                     <label class="form-label">City</label>
                     <input class="form-input" name="city" type="text" placeholder="City">
                  </div>
                  <div class="form-item">
                     <label class="form-label">address</label>
                     <input class="form-input" name="address" type="text" placeholder="Address">
                  </div>
                  <div class="form-item read-only">
                     <label class="form-label">Email</label>
                     <div class="field">mymail@gmail.com</div>
                  </div>
                  <div class="form-item read-only">
                     <label class="form-label">Mobile Number</label>
                     <div class="field">+972-54-44332211</div>
                  </div>
               </div>
             </div>
               <div class="col-md-6 col-xs-12">
                 <div class="form-section">
                  <div class="section-label">ID verification</div>
                  <div class="form-item">
                     <div class="upload-box">
                        <div class="tag">Government issued photo ID/ Passport, Driving license</div>
                        <div class="upload-btn">
                           <form>
                              <span class="fileUpload btn btn-default">
                              Upload
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
                <div class="form-section">
                  <div class="section-label">proof of address</div>
                  <div class="form-item">
                     <div class="upload-box">
                        <div class="tag">utility bill:  Electricity bill / property tax</div>
                        <div class="upload-btn">
                           <form>
                              <span class="fileUpload btn btn-default">
                              Upload
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
                <div class="popup-footer">
                   <div class="btns">
                      <button class="btn solid modal-opener" data="verifyData">Update</button>
                   </div>
                </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
