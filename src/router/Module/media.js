const media = {
  path: '/media',
  component: () => import('@/pages/layout.vue'),
  children: [
    {
      path: '/video',
      component: () => import('components/media/Video.vue'),
      media: { title: '视频播放器' },
    },
  ],
};
export default media;
