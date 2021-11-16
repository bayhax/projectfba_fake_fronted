const comp = () => import('./Blog')

export default {
  name: 'blog',
  path: '/blog:id',
  component: comp
}
