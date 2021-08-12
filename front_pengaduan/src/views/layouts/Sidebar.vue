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
                        <li class="nav-item">
                            <router-link :to="{name: 'petugas'}" class="nav-link">
                                <i class="ni ni-single-02 text-default"></i>
                                <span class="nav-link-text">Petugas</span>
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
                        <!-- <li class="nav-item">
                            <router-link :to="{name: 'laporan'}" class="nav-link">
                                <i class="ni ni-bullet-list-67 text-default"></i>
                                <span class="nav-link-text">Laporan</span>
                            </router-link>
                        </li> -->
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
         </div>
        <template>