
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/App.vue') },
      { path: 'view-instructors', component: () => import('pages/ViewInstructors.vue') },
      { path: 'add-course', component: () => import('pages/AddCourse.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
