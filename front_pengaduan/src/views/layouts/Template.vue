<template>
    <div>
        <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
            <div class="scrollbar-inner">
                <!-- Brand -->
                <div class="sidenav-header  align-items-center">
                    <a class="navbar-brand" href="javascript:void(0)">
                    <img src="../../../public/assets/img/brand/blue.png" class="navbar-brand-img" alt="...">
                    </a>
                </div>
                <div class="navbar-inner">
                    <!-- Collapse -->
                    <div class="collapse navbar-collapse" id="sidenav-collapse-main">
                    <!-- Nav items -->
                    <ul class="navbar-nav">
                          <!-- <li class="nav-item">
                            <router-link :to="{name: 'petugas'}" class="nav-link">
                                <i class="ni ni-bullet-list-67 text-default"></i>
                                <span class="nav-link-text">Laporan</span>
                            </router-link>
                        </li> -->
                        <li class="nav-item">
                            <router-link :to="{name: 'petugas'}" class="nav-link">
                                <i class="ni ni-single-02 text-default"></i>
                                <span class="nav-link-text">Petugas</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'masyarakat'}" class="nav-link">
                                <i class="ni ni-single-02 text-default"></i>
                                <span class="nav-link-text">Masyarakat</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'kategori'}" class="nav-link">
                                <i class="ni ni-chart-bar-32 text-default"></i>
                                <span class="nav-link-text">Kategori Pengaduan</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'pengaduan'}" class="nav-link">
                                <i class="ni ni-notification-70 text-default"></i>
                                <span class="nav-link-text">Pengaduan</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'laporan'}" class="nav-link">
                                <i class="ni ni-bullet-list-67 text-default"></i>
                                <span class="nav-link-text">Laporan</span>
                            </router-link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Main content -->
        <div class="main-content" id="panel">
            <!-- Topnav -->
            <nav class="navbar navbar-top navbar-expand navbar-dark bg-default border-bottom p-2">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Search form -->

                    <!-- Navbar links -->
                    <ul class="navbar-nav align-items-center  ml-md-auto ">
                        <li class="nav-item d-xl-none">
                        <!-- Sidenav toggler -->
                        <div class="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                            <div class="sidenav-toggler-inner">
                            <i class="sidenav-toggler-line"></i>
                            <i class="sidenav-toggler-line"></i>
                            <i class="sidenav-toggler-line"></i>
                            </div>
                        </div>
                        </li>
                    </ul>
                    <ul class="navbar-nav align-items-center  ml-auto ml-md-0 ">
                        <li class="nav-item dropdown">
                        <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div class="media align-items-center">
                            <span class="avatar avatar-sm rounded-circle">
                                <img alt="Image placeholder" src="../../../public/assets/img/theme/user.png">
                            </span>
                            <div class="media-body  ml-2  d-none d-lg-block">
                                <span class="mb-0 text-sm  font-weight-bold">Admin@27.com</span>
                            </div>
                            </div>
                        </a>
                        <div class="dropdown-menu  dropdown-menu-right ">
                            <div class="dropdown-header noti-title">
                                <h6 class="text-overflow m-0">Welcome!</h6>
                            </div>
                            <div class="dropdown-divider"></div>
                            <a @click="logout" class="dropdown-item">
                                <i class="ni ni-user-run"></i>
                                <span>Logout</span>
                            </a>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <!-- Header -->
            
            <!-- Page content -->
            <div class="container-fluid pt-4">
                <router-view />
                
                <!-- Footer -->
                <footer class="footer pt-0">
                    <div class="row align-items-center justify-content-lg-between">
                        <div class="col-lg-12">
                            <div class="copyright text-center  text-lg-left  text-muted">
                            &copy; 2021 nyun
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>
<script>
export default {
   
    computed : {
        isLoggedIn : function(){ return this.$store.getters.isLoggedIn},
        username : function(){ return this.$store.getters.userDetail.name},
        role : function(){ return this.$store.getters.userDetail.role}
    },
    methods:{
      logout:function(){
        let conf = { headers : {"Authorization" : "Bearer " + localStorage.getItem("Authorization")} };
        let form = new FormData();
        this.axios.post('/logout', form, conf).then(response => {
            if (response.data.success === true) {
                this.$store.commit('logout')
                localStorage.removeItem("Authorization")
                this.$router.push({name: 'login'})
            }
        }).catch(error => {

        })
      },
  },
}
</script>