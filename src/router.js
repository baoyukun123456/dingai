import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'/main',
      name:'main',
      component:Main,
      meta:{title:'首页'},
      children:[
        {path:'dashboard',
        name:'Dashboard',
        component:()=>import('./views/Dashboard/Dashboard.vue'),
        meta:{title:'仪表盘',icon:'el-icon-yibiaopan'}
        },
        {path:'register',
        name:'Register',
        component:()=>import('./views/Register/Register.vue'),
        meta:{title:'资产登记',icon:'el-icon-xuqiudengji'}
        },
        {path:'retiring',
        name:'Retiring',
        component:()=>import('./views/Retiring/Retiring.vue'),
        meta:{title:'领用退库',icon:'el-icon-lingyong'}
        },
        {path:'borrowreturn',
        name:'Borrowreturn',
        component:()=>import('./views/Borrowreturn/Borrowreturn.vue'),
        meta:{title:'借用归还',icon:'el-icon-guihuanguanli'}
        },
        {path:'revise',
        name:'Revise',
        component:()=>import('./views/Revise/Revise.vue'),
        meta:{title:'信息修改',icon:'el-icon-zhanghaoxinxi-xiugai'}
        },
        {path:'maintenance',
        name:'Maintenance ',
        component:()=>import('./views/Maintenance/Maintenance.vue'),
        meta:{title:'维修管理',icon:'el-icon-weixiu'}
        },
        {path:'scrap',
        name:'Scrap ',
        component:()=>import('./views/Scrap/Scrap.vue'),
        meta:{title:'报废管理',icon:'el-icon-cloud-scrap'}
        },
        {path:'census',
        name:'Census',
        component:()=>import('./views/Census/Census.vue'),
        meta:{title:'资产统计',icon:'el-icon-zichantongji'},
        children:[
          {
            path:'inventory',
            name:'Inventory',
            component:()=>import('./views/Census/Inventory/Inventory.vue'),
            meta:{title:'资产清单',icon:'el-icon-xuqiudengji'}
          },
          {
            path:'resume',
            name:'Resume',
            component:()=>import('./views/Census/Resume/Resume.vue'),
            meta:{title:'资产履历',icon:'el-icon-gerenlvli'}
          },
          {
            path:'taxonomy',
            name:'Taxonomy',
            component:()=>import('./views/Census/Taxonomy/Taxonomy.vue'),
            meta:{title:'资产分类汇总',icon:'el-icon-huizong'}
          }
        ]
        },
        {
          path:'system',
          name:'System',
          component:()=>import('./views/System/System.vue'),
          meta:{title:'系统管理',icon:'el-icon-xitongguanli'},
          children:[
            {
              path:'assetclass',
              name:'Assetclass',
              component:()=>import('./views/System/Assetclass/Assetclass.vue'),
              meta:{title:'资产分类',icon:'el-icon-Asset-classification-maintenance'}
            },
            {
              path:'roles',
              name:'Roles',
              component:()=>import('./views/System/Roles/Roles.vue'),
              meta:{title:'角色管理',icon:'el-icon-jiaoseguanli'}
            },
            {
              path:'organization',
              name:'Organization',
              component:()=>import('./views/System/Organization/Organization.vue'),
              meta:{title:'组织架构',icon:'el-icon-zuzhijiagou'}
            },
            {
              path:'users',
              name:'Users',
              component:()=>import('./views/System/Users/Users.vue'),
              meta:{title:'用户管理',icon:'el-icon-yonghuguanli'}
            },
            {
              path:'staffs',
              name:'Staffs',
              component:()=>import('./views/System/Staffs/Staffs.vue'),
              meta:{title:'员工管理',icon:'el-icon-yuangongguanli'}
            }
          ]
        }
      ]
    }
  ]
})
