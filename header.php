<html>
   <head>
      <title>Coin Depot</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
      <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
      <link rel="stylesheet" href="assets/webfont/cryptocoins.css">
      <link rel="stylesheet" href="assets/css/slick.css">
      <link rel="stylesheet" href="assets/css/styles.css">
      <link href="https://fonts.googleapis.com/css?family=Rubik:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">
      <link rel="icon" href="#"/>
   </head>
   <body>
      <svg style="display:none" version="1.1" xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink">
         <path id="icon-bag" d="M24.35 26C24.35 26 24.35 26 24.34 26L0.65 26C0.47 26 0.3 25.92 0.17 25.79C0.05 25.67 -0.01 25.49 0 25.32L1.29 5.66C1.32 5.33 1.6 5.07 1.94 5.07L7.39 5.07L7.39 5.02C7.39 2.25 9.68 0 12.49 0C15.31 0 17.6 2.25 17.6 5.02C17.6 5.04 17.59 5.05 17.59 5.07L23.05 5.07C23.39 5.07 23.67 5.33 23.69 5.66L24.98 25.19C24.99 25.25 25 25.3 25 25.36C25 25.71 24.71 26 24.35 26ZM16.31 5.02C16.31 2.95 14.6 1.27 12.49 1.27C10.39 1.27 8.68 2.95 8.68 5.02L8.68 5.07L16.32 5.07C16.32 5.05 16.31 5.04 16.31 5.02ZM22.44 6.34L17.6 6.34L17.6 7.77C17.91 7.98 18.13 8.31 18.13 8.71C18.13 9.35 17.61 9.86 16.96 9.86C16.3 9.86 15.78 9.35 15.78 8.71C15.78 8.31 16 7.98 16.31 7.77L16.31 6.34L8.68 6.34L8.68 7.77C8.99 7.98 9.21 8.31 9.21 8.71C9.21 9.35 8.68 9.86 8.03 9.86C7.38 9.86 6.85 9.35 6.85 8.71C6.85 8.31 7.07 7.98 7.39 7.77L7.39 6.34L2.54 6.34L1.34 24.73L23.65 24.73L22.44 6.34Z" />
      </svg>
      <header>
         <div class="sticky">
            <div class="container">
               <button onclick="openNav()" type="button" class="navbar-toggle collapsed"   data-target="#bs-example-navbar-collapse-1">
               <span class="sr-only">Toggle navigation</span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               </button>
               <div class="nav-cont">
                  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                  <nav id="mySidenav" class="sidenav">
                     <div class="container-fluid">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <div class="navbar-header">
                        </div>
                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="navbar-collapse" id="bs-example-navbar-collapse-1">
                           <div class="dropdown lang">
                              <button class="btn dropdown-toggle" type="button" data-toggle="dropdown">EN
                              <span class="caret"></span></button>
                              <ul class="dropdown-menu">
                                 <li><a href="#">AR</a></li>
                                 <li><a href="#">FR</a></li>
                              </ul>
                           </div>
                           <div class="account menu-group">
                              <ul class="nav navbar-nav">
                                 <li class="register"><a href="#">Register</a></li>
                                 <li><a href="#">login</a></li>
                              </ul>
                           </div>
                           <div class="menu-group">
                              <div class="title">Title</div>
                              <ul class="nav navbar-nav">
                                 <li><a href="#">menu link</a></li>
                                 <li><a href="#">menu link</a></li>
                                 <li><a href="#">menu link</a></li>
                              </ul>
                           </div>
                           <div class="menu-group">
                              <div class="title">Title</div>
                              <ul class="nav navbar-nav">
                                 <li><a href="#">menu link</a></li>
                                 <li><a href="#">menu link</a></li>
                                 <li><a href="#">menu link</a></li>
                              </ul>
                           </div>
                        </div>
                        <!-- /.navbar-collapse -->
                     </div>
                     <!-- /.container-fluid -->
                  </nav>
               </div>
               <div class="logo">
                  <img class="img" src="assets/img/logo.png" alt="Coin Depot"/>
                  <h1 class="text">Coin<b>Depot</b></h1>
               </div>
               <div class="cart modal-opener" point="header" data="checkout">
                  <svg class="icon">
                     <use xlink:href="#icon-bag" />
                  </svg>
               </div>
            </div>
         </div>
         <div class="slogan">The most <b>simple</b>, <b>fast</b> & <b>safe</b> way to buy crypto currencies</div>
      </header>
