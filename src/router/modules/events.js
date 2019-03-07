import Events from '@/views/Home/Events'
const events = {
    path: '/home/events',
    name: 'events',
    component: Events,
    meta: [
        { name: 'home', path: '/home' },
        { name: 'events', path: '/home/events' },
    ]
}
export default events